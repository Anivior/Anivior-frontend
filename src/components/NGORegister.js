import React, { Component } from 'react'
import axios from 'axios'

class NGORegister extends Component {


  state= {
    name:``,
    email:``,
    city:``,
    pincode:0,
    contact:null,
    point:``,
    temp:null 
  }

  onLocationHandler = (e) => {
    e.preventDefault()
    navigator.geolocation.getCurrentPosition((position)=>{
      console.log(position)
      this.setState({
        point:`POINT(${74.657936} ${74.657936})`
      })
    })
  }

  onSubmitHandler = (e) => {
    e.preventDefault()
    axios.post('https://anivior.herokuapp.com/auth/register/', this.state).then(res=>this.setState({temp:`NGO successfully added!`}))
  }
  
  componentDidMount(){
    
  }

  render() {

    return (
      <>
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
            <input type="text" class="form-control" placeholder="Name" onChange={(e)=>this.setState({name:e.target.value})}/>
            <small id="emailHelp" class="form-text text-muted">Please fill the name of your Ngo.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">PinCode</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Pincode" onChange={(e)=>this.setState({pincode:e.target.value})}/>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">City</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="City" onChange={(e)=>this.setState({city:e.target.value})}/>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" onChange={(e)=>this.setState({email:e.target.value})}/>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Contact Number</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Number" onChange={(e)=>this.setState({contact:e.target.value})}/>
          </div>
          <button type="submit" class="btn btn-primary" onClick={this.onLocationHandler}>Location</button>
          <br/>
          <br/>

          <center><button onClick={this.onSubmitHandler} type="submit" class="btn btn-primary">Submit</button></center>

          <div>
            {this.state.temp}
          </div>

      </form>
      </div>
      </>
      
      
    )
  }
}

export default NGORegister
