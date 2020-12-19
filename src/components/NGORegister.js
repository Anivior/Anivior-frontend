import React, { useState } from "react";
import MapPicker from 'react-google-map-picker'

const DefaultLocation = { lat: 10, lng: 106};
const DefaultZoom = 10;

const NGORegister = ()=>{

const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

const [location, setLocation] = useState(defaultLocation);
const [zoom, setZoom] = useState(DefaultZoom);

function handleChangeLocation (lat, lng){
setLocation({lat:lat, lng:lng});
}

function handleChangeZoom (newZoom){
setZoom(newZoom);
}

function handleResetLocation(){
setDefaultLocation({ ... DefaultLocation});
setZoom(DefaultZoom);
}

 return (
 	<div className = "text-center">	
        <div className="col-md-10 col-md-offset-1 section-title">
        	<h2>Register</h2>
        </div>

    	<div className="form-outline col-xs-4 text-center">
    	  <input type="text" id="form1" placeholder="NGO Name" className="form-control " />
    	</div>

        <div className="form-outline col-xs-4 text-center">
          <input type="email" id="form1" placeholder="Email ID" className="form-control " />
        </div>

        <div className="form-outline col-xs-4 text-center">
          <input type="text" id="form1" placeholder="City" className="form-control " />
        </div>

        <div className="form-outline col-xs-4 text-center">
          <input type="text" id="form1" placeholder="Pincode" className="form-control " />
        </div>

        <button onClick={handleResetLocation}>Reset Location</button>
        <label>Latitute:</label><input type='text' value={location.lat} disabled/>
        <label>Longitute:</label><input type='text' value={location.lng} disabled/>
        <label>Zoom:</label><input type='text' value={zoom} disabled/>

        <MapPicker defaultLocation={defaultLocation}
        zoom={zoom}
        style={{height:'700px'}}
        onChangeLocation={handleChangeLocation} 
        onChangeZoom={handleChangeZoom}
        apiKey='AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8'/>
        
      	<button className="btn btn-custom btn-lg page-scroll ">
          	Register Now
        </button>
 	</div>
 	)
}

export default NGORegister;