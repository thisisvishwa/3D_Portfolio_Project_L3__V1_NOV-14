```javascript
import React, { useState, useEffect } from 'react';

const EasterEgg = () => {
    const [isEasterEggFound, setIsEasterEggFound] = useState(false);

    useEffect(() => {
        // Logic to check if the user has discovered the Easter egg
        // This could be a specific action, or visiting a specific part of the portfolio
        // For simplicity, let's say the Easter egg is found when the user clicks on the component

        const checkEasterEgg = () => {
            setIsEasterEggFound(true);
            // Here you would also send a request to the server to update the user's data
        }

        window.addEventListener('click', checkEasterEgg);

        // Cleanup
        return () => {
            window.removeEventListener('click', checkEasterEgg);
        }
    }, []);

    return (
        <div className={`easter-egg ${isEasterEggFound ? 'found' : ''}`}>
            {isEasterEggFound ? 'You found the Easter egg!' : 'Can you find the Easter egg?'}
        </div>
    );
}

export default EasterEgg;
```