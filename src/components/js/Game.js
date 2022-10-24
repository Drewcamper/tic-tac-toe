import { Popup} from './PopupShrink'
import { Board } from './Board'
import { Info } from './Info'
import { useContext } from 'react';
import { GameContext } from '../../context/context';


export const Game = () => {
    const { winner, setWinner, reset, setReset } = useContext(GameContext);
    return (
        <div className='App'>            
            <Board reset={reset} setReset={setReset} winner={winner} setWinner={setWinner} />
            <Info />
            <Popup />
        </div>
    )
}