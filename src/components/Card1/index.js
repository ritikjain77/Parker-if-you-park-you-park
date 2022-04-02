import './styles.css';

function Card1(props) {
  async function handleSubmit(event) {
    event.preventDefault();
    let vehicleNumber = event.target.elements[0].value;
    const dataObj = {
      vehicleNumber: vehicleNumber,
    };
    await fetch(`http://localhost:8080/${vehicleNumber}`, {
      method: 'GET',
      headers: { "Content-type": "application/json" },
      mode: "no-cors"
    }).then(Response => console.log(Response))
    .catch(Error => console.log(Error));
  }
  return (
    <div className="card">


      <h1>Vehicle Exit</h1>
      <div>
        <h4>vehicle Number:</h4>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" id="fname" name="fname" placeholder='Enter Vehicle Number' />
          <br />
        </div>

        <input type="submit" value="Submit" class="button" />
      </form>
      <div>
        <h4>Calculated Fare:</h4>
        <p>100</p>
        <br />
      </div>




    </div>
  );
}

export default Card1;