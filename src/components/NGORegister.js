import React, { Component } from 'react'


class NGORegister extends Component {

  onLocationHandler = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      console.log(position)
    })
  }

  render() {


    return (
      <>
        {/* <Navigation/> */}
        <div style={{display:'flex',
        flexFlow:'column',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100%',
        }}>
          <form style={{width:'70%'}}>
          <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between" }}>
          <h2>NGO Registration</h2>
          <button onClick={()=>this.props.history.push('/')} type="submit" class="btn btn-primary" style={{height:"80%"}}>Go Back</button>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">NGO Name</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"/>
            <small id="emailHelp" class="form-text text-muted">Please fill the name of your Ngo.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">PinCode</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Pincode"/>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">City</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="City"/>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
          </div>
          <button type="submit" class="btn btn-primary" onClick={this.onLocationHandler}>Location</button>
          <br/>
          <br/>

          <center><button onClick={()=>this.props.history.push('/')} type="submit" class="btn btn-primary">Submit</button></center>
      </form>
      </div>
      </>
      
      
    )
  }
}

export default NGORegister
