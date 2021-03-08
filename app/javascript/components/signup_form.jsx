// eslint-disable-next-line no-use-before-define
import React from "react";
import $ from "jquery";

function SignupForm () {
  const [name, setName] = React.useState("");
  const [sname, setSname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmpassword, setConfirm] = React.useState("");
  const [errorsList, setErrors] = React.useState([]);

  const SendForm = (e) => {
    e.preventDefault();
    $.ajax({
      async: false,
      type: "POST",
      url: "/create",
      data: {
        first_name: name,
        second_name: sname,
        email: email,
        password: password,
        password_confirmation: confirmpassword
      },

      success: function (result) {
        setErrors(result.errors);
      },
      error: function (result) {

      }
    });
  };
  const listErrors =
        errorsList.map((errorsList) =>
                // eslint-disable-next-line react/jsx-key
                <li>{errorsList}</li>
        );

  return (
        <div>
            <form onSubmit={SendForm}>
                {errorsList ? <ul>{listErrors}</ul> : null}
                <div style ={{ width: 50, height: 50 }}>
                    <fieldset>
                        <label>
                           First Name:
                           <input className="form-control" name="name" onChange={(e) => setName(e.target.value)} />
                        </label>
                        <label>
                            Second Name:
                            <input className="form-control" name="sname" onChange={(e) => setSname(e.target.value)}/>
                        </label>
                        <label>
                               Email:
                            <input className="form-control" name="email" onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <label>
                            Password:
                            <input className="form-control" type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                        </label>
                        <label>
                            Confirm Password:
                           <input className="form-control" type="password" name="confirmpassword" onChange={(e) => setConfirm(e.target.value)} />
                        </label>
                        <button type='submit'>Submit</button>
                    </fieldset>
                </div>
            </form>
        </div>
  );
}

export default SignupForm;
