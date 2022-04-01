import './styles.css';
function Card(props) {
  function handleSubmit(event) {
    event.preventDefault();
    let vehicleNumber = event.target.elements[0].value;
    let ownerName = event.target.elements[1].value;
    let vehicleType = event.target.elements[2].value;
    const dataObj = {
      vehicleNumber: vehicleNumber,
      ownerName: ownerName,
      vehicleType: vehicleType
    };
    console.log("------------------");
    fetch('http://localhost:8080', {
      method: 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(dataObj),
      mode: "no-cors"
    }).then(() => {
      console.log("Ho gaya bhaiya");
    })
      .catch(Error => console.log(Error));
  }
  return (
    <div className="card">

      <h1>Vehicle Entry</h1>
      <div>
        <h4>vehicle Number:</h4>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" id="fname" name="fname" placeholder='Enter Vehicle Number' />
          <br />
        </div>
        <div>
          <h4>Owner Name:</h4>
          <input type="text" id="fname" name="Oname" placeholder='Enter Owner Name' />
          <br />
        </div>
        <div>
          <h4>Vehicle Type:</h4>
          <input type="text" id="fname" name="Vname" placeholder='Enter Vehicle Type' />
          <br />
        </div>

        <button>Submit</button>
      </form>

    </div>
  );
}

export default Card;
