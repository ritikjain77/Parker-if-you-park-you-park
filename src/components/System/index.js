import './styles.css';
import Navbar from '../Navbar/index';
import Card from '../Card/index';
import Card1 from '../Card1/index';


function System(){
    return (
        <div className='homepage'>
         <Navbar/>
         <div className='Main'>
         <Card />
         <Card1/>
         </div>
         
       </div>
    );
}

export default System;