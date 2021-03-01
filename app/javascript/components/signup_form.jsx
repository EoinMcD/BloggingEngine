import React from 'react'
import ReactDOM from 'react-dom'


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    SendForm= function (e) {
        e.preventDefault();
        React.ajax({
            type: 'POST',
            url: 'props.path',
            data: {first_name: 'first_name',second_name: 'second_name', email: 'email', password: 'password',password_confirmation:'password_confirmation'},
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
        return(
            <form ref="form" onSubmit={this.SendForm}>
                <div style ={{width:50,height:50}}>
                <fieldset>
                    <label>
                       First_name:
                       <input className="form-control" name="authenticity_token" value ={this.props.authenticityToken} first_name="first_name" />
                    </label>
                    <label>
                        Second_name:
                        <input className="form-control" name="authenticity_token" value ={this.props.authenticityToken} second_name="second_name" />
                    </label>
                    <label>
                        email:
                        <input className="form-control" name="authenticity_token" value ={this.props.authenticityToken} email="email" />
                    </label>
                    <label>
                        password:
                        <input className="form-control" type = "password" name="authenticity_token" value ={this.props.authenticityToken} password="password" />
                    </label>
                    <label>
                        password_confirmation:
                        <input className="form-control" type = "password" name="authenticity_token" value ={this.props.authenticityToken} password_confirmation="password_confirmation" />
                    </label>
                    <button type = 'submit' >Submit</button>
                </fieldset>
                </div>
            </form>
            
        )
    }
}





export default SignupForm