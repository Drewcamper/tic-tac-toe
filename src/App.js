import { Game } from './components/js/Game';
import { GameProvider } from './context/context';
import "./App.css";


function App() {

	return (
		<GameProvider >
			<Game />
		</GameProvider>

	);
}

export default App;
