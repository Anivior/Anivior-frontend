import React, { Component } from 'react'
import axios from 'axios'


class ReportAnimal extends Component {

  state={
    category:``,
    image:null,
    
    longitude:null,
    latitude:null,
    temp:null
  }

  onReportHandler = (e) => {
    e.preventDefault()
    console.log(this.state)
    const data = new FormData();
    data.append('category',this.state.category)
    data.append('image',this.state.image);
    data.append('longitude',74.657936)
    data.append('latitude',25.361928)
    // console.log(this.state)
    // console.log(data.get("image"))
    axios.post('https://anivior.herokuapp.com/ngo/help/', data).then(res=>this.setState({
      temp:`Successfully Reported`
    }))
  }

  onLocationHandler = (e) => {
    e.preventDefault()
    navigator.geolocation.getCurrentPosition((position)=>{
      console.log(position)
      this.setState({
        longitude:position.coords.longitude,
        latitude:position.coords.latitude
      })
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
          <button onClick={()=>this.props.history.push('/')} type="submit" class="btn btn-primary" style={{height:"8%"}}>Go Back</button>
          <center><h2>Report Now</h2></center>
        
          <div class="input-group mb-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Select catogery</label>
            </div>
            <select onChange={(e)=> {this.setState({category:e.target.value})}} class="custom-select" id="inputGroupSelect01">
                <option selected value="dog">Choose...</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Cow">Cow</option>
            </select>
         </div>
         <div class="form-group">
            <label for="exampleInputPassword1">Image</label>
            <input type="file" name="file" onChange={(e)=>this.setState({image:e.target.files[0]})}/>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Locality</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Text" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">City</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="City"/>
          </div>
         
          <button type="submit" class="btn btn-primary" onClick={this.onLocationHandler}>Location</button>
          <br/>
          <br/>
          <center><button onClick={this.onReportHandler} type="submit" class="btn btn-primary" >Report</button></center>
      </form>
      <div>
        {this.state.temp}
      </div>
      </div>
      </>
      
      
    )
  }
}

export default ReportAnimal
