import Home from './components/pages/home';
import './assets/css/main.css';
import {useEffect, useState} from 'react';
import BounceLoader from "react-spinners/BounceLoader";

function App() {
	const [loading,setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
		setLoading(false);
		}, 8000);
	}, []);
	return (
		<div className='App'>
			{loading ?( 
      <div className="loader">
				<BounceLoader color={'#FD0321'} loading={loading} size={60} />
			</div>) : (<Home />)}
			
		</div>
	);
}

export default App;
