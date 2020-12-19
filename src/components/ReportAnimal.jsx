import React, { Component } from 'react'


class ReportAnimal extends Component {

    onLocationHandler = () => {
        navigator.geolocation.getCurrentPosition((position)=>{
          console.log(position)
        })
    }

    onSelectHandler = (e) => {
        console.log(e.target.value)
    }


    fileChangeHandler = (e) => {
        console.log(e.target.files[0])
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
            <select onChange={(e)=> this.onSelectHandler(e)} class="custom-select" id="inputGroupSelect01">
                <option selected value="dog">Choose...</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Cow">Cow</option>
            </select>
         </div>
         <div class="form-group">
            <label for="exampleInputPassword1">Image</label>
            <input type="file" name="file" onChange={(e)=>this.fileChangeHandler(e)}/>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Locality</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Pincode"/>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">City</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="City"/>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Contact Number</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
          </div>
          <button type="submit" class="btn btn-primary" onClick={this.onLocationHandler}>Location</button>
          <br/>
          <br/>
          <center><button onClick={()=>{
              setTimeout(()=>{
                  this.props.history.push('/')
              },3000)
          }} type="submit" class="btn btn-primary" >Report</button></center>
      </form>
      </div>
      </>
      
      
    )
  }
}

export default ReportAnimal
