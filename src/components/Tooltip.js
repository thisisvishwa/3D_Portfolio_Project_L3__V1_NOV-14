```javascript
import React, { useState, useEffect } from 'react';
import '../styles/Tooltip.css';

const Tooltip = ({ badge }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseOver = () => {
        setShowTooltip(true);
    };

    const handleMouseOut = () => {
        setShowTooltip(false);
    };

    return (
        <div className="tooltip-container" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <img src={badge.icon} alt={badge.name} className="badge-icon" />
            {showTooltip && (
                <div className="tooltip">
                    <h3>{badge.name}</h3>
                    <p>{badge.description}</p>
                </div>
            )}
        </div>
    );
};

export default Tooltip;
```