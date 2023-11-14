```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BadgeDisplay.css';

const BadgeDisplay = () => {
    const [badges, setBadges] = useState([]);

    useEffect(() => {
        fetchBadges();
    }, []);

    const fetchBadges = async () => {
        try {
            const response = await axios.get('/api/badges');
            setBadges(response.data);
        } catch (error) {
            console.error('Error fetching badges:', error);
        }
    };

    return (
        <div className="badge-display">
            {badges.map(badge => (
                <div key={badge.badgeID} className="badge">
                    <img src={badge.icon} alt={badge.name} />
                    <div className="tooltip">
                        <h3>{badge.name}</h3>
                        <p>{badge.description}</p>
                        <p>Earned on: {new Date(badge.dateEarned).toLocaleDateString()}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BadgeDisplay;
```