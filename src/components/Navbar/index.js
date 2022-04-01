import './index.css';
import  logo from './parker-removebg-preview.png';

function Navbar(){
    return(
      <div className='nav'>
         <img src={logo} className='logo' alt='logo'></img>
         <div>PARKER</div>
         <img src={logo} className='logo' alt='logo'></img>
      </div>
    );
}

export default Navbar;