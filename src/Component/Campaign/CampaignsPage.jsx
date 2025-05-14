import React, { useState, useEffect } from 'react';
import CampaignCard from '../CampaignsCard/CampaignsCard'; // Corrected import path
import './CampaignsPage.css';

// Mock data - replace with API call
const allMockCampaigns = [
  { id: 1, title: "Solar Water Pump for Green Acres Farm", farmer: "John Doe", goal: 5000, raised: 2500, image: "https://via.placeholder.com/300x200/0A0A0C/FFFFFF?text=Solar+Pump+1" },
  { id: 2, title: "Biogas Digester for Sunny Meadows", farmer: "Jane Smith", goal: 8000, raised: 6500, image: "https://via.placeholder.com/300x200/0A0A0C/FFFFFF?text=Biogas+1" },
  { id: 3, title: "Community Solar Panels", farmer: "Local Coop", goal: 20000, raised: 15000, image: "https://via.placeholder.com/300x200/0A0A0C/FFFFFF?text=Community+Solar" },
  { id: 4, title: "Wind Turbine for Hilltop Ranch", farmer: "Mike Brown", goal: 12000, raised: 3000, image: "https://via.placeholder.com/300x200/0A0A0C/FFFFFF?text=Wind+Turbine" },
  { id: 5, title: "Efficient Irrigation System Upgrade", farmer: "Sarah Lee", goal: 3000, raised: 3000, image: "https://via.placeholder.com/300x200/0A0A0C/FFFFFF?text=Irrigation" },
  { id: 6, title: "Solar Powered Cold Storage", farmer: "Tom Wilson", goal: 9000, raised: 4500, image: "https://via.placeholder.com/300x200/0A0A0C/FFFFFF?text=Cold+Storage" },
];

const CampaignsPage = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Simulate API call
    setCampaigns(allMockCampaigns);
  }, []);

  const filteredCampaigns = campaigns.filter(campaign => {
    return campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
           campaign.farmer.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="campaigns-page container">
      <header className="campaigns-header">
        <h1>Explore Renewable Energy Campaigns</h1>
        <p>Support farmers and communities in their transition to sustainable energy.</p>
      </header>

      <div className="campaigns-filters">
        <input
          type="text"
          placeholder="Search campaigns..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {filteredCampaigns.length > 0 ? (
        <div className="campaigns-grid grid-container grid-container-cols-3">
          {filteredCampaigns.map(campaign => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      ) : (
        <p className="no-campaigns-message">No campaigns found matching your criteria.</p>
      )}
    </div>
  );
};

export default CampaignsPage;