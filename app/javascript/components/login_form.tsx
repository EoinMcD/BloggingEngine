import * as React from "react";
import $ from "jquery";
interface LoginFormProps {
  path: String;
  token: String;
}
const LoginForm: React.FC<LoginFormProps> = ({ path, token }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState("");

  const SendForm = (e: any) => {
    e.preventDefault();
    $.ajax({
      async: false,
      type: "POST",
      url: path,
      headers: {
        "X-CSRF-Token": token
      },
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
      <form className="login-form" onSubmit={SendForm}>
        <h1>LOGIN</h1> <br></br>
        {errors ? <h3>{errors}</h3> : null}
        <div style={{ width: 50, height: 50 }}>
          <fieldset>
            <label>Email:</label>
            <input
              className="form-control"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password:</label>
            <input
              className="form-control"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">LOGIN</button>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
