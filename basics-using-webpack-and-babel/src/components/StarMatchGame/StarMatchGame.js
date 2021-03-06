import * as React from 'react';
import {useState} from 'react';
import Game from "./Game";

const StarMatchGame = () => {
    const [gameId, setGameId] = useState(1);
    return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)}/>;
};

export default StarMatchGame;
