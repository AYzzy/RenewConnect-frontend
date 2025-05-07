import React from "react";
import { useNavigate } from "react-router-dom";
// import { Sun} from "../../assets/index;js"; // Assuming you have a Sun icon in your assets
// import { Briefcase, Recycle } from "react-icons/fi";
import "./RoleSelection.css"; 

const RoleSelection = () => {
  const navigate = useNavigate();

  const roles = [
    {
      title: "Individual User",
      description: "Browse and invest in sustainable projects",
      // icon: <user className="icon" />,
      path: "/dashboard/user",
    },
    {
      title: "Investor",
      description: "Fund sustainable projects and track investments",
      // icon: <Briefcase className="icon" />,
      path: "/dashboard/investor",
    },
    {
      title: "Solar Company",
      description: "List solar projects and find investors",
      // icon: <Sun className="icon" />,
      path: "/dashboard/solar",
    },
    {
      title: "Waste Buyer",
      description: "Connect with recycling initiatives",
      // icon: <Recycle className="icon" />,
      path: "/dashboard/waste",
    },
  ];

  return (
    <div className="role-selection-container">
      <div className="role-selection-header">
        <h1>Choose Your Role</h1>
        <p>Select how you would like to participate in our sustainable ecosystem</p>
      </div>
      <div className="role-selection-grid">
        {roles.map((role) => (
          <div
            key={role.title}
            className="role-card"
            onClick={() => navigate(role.path)}
          >
            <div className="role-icon">{role.icon}</div>
            <h2>{role.title}</h2>
            <p>{role.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoleSelection;