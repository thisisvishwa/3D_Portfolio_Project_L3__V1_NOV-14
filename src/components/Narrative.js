```javascript
import React, { useState, useEffect } from 'react';

const Narrative = () => {
    const [narrative, setNarrative] = useState('');

    useEffect(() => {
        fetchNarrative();
    }, []);

    const fetchNarrative = async () => {
        try {
            const response = await fetch('/api/narrative');
            const data = await response.json();
            setNarrative(data);
        } catch (error) {
            console.error('Error fetching narrative:', error);
        }
    };

    return (
        <div className="narrative">
            <h2>Narrative</h2>
            <p>{narrative}</p>
        </div>
    );
};

export default Narrative;
```