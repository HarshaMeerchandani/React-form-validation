import React from 'react';
// import './Registration.css';
class Form extends React.Component{
 
constructor(){
super();
this.state = {
  name : "",
  nameErr : "",
  email : "",
  emailErr : "",
  contact : "",
  contactErr : ""
}
}
 
clearFields = ()=>{
  this.setState({
    nameErr : "",
    emailErr : "",
    contactErr : ""
  })
}
 
validate = ()=>{
  if(this.state.name==""){
    this.setState({
      nameErr : "Please enter name !"
    })
    return false;
  }
  else if(this.state.email == ""){
    this.setState({
      emailErr : "Please enter email !"
    })
    return false;
  }
  else if(this.state.contact == ""){
    this.setState({
      contactErr : "Please enter contact number !"
    })
    return false;
  }
  return true;
}
 
saveRecord = (evt)=>{
  this.clearFields();
  if(this.validate()){
    alert('Passed')
  }
  else{
    console.log('Not passed')
  }
evt.preventDefault();
}
 
render(){
 
  return (
    <div className="container">
    <form method="post" onSubmit={this.saveRecord}>
<div className="form-group">
<label>Name : </label>
<input onChange={(evt)=>this.setState({name : evt.target.value})} className="form-control" value={this.state.name}/>
<span className="fieldErr"> {this.state.nameErr}</span>
</div>
<div className="form-group">
<label>Email : </label>
<input onChange={(evt)=>this.setState({email : evt.target.value})} className="form-control" value={this.state.email}/>
<span className="fieldErr">
{this.state.emailErr}
</span>
</div>
<div className="form-group">
<label>Contact : </label>
<input onChange={(evt)=>this.setState({contact : evt.target.value})} className="form-control" value={this.state.contact}/>
<span className="fieldErr">
{this.state.contactErr}
</span>
</div>
<div className="form-group">
<button type="submit">Register Now !</button>
</div>
</form>
    </div>
  )
}
 
}
 
export default Form;
