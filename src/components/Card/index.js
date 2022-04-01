import './styles.css';

//----------
//Components
//----------

function Card(props) {

      const handleSubmit = () =>{
        console.log("mayank madarchod");
        // event.preventDefault();
        // console.log(event.target.elements.fname.value);
        // console.log(event.target.elements.Oname.value);
        // console.log(event.target.elements.Vname.value);
      };
      return(
          <div className="card">
            

            <h1>Vehicle Entry</h1>
            <div>
            <h4>vehicle Number:</h4>
            <input type="text" id="fname" name="fname" placeholder='Enter Vehicle Number'/>
            <br/>
            </div>
            <div>
            <h4>Owner Name:</h4>
            <input type="text" id="fname" name="Oname" placeholder='Enter Owner Name'/>
            <br/>
            </div>
            <div>
            <h4>Vehicle Type:</h4>
            <input type="text" id="fname" name="Vname" placeholder='Enter Vehicle Type'/>
            <br/>
            </div>
            
           <button onClick={handleSubmit()}>Submit</button>

           
          </div>
      );
    }

    export default Card;
  
//   class App extends React.Component {
//     render() {
//       return (
//         <>
//         //  <div class="header">
//         //    <h1>React Card Component</h1>
//         //    <h3>A simple and responsive card component in React with clean hover effects. Copy and customise.</h3>
//         //  </div>
        
//          <div className='cards'>
//            <Card
//             img='https://picsum.photos/id/54/400/300'
//             title='What I learned from my visit to The Upside Down'
//             author='Nancy Wheeler' />
//         </div>  
//         </>
//       )
//     }
//   }
  
  