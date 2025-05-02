import React, { useState, useEffect } from 'react';
import './WasteMarket.css';

const WasteMarket = () => {
  const [offers, setOffers] = useState([]);
  const [newOffer, setNewOffer] = useState({
    user: 'user1',
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

  // Fetch all waste offers on component mount
  useEffect(() => {
    fetchAllOffers();
  }, []);

  // Fetch all waste offers from the backend
  const fetchAllOffers = async () => {
    try {
      const response = await fetch('http://localhost:8058/api/waste-offers/get-All');
      if (response.ok) {
        const data = await response.json();
        setOffers(data);
      } else {
        console.error('Failed to fetch offers');
      }
    } catch (error) {
      console.error('Error fetching offers:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewOffer({ ...newOffer, [e.target.name]: e.target.value });
  };

  const handleCreateOrUpdateOffer = async (e) => {
    e.preventDefault();
    try {
      if (editOfferId) {
        const response = await fetch('http://localhost:8058/api/waste-offers/update', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: editOfferId, ...newOffer }),
        });
        if (response.ok) {
          await fetchAllOffers();
          setEditOfferId(null);
        }
      } else {
        const response = await fetch('http://localhost:8058/api/waste-offers/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newOffer),
        });
        if (response.ok) {
          await fetchAllOffers();
        }
      }
      setNewOffer({
        user: 'user1',
        wasteType: '',
        quantity: '',
        price: '',
        unitOfMeasure: '',
        location: '',
        wasteCondition: '',
        availableFrom: '',
        description: '',
      });
    } catch (error) {
      console.error('Error saving offer:', error);
    }
  };

  const handleEditOffer = (offer) => {
    setNewOffer({
      user: offer.user,
      wasteType: offer.wasteType,
      quantity: offer.quantity.toString(),
      price: offer.price.toString(),
      unitOfMeasure: offer.unitOfMeasure,
      location: offer.location,
      wasteCondition: offer.wasteCondition,
      availableFrom: offer.availableFrom,
      description: offer.description,
    });
    setEditOfferId(offer.id);
  };

  const handleDeleteOffer = async (id) => {
    try {
      const response = await fetch('http://localhost:8058/api/waste-offers/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      if (response.ok) {
        await fetchAllOffers();
      }
    } catch (error) {
      console.error('Error deleting offer:', error);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:8058/api/auth/logout', {
        method: 'POST',
        credentials: 'include', // Include cookies if needed for authentication
      });
  
      if (response.ok) {
        console.log('User logged out successfully');
        window.location.href = '/auth'; // Redirect to login page
      } else {
        console.error('Failed to log out');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const getWasteOfferHistory = () => {
    return offers.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  };

  return (
    <div className="waste-market">
      {/* Logout Button */}
      <div className="logout-container">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <h1>Waste Marketplace</h1>

      
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
            <button type="submit">{editOfferId ? 'Update Offer' : 'Create Offer'}</button>
            {editOfferId && (
              <button
                type="button"
                className="cancel-btn"
                onClick={() => {
                  setEditOfferId(null);
                  setNewOffer({
                    user: 'user1',
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

      {/* Waste Offer History */}
      <section className="offer-history">
        <h2>Waste Offer History</h2>
        {getWasteOfferHistory().length ? (
          getWasteOfferHistory().map((offer) => (
            <div key={offer.id} className="history-item">
              <p>
                <strong>{offer.wasteType}</strong> - {offer.quantity} kg - ${offer.price} by {offer.user} on{' '}
                {new Date(offer.createdAt).toLocaleString()}
              </p>
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