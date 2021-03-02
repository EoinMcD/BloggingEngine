import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery' 


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            sname: '',
            email: '',
            password: '',
            confirmpassword: '',
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.SendForm = this.SendForm.bind(this);
    }

    

    
    
    handleChange(event) {
        this.setState({ [event.target.name] : event.target.value });
        console.log(event)
    }
    
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    SendForm= function (e) {
        e.preventDefault();
        console.log(this.state)
          $.ajax({
            type: 'POST',
            url: "/create",
            data: {first_name: this.state.name,second_name: this.state.sname, email: this.state.email, password: this.state.password, password_confirmation: this.state.confirmpassword},
            success: function (result){
                console.log("Success")
            },
            error: function (jqXHR) {                        
                if (jqXHR.status === 200) {
                    alert("Value Not found");
                    console.log("Fail")
                }
            }
            
        })
    }

    render () {
        console.log(this.state)
        return(
            <form ref="form" onSubmit={this.SendForm}>
                <div style ={{width:50,height:50}}>
                <fieldset>
                    <label>
                       First_name:
                       <input className="form-control" name="name" value={this.state.name} onChange={this.handleChange} />
                       
                    </label>
                    <label>
                        Second_name:
                        <input className="form-control" name="sname" value={this.state.sname} onChange={this.handleChange} />
                    </label>
                    <label>
                        email:
                        <input className="form-control" name="email" value={this.state.email} onChange={this.handleChange} />
                    </label>
                    <label>
                        password:
                        <input className="form-control" type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <label>
                        password_confirmation:
                        <input className="form-control" type="password" name="confirmpassword" value={this.state.confirmpassword} onChange={this.handleChange} />
                    </label>
                    <button type='submit'>Submit</button>
                </fieldset>
                </div>
            </form>
            
        )
    }
}





export default SignupForm