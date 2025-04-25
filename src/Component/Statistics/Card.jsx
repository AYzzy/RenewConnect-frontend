import React from "react";
import './Statistics.css';

const Card = ({title, content}) =>{
    return (
        <div className="stat-card">
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}
export default Card