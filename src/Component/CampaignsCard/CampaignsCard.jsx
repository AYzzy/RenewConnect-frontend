import React from 'react';
import { Link } from 'react-router-dom';
import './CampaignsCard.css';

const CampaignCard = ({ campaign }) => {
  const progress = campaign.goal > 0 ? (campaign.raised / campaign.goal) * 100 : 0;

  return (
    <div className="campaign-card">
      <Link to={`/campaigns/${campaign.id}`} className="campaign-card-link">
        <img
          src={campaign.image || 'https://via.placeholder.com/300x200/171719/FFFFFF?text=Project+Image'}
          alt={campaign.title}
          className="campaign-card-image"
        />
        <div className="campaign-card-content">
          <h3 className="campaign-card-title">{campaign.title}</h3>
          <p className="campaign-card-farmer">By: {campaign.farmer}</p>

          <div className="campaign-card-progress-bar">
            <div
              className="campaign-card-progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="campaign-card-funding-info">
            <span>{progress.toFixed(0)}% Funded</span>
            <span>Goal: ${campaign.goal.toLocaleString()}</span>
          </div>
          <p className="campaign-card-raised">Raised: ${campaign.raised.toLocaleString()}</p>
        </div>
      </Link>
      <div className="campaign-card-actions">
        <Link to={`/campaigns/${campaign.id}/invest`}>
          <button className="campaign-card-button">Invest Now</button>
        </Link>
      </div>
    </div>
  );
};

export default CampaignCard;