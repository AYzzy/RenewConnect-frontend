import React, { useState, useEffect } from 'react';
import './WasteMarket.css';

const WasteMarket = () => {
  const [offers, setOffers] = useState([]);
  const [newOffer, setNewOffer] = useState({
    wasteType: '',
    quantity: '',
    price: '',
    unitOfMeasure: '',
    location: '',
    wasteCondition: '',
    availableFrom: '',
    description: '',
  });
  const [editOfferId, setEditOfferId] = useState(null);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);
  const [wasteOfferResponse, setWasteOfferResponse] = useState({});
  console.log(wasteOfferResponse)

  useEffect(() => {
    checkAuthentication();
    fetchOffers();
  }, []);

  const checkAuthentication = () => {
    const token = localStorage.getItem('token');
    const storedUserId = localStorage.getItem('userId'); // Adjust if userId is stored differently
    if (token && storedUserId) {
      setIsAuthenticated(true);
      setUserId(storedUserId);
    } else {
      setIsAuthenticated(false);
      setError('You must be logged in to perform this action.');
    }
  };

  const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.warn('No token found in localStorage');
    }
    return {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    };
  };

  const fetchOffers = async () => {
    if (!isAuthenticated) return;
    try {
      const response = await fetch('http://localhost:8058/api/waste-offers', {
        headers: getAuthHeaders(),
      });
      if (!response.ok) {
        if (response.status === 401) {
          setError('Unauthorized: Please log in again.');
          setIsAuthenticated(false);
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setOffers(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching offers:', error);
      setError('Failed to fetch offers. Please check your authentication or try again later.');
    }
  };

  const handleInputChange = (e) => {
    setNewOffer({ ...newOffer, [e.target.name]: e.target.value });
  };

  const handleCreateOrUpdateOffer = async (e) => {
    e.preventDefault();
    if (!isAuthenticated || !userId) {
      setError('You must be logged in to create or update an offer.');
      return;
    }
    try {
      const payload = {
        wasteType: newOffer.wasteType,
        quantity: parseFloat(newOffer.quantity),
        price: parseFloat(newOffer.price),
        unitOfMeasure: newOffer.unitOfMeasure,
        location: newOffer.location,
        wasteCondition: newOffer.wasteCondition,
        availableFrom: newOffer.availableFrom,
        description: newOffer.description,
      };

      let response;
      if (editOfferId) {
        // Update offer
        response = await fetch(`http://localhost:8058/api/waste-offers/${editOfferId}`, {
          method: 'PUT',
          headers: getAuthHeaders(),
          body: JSON.stringify(payload),
        });
      } else {
        // Create new offer
        response = await fetch(`http://localhost:8058/api/waste-offers/create?userId=${userId}`, {
          method: 'POST',
          headers: getAuthHeaders(),
          body: JSON.stringify(payload),
        });
        const data = await response.json()
        setWasteOfferResponse(data)
      }

      if (!response.ok) {
        if (response.status === 401) {
          setError('Unauthorized: Please log in again.');
          setIsAuthenticated(false);
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      await fetchOffers();
      setNewOffer({
        wasteType: '',
        quantity: '',
        price: '',
        unitOfMeasure: '',
        location: '',
        wasteCondition: '',
        availableFrom: '',
        description: '',
      });
      setEditOfferId(null);
      setError(null);
    } catch (error) {
      console.error('Error saving offer:', error);
      setError('Failed to save offer. Please check your input or authentication.');
    }
  };

  const handleEditOffer = (offer) => {
    if (!isAuthenticated) {
      setError('You must be logged in to edit an offer.');
      return;
    }
    setNewOffer({
      wasteType: offer.wasteType,
      quantity: offer.quantity.toString(),
      price: offer.price.toString(),
      unitOfMeasure: offer.unitOfMeasure,
      location: offer.location,
      wasteCondition: offer.wasteCondition,
      availableFrom: offer.availableFrom ? offer.availableFrom.split('T')[0] : '',
      description: offer.description,
    });
    setEditOfferId(offer.id);
  };

  const handleDeleteOffer = async (id) => {
    if (!isAuthenticated) {
      setError('You must be logged in to delete an offer.');
      return;
    }
    try {
      const response = await fetch(`http://localhost:8058/api/waste-offers/${id}?userId=${userId}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });
      if (!response.ok) {
        if (response.status === 401) {
          setError('Unauthorized: Please log in again.');
          setIsAuthenticated(false);
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      await fetchOffers();
      setError(null);
    } catch (error) {
      console.error('Error deleting offer:', error);
      setError('Failed to delete offer. Please check your authentication.');
    }
  };

  const getWasteOfferHistory = () => {
    return offers.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  };

  return (
    <div className="waste-market">
      <h1>Waste Marketplace</h1>
      {error && <div className="error-message">{error}</div>}

      {/* Create/Update Waste Offer Form */}
      <section className="offer-form">
        <h2>{editOfferId ? 'Update Waste Offer' : 'Create Waste Offer'}</h2>
        <form onSubmit={handleCreateOrUpdateOffer}>
          <div className="form-group">
            <label htmlFor="wasteType">Waste Type</label>
            <select
              id="wasteType"
              name="wasteType"
              value={newOffer.wasteType}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Waste Type</option>
              <option value="AGRICULTURAL_WASTE">Agricultural Waste</option>
              <option value="PLASTIC_WASTE">Plastic Waste</option>
              <option value="FOOD_WASTE">Food Waste</option>
              <option value="WOOD_CHIPS">Wood Chips</option>
              <option value="ANIMAL_WASTE">Animal Waste</option>
              <option value="TEXTILE_WASTE">Textile Waste</option>
              <option value="USED_TIRES">Used Tires</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity (kg)</label>
            <input
              id="quantity"
              type="number"
              name="quantity"
              placeholder="e.g., 500"
              value={newOffer.quantity}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price (#)</label>
            <input
              id="price"
              type="number"
              name="price"
              placeholder="e.g., 100"
              value={newOffer.price}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="unitOfMeasure">Unit of Measure</label>
            <input
              id="unitOfMeasure"
              type="text"
              name="unitOfMeasure"
              placeholder="e.g., kg"
              value={newOffer.unitOfMeasure}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              id="location"
              type="text"
              name="location"
              placeholder="e.g., Springfield Farm"
              value={newOffer.location}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="wasteCondition">Condition</label>
            <select
              id="wasteCondition"
              name="wasteCondition"
              value={newOffer.wasteCondition}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Condition</option>
              <option value="DRY">Dry</option>
              <option value="WET">Wet</option>
              <option value="COMPACTED">Compacted</option>
              <option value="LOOSE">Loose</option>
              <option value="PACKAGED">Packaged</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="availableFrom">Available From</label>
            <input
              id="availableFrom"
              type="date"
              name="availableFrom"
              value={newOffer.availableFrom}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group description">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Describe the waste offer"
              value={newOffer.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" disabled={!isAuthenticated}>
              {editOfferId ? 'Update Offer' : 'Create Offer'}
            </button>
            {editOfferId && (
              <button
                type="button"
                className="cancel-btn"
                onClick={() => {
                  setEditOfferId(null);
                  setNewOffer({
                    wasteType: '',
                    quantity: '',
                    price: '',
                    unitOfMeasure: '',
                    location: '',
                    wasteCondition: '',
                    availableFrom: '',
                    description: '',
                  });
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </section>
    
<section className="offer-history">
  <h2>Waste Offer History</h2>
  <div>
    {Object.keys(wasteOfferResponse).length > 0 ? (
      <div className="history-item">
        <p>
          <strong>{wasteOfferResponse.wasteType}</strong> - {wasteOfferResponse.quantity} kg - ${wasteOfferResponse.price} - {wasteOfferResponse.unitOfMeasure}<br />
          Location: {wasteOfferResponse.location}<br />
          Condition: {wasteOfferResponse.wasteCondition}<br />
          Available From: {wasteOfferResponse.availableFrom ? new Date(wasteOfferResponse.availableFrom).toLocaleDateString() : 'N/A'}<br />
          Description: {wasteOfferResponse.description}<br />
          Created: {wasteOfferResponse.createdAt ? new Date(wasteOfferResponse.createdAt).toLocaleString() : 'N/A'}
        </p>
      </div>
    ) : null}
  </div>
  {getWasteOfferHistory().length || Object.keys(wasteOfferResponse).length > 0 ? (
    getWasteOfferHistory().map((offer) => (
      <div key={offer.id} className="history-item">
        <p>
          <strong>{offer.wasteType}</strong> - {offer.quantity} kg - ${offer.price} on{' '}
          {new Date(offer.createdAt).toLocaleString()}
        </p>
        <div className="history-actions">
          <button onClick={() => handleEditOffer(offer)} disabled={!isAuthenticated}>
            Edit
          </button>
          <button onClick={() => handleDeleteOffer(offer.id)} disabled={!isAuthenticated}>
            Delete
          </button>
        </div>
      </div>
    ))
  ) : (
    <p>No history available.</p>
  )}
</section>
    </div>
  );
};

export default WasteMarket;