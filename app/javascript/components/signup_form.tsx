import * as React from "react";
import axios from "axios";

interface SignupProps {
  path: string;
  token: string;
  redirectPath: string;
}

const SignupForm: React.FC<SignupProps> = ({ path, token, redirectPath }
) => {
  const [name, setName] = React.useState("");
  const [sname, setSname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmpassword, setConfirm] = React.useState("");
  const [errorsList, setErrors] = React.useState([]);

  const SendForm = (e: any) => {
    e.preventDefault();
    axios({
      method: "post",
      url: path,
      headers: {
        "X-CSRF-Token": token
      },
      data: {
        first_name: name,
        second_name: sname,
        email: email,
        password: password,
        password_confirmation: confirmpassword
      }
    })
      .then((response) => {
        console.log("IM HERE" + response.status);
        console.log(response.data.errors);
        if (response.status === 200 && response.data.errors === undefined) {
          window.location.href = redirectPath;
          return;
        }
        setErrors(response.data.errors);
      })
      .catch((e) => {
        console.log(e);
        window.alert("Please try again");
      });
  };

  const listErrors =
        errorsList.map((error, key) =>
                <li key = {key}>{error}</li>
        );

  return (
        <div>
            <form className="signup-form" onSubmit={SendForm}>
            <h1>SIGN-UP</h1>
                {errorsList ? <ul data-testid="error-div">{listErrors}</ul> : null}
                <div>
                    <fieldset>
                        <label>
                           First Name:
                        </label>
                        <input className="form-control" name="name" onChange={(e) => setName(e.target.value)} />
                        <label>
                            Second Name:
                        </label>
                        <input className="form-control" name="sname" onChange={(e) => setSname(e.target.value)}/>
                        <label>
                               Email:
                        </label>
                        <input className="form-control" name="email" onChange={(e) => setEmail(e.target.value)} />
                        <label>
                            Password:
                        </label>
                        <input className="form-control" type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                        <label>
                            Confirm Password:
                        </label>
                        <input className="form-control" type="password" name="confirmpassword" onChange={(e) => setConfirm(e.target.value)} />
                        <button type='submit'>Submit</button>
                    </fieldset>
                </div>
            </form>
        </div>
  );
};

export default SignupForm;
