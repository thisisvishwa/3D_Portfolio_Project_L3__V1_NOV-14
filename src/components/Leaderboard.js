```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Leaderboard = () => {
    const [leaderboardData, setLeaderboardData] = useState([]);

    useEffect(() => {
        fetchLeaderboardData();
    }, []);

    const fetchLeaderboardData = async () => {
        try {
            const response = await axios.get('/api/leaderboard');
            setLeaderboardData(response.data);
        } catch (error) {
            console.error(`Error fetching leaderboard data: ${error}`);
        }
    };

    return (
        <div className="leaderboard">
            <h2>Leaderboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>User</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboardData.map((user, index) => (
                        <tr key={user.userID}>
                            <td>{index + 1}</td>
                            <td>{user.username}</td>
                            <td>{user.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;
```