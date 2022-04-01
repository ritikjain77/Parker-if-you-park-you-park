import { logDOM } from '@testing-library/react';
import  './Home.styles.css';
import Navbar from '../Navbar/index';
import Login from '../Login/index';

function Home(){
    return(
       <div className='homepage'>
         <Navbar/>
        <Login/>
       </div>
    );
}

export default Home;