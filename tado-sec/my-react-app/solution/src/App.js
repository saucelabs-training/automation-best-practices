import './App.css';
import logo from './mia-me.jpg';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img
					src={logo}
					className='App-logo'
					alt='logo'
					data-testid='main-img'
				/>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://youtube.com/ultimateqa'
					target='_blank'
					rel='noopener noreferrer'
					//data-testid="learn-link"
				>
					Learn Testing w/ Mia + Nikolay
				</a>
			</header>
		</div>
	);
}

export default App;
