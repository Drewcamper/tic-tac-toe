import { useContext } from "react";
import { GameContext } from "../../context/context";
import '../css/Popup.css'



export const Popup = () => {
    const { winner, setReset } = useContext(GameContext);
   
	const ResetBoard = () => {
	    setReset(true);
    }

    return(
        <div className={`winner ${winner !== '' ? '' : 'shrink'}`}>                   
            <div className='winner-text'>{winner}</div>               
                <button onClick={() =>{
                    return(
                        ResetBoard()
                    )
                }}>
                    Reset Board
                </button>
        </div>
        
    )
}