import React from 'react';
import SimpleReactValidator from 'simple-react-validator';
class Login extends React.Component {
 
   constructor() {
       super();
       this.state = {
           title : ""
       }
       this.validator = new SimpleReactValidator();
   }
   submitForm = () => {
       if (this.validator.allValid()) {
         alert('You submitted the form and stuff!');
       } else {
         this.validator.showMessages();
         // rerender to show messages for the first time
         // you can use the autoForceUpdate option to do this automatically`
         this.forceUpdate();
       }
     }
 
   render() {
       return (
           <div className="container">
               <h1>Write a Review</h1>
               <div className="form-group">
                   <label>Title</label>
                   <input className="form-control" value={this.state.title} onChange={this.setTitle} />
 
                   {this.validator.message('title', this.state.title, 'required|alpha')}
 
               </div>
               <div className="form-group">
               <button className="btn btn-primary" onClick={this.submitForm}>Save Review</button>
               </div>
           </div>
 
       )
   }
 
}
 
 
 
export default Login;

