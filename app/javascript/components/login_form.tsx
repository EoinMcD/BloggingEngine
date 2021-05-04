import * as React from "react";
import $ from "jquery";

function LoginForm (props: {path: String}) {
  const path = props.path;
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorsList, setErrors] = React.useState([]);

  const SendForm = (e) => {
    e.preventDefault();
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

  const listErrors =
        errorsList.map((error, key) =>
                <li key = {key}>{error}</li>
        );

  return (
        <div>
            <form onSubmit={SendForm}>
            {errorsList ? <ul>{listErrors}</ul> : null}
            <div style ={{ width: 50, height: 50 }}>
                    <fieldset>
                        <label>
                               Email:
                            <input className="form-control" name="email" onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <label>
                            Password:
                            <input className="form-control" type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                        </label>
                        <button type='submit'>Submit</button>
                    </fieldset>
                </div>
            </form>
        </div>
  );
}

export default LoginForm;
