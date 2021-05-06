import * as React from "react";
import $ from "jquery";

function LoginForm (props: {path: String}) {
  const path = props.path;
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState("");

  const SendForm = (e: any) => {
    e.preventDefault();
    console.log(path);
    $.ajax({
      async: false,
      type: "POST",
      url: path,
      data: {
        email: email,
        password: password
      },

      success: function (result) {
        setErrors(result.errors);
      },
      error: function (result) {
        alert("Please try again");
      }
    });
  };

  return (
        <div>
            <form className ='loginform' onSubmit={SendForm}>
              <h1>LOGIN</h1> <br></br>
            {errors ? <h3>{errors}</h3> : null}
            <div style ={{ width: 50, height: 50 }}>
                    <fieldset>
                        <label>
                          Email:
                        </label>
                        <input className="form-control" name="email" onChange={(e) => setEmail(e.target.value)} />
                        <label>
                          Password:
                        </label>
                        <input className="form-control" type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                        <button type='submit'>LOGIN</button>
                    </fieldset>
                </div>
            </form>
        </div>
  );
}

export default LoginForm;
