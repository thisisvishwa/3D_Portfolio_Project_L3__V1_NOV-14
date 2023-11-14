```javascript
import React, { useState, useEffect } from 'react';
import Phaser from 'phaser';

const MiniGame = () => {
    const [game, setGame] = useState(null);

    useEffect(() => {
        const config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 200 }
                }
            },
            scene: {
                preload: preload,
                create: create
            }
        };

        setGame(new Phaser.Game(config));

        function preload() {
            this.load.setBaseURL('http://labs.phaser.io');
            this.load.image('sky', 'assets/skies/space3.png');
            this.load.image('logo', 'assets/sprites/phaser3-logo.png');
            this.load.image('red', 'assets/particles/red.png');
        }

        function create() {
            this.add.image(400, 300, 'sky');
            const particles = this.add.particles('red');
            const emitter = particles.createEmitter({
                speed: 100,
                scale: { start: 1, end: 0 },
                blendMode: 'ADD'
            });
            const logo = this.physics.add.image(400, 100, 'logo');
            logo.setVelocity(100, 200);
            logo.setBounce(1, 1);
            logo.setCollideWorldBounds(true);
            emitter.startFollow(logo);
        }
    }, []);

    return (
        <div id="phaser-game">
            {/* Phaser game will be inserted here */}
        </div>
    );
};

export default MiniGame;
```