import Home from './components/pages/home';
import './assets/css/main.css';
import {useEffect, useState} from 'react';
import RingLoader from "react-spinners/RingLoader";

function App() {
	const [loading,setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
		setLoading(false);
		}, 5000);
	}, []);
	return (
		<div className='App'>
			{loading ?( 
      <div className="loader">
				<RingLoader color={'#FD0321'} loading={loading} size={80} />
			</div>) : (<Home />)}
			
		</div>
	);
}

export default App;
