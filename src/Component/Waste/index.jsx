import React, { useState } from 'react';
import './WasteMarket.css';

const WasteMarket = () => {
  const [offers, setOffers] = useState([
    { id: 1, user: 'user1', type: 'Plastic', quantity: 100, price: 50, description: 'Plastic waste from packaging', createdAt: '2025-04-25T10:00:00Z' },
    { id: 2, user: 'user1', type: 'Organic', quantity: 200, price: 30, description: 'Organic waste from farm', createdAt: '2025-04-24T09:00:00Z' },
    { id: 3, user: 'user2', type: 'Plastic', quantity: 150, price: 40, description: 'Recyclable plastic', createdAt: '2025-04-23T08:00:00Z' },
  ]);

  const [newOffer, setNewOffer] = useState({ user: 'user1', type: '', quantity: '', price: '', description: '' });
  const [editOfferId, setEditOfferId] = useState(null);
  const [filterUser, setFilterUser] = useState('');
  const [quantityRange, setQuantityRange] = useState({ min: '', max: '' });
  const [filterType, setFilterType] = useState('');

  const handleInputChange = (e) => {
    setNewOffer({ ...newOffer, [e.target.name]: e.target.value });
  };

  const handleCreateOrUpdateOffer = (e) => {
    e.preventDefault();
    if (editOfferId) {
      setOffers(offers.map(offer => 
        offer.id === editOfferId ? { ...offer, ...newOffer, createdAt: new Date().toISOString() } : offer
      ));
      setEditOfferId(null);
    } else {
      const newId = offers.length ? offers[offers.length - 1].id + 1 : 1;
      setOffers([...offers, { id: newId, ...newOffer, createdAt: new Date().toISOString() }]);
    }
    setNewOffer({ user: 'user1', type: '', quantity: '', price: '', description: '' });
  };

  const handleEditOffer = (offer) => {
    setNewOffer({ user: offer.user, type: offer.type, quantity: offer.quantity, price: offer.price, description: offer.description });
    setEditOfferId(offer.id);
  };

  const handleDeleteOffer = (id) => {
    setOffers(offers.filter(offer => offer.id !== id));
  };

  const findWasteOffersByUser = () => {
    return filterUser ? offers.filter(offer => offer.user === filterUser) : offers;
  };

  const findWasteOffersByQuantityRange = () => {
    const min = parseInt(quantityRange.min) || 0;
    const max = parseInt(quantityRange.max) || Infinity;
    return offers.filter(offer => offer.quantity >= min && offer.quantity <= max);
  };

  const findWasteOfferByType = () => {
    return filterType ? offers.filter(offer => offer.type.toLowerCase() === filterType.toLowerCase()) : offers;
  };

  const getWasteOfferHistory = () => {
    return offers.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  };

  let filteredOffers = offers;
  if (filterUser) filteredOffers = findWasteOffersByUser();
  if (quantityRange.min || quantityRange.max) filteredOffers = findWasteOffersByQuantityRange();
  if (filterType) filteredOffers = findWasteOfferByType();

  return (
    <div className="waste-market">
      <h1>Waste Marketplace</h1>

      {/* Create/Update Waste Offer Form */}
      <section className="offer-form">
        <h2>{editOfferId ? 'Update Waste Offer' : 'Create Waste Offer'}</h2>
        <form onSubmit={handleCreateOrUpdateOffer}>
          <div className="form-group">
            <label htmlFor="type">Waste Type</label>
            <input
              id="type"
              type="text"
              name="type"
              placeholder="e.g., Plastic, Organic"
              value={newOffer.type}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity (kg)</label>
            <input
              id="quantity"
              type="number"
              name="quantity"
              placeholder="e.g., 100"
              value={newOffer.quantity}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price ($)</label>
            <input
              id="price"
              type="number"
              name="price"
              placeholder="e.g., 50"
              value={newOffer.price}
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
              <button type="button" className="cancel-btn" onClick={() => {
                setEditOfferId(null);
                setNewOffer({ user: 'user1', type: '', quantity: '', price: '', description: '' });
              }}>
                Cancel
              </button>
            )}
          </div>
        </form>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <h2>Filter Waste Offers</h2>
        <div className="filters">
          <div className="form-group">
            <label htmlFor="filter-user">Filter by User</label>
            <input
              id="filter-user"
              type="text"
              placeholder="e.g., user1"
              value={filterUser}
              onChange={(e) => setFilterUser(e.target.value)}
            />
          </div>
          <div className="form-group quantity-range">
            <div>
              <label htmlFor="min-quantity">Min Quantity</label>
              <input
                id="min-quantity"
                type="number"
                placeholder="e.g., 50"
                value={quantityRange.min}
                onChange={(e) => setQuantityRange({ ...quantityRange, min: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="max-quantity">Max Quantity</label>
              <input
                id="max-quantity"
                type="number"
                placeholder="e.g., 200"
                value={quantityRange.max}
                onChange={(e) => setQuantityRange({ ...quantityRange, max: e.target.value })}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="filter-type">Filter by Type</label>
            <input
              id="filter-type"
              type="text"
              placeholder="e.g., Plastic"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Waste Offers List */}
      <section className="offers-list">
        <h2>Waste Offers</h2>
        {filteredOffers.length ? (
          filteredOffers.map(offer => (
            <div key={offer.id} className="offer-card">
              <div className="offer-details">
                <p><strong>Type:</strong> {offer.type}</p>
                <p><strong>Quantity:</strong> {offer.quantity} kg</p>
                <p><strong>Price:</strong> ${offer.price}</p>
                <p><strong>Description:</strong> {offer.description}</p>
                <p><strong>User:</strong> {offer.user}</p>
                <p><strong>Created:</strong> {new Date(offer.createdAt).toLocaleString()}</p>
              </div>
              <div className="offer-actions">
                <button className="edit-btn" onClick={() => handleEditOffer(offer)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDeleteOffer(offer.id)}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p>No waste offers found.</p>
        )}
      </section>

      {/* Waste Offer History */}
      <section className="offer-history">
        <h2>Waste Offer History</h2>
        {getWasteOfferHistory().length ? (
          getWasteOfferHistory().map(offer => (
            <div key={offer.id} className="history-item">
              <p>
                <strong>{offer.type}</strong> - {offer.quantity} kg - ${offer.price} by {offer.user} on {new Date(offer.createdAt).toLocaleString()}
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