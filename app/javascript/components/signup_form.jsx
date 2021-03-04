import React from 'react'
import ReactDOM, { render } from 'react-dom'
import $ from 'jquery' 


class SignupForm extends React.Component {
    
    static errorsList;
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            sname: '',
            email: '',
            password: '',
            confirmpassword: '',
            errors: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.SendForm = this.SendForm.bind(this);
        
    }
    
   
    
    handleChange(event) {
        console.log(event)
        this.setState({ [event.target.name] : event.target.value });
        
    }
    
    handleSubmit(event) {
        
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    
    SendForm= function (e) {
        e.preventDefault();
        
        var list = []
          $.ajax({
            async: false,
            type: 'POST',
            url: '/create',
            data: {first_name: this.state.name,second_name: this.state.sname, email: this.state.email, password: this.state.password, password_confirmation: this.state.confirmpassword},
            success: function (result){
                console.log("Success")
                list = result.errors
                console.log("LIST   " +list.length)
                this.errorsList =  new Array();
                for(var i=0;i<list.length;i++) {
                    console.log("PASSED   "+list[i])
                    this.errorsList.push(list[i]);
                }
                
                console.log("ERRORS:  " + this.errorsList)   
            },
            error: function (result) { 
                console.log("Fail")                       
                console.log(result)
                console.log(result.error)
            }
        })
        console.log("RE RENDERING")
        this.setState({ mssg: "Hi there!" });
        
        
    }

    render () {
        console.log(this.state)
        console.log("TESTING" + this.errorsList)
        
        return(
            <form ref="form" onSubmit={this.SendForm}>
                <div style ={{width:50,height:50}}>
                    {this.errorsList}
                </div>
                
                <div style ={{width:50,height:50}}>
                <fieldset>
                    <label>
                       First Name:
                       <input className="form-control" name="name" value={this.state.name} onChange={this.handleChange} />
                       
                    </label>
                    <label>
                        Second Name:
                        <input className="form-control" name="sname" value={this.state.sname} onChange={this.handleChange} />
                    </label>
                    <label>
                        Email:
                        <input className="form-control" name="email" value={this.state.email} onChange={this.handleChange} />
                    </label>
                    <label>
                        Password:
                        <input className="form-control" type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <label>
                        Confirm Password:
                        <input className="form-control" type="password" name="confirmpassword" value={this.state.confirmpassword} onChange={this.handleChange} />
                    </label>
                    <button type='submit'>Submit</button>
                </fieldset>
                </div>
                
            </form>
            
            
        )
    }
}

function RenderErrors(props) {
    return <h1>{props.error}</h1>
}





export default SignupForm