import './styles.css';

//----------
//Components
//----------

function Card1(props) {
      return(
          <div className="card">
            

            <h1>Vehicle Exit</h1>
            <div>
            <h4>vehicle Number:</h4>
            <input type="text" id="fname" name="fname" placeholder='Enter Vehicle Number'/>
            <br/>
            </div>
            
            <input type="submit" value="Submit" class="button"/>

            <div>
            <h4>Calculated Fare:</h4>
            <p>100</p>
            <br/>
            </div>

            

           
          </div>
      );
    }

    export default Card1;