```javascript
import React, { useState, useEffect } from 'react';
import '../styles/ProgressBar.css';

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Fetch progress data from the server here
        // For now, we'll just simulate it with a timeout
        const timer = setTimeout(() => {
            setProgress(prevProgress => prevProgress >= 100 ? 100 : prevProgress + 10);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [progress]);

    return (
        <div className="progress-bar">
            <div className="progress-bar-fill" style={{width: `${progress}%`}}></div>
        </div>
    );
};

export default ProgressBar;
```