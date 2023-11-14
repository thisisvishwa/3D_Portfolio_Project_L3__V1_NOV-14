```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Reward = () => {
    const [rewards, setRewards] = useState([]);

    useEffect(() => {
        fetchRewards();
    }, []);

    const fetchRewards = async () => {
        try {
            const response = await axios.get('/api/rewards');
            setRewards(response.data);
        } catch (error) {
            console.error('Error fetching rewards:', error);
        }
    };

    const redeemReward = async (rewardId) => {
        try {
            await axios.post(`/api/rewards/${rewardId}/redeem`);
            fetchRewards();
        } catch (error) {
            console.error('Error redeeming reward:', error);
        }
    };

    return (
        <div className="reward-container">
            {rewards.map((reward) => (
                <div key={reward._id} className="reward-card">
                    <img src={reward.image} alt={reward.name} />
                    <h3>{reward.name}</h3>
                    <p>{reward.description}</p>
                    {reward.isRedeemable && (
                        <button onClick={() => redeemReward(reward._id)}>
                            Redeem
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Reward;
```