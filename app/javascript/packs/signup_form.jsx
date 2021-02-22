import React from 'react'
import ReactDOM from 'react-dom'



const SignupForm = props => (
    <form onSubmit={this.handleSubmit}>
    <label>
        First_Name:
        <input type="text" value={this.state.value} onChange={this.handleChange} />

    </label>
    <input type="submit" value="Submit" />
</form>
);

class App extends React.Component{
    
    render() {
        return(
            <SignupForm/>
    
        );
    }

    
}


ReactDOM.render(<App />, document.getElementById('root'));