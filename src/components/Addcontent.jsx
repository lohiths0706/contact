import React from 'react';
import './App.css';
class Addcontent extends React.Component {
  state={
     name:" ",
     email:" ",
  };
 add =(e)=>{
  e.preventDefault();
  if(this.state.name ===" " || this.state.email ===" ")
  {
    alert("all field are important");
    return;
  }
  this.props.addcontacthandler(this.state);
  this.setState({name:"",email:""})
  console.log(this.state);
 }
  render() {
       return (
      <div>
        <h1 style={{color:"black"}}>Add Content</h1>
        <form onSubmit={this.add}>
        <div className='space'>
            <label>Name</label><br></br>
            <input type="text" name="name" placeholder="Name" value={this.state.name}  onChange={(e) =>this.setState({name: e.target.value})}></input><br></br>

            <label>Email</label><br></br>
            <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={(e) =>this.setState({email:e.target.value})}></input>
        </div>
        <button className='space2'>Add</button>
        </form>
      </div>
       )
  }
}

export default Addcontent;
