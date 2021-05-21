import * as React from "react";
import axios from "axios";
interface LoginFormProps {
  path: string;
  token: string;
  redirectPath: string;
}
const LoginForm: React.FC<LoginFormProps> = ({ path, token, redirectPath }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState("");

  const SendForm = (e: any) => {
    e.preventDefault();
    axios({
      method: "post",
      url: path,
      headers: {
        "X-CSRF-Token": token
      },
      data: {
        email: email,
        password: password
      }
    })
      .then((response) => {
        if (response.status === 200 && response.data.errors === undefined) {
          window.location.href = redirectPath;
        }
        setErrors(response.data.errors);
      })
      .catch(() => {
        window.alert("Nope");
      });
  };

  return (
    <div>
      <form className="login-form" onSubmit={SendForm}>
        <h1>LOGIN</h1> <br></br>
        {errors ? <h3 data-testid="Error">{errors}</h3> : null}
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
