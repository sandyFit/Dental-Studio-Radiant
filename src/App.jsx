import React, {useEffect} from 'react';
import Navbar from './layouts/Navbar';
import Home from './pages/home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS styles

const App = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000, // values from 0 to 3000, with step 50ms
        });
    }, []);

    return (
        <div>
            <Navbar />
            <Home/>
        </div>
    )
}

export default App
