import React, { useState, useEffect } from 'react';
import './Feedback.css';

const Feedback = () => {
    const [feedback, setFeedback] = useState('');
    const [showFeedback, setShowFeedback] = useState(false);

    useEffect(() => {
        if (feedback) {
            setShowFeedback(true);
            setTimeout(() => {
                setShowFeedback(false);
            }, 3000);
        }
    }, [feedback]);

    const triggerFeedback = (message) => {
        setFeedback(message);
    }

    return (
        <div className={`feedback-container ${showFeedback ? 'show' : ''}`}>
            <p>{feedback}</p>
        </div>
    );
}

export default Feedback;