import { useState, useTransition } from "react";
import "./App.css";
import Footer from "../Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
library.add(faEye, faEyeSlash);
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);

  const handleSubmit = (event) => {
    if (password !== confirmedPassword) {
      event.preventDefault();
      alert("Les deux mots de passe ne sont pas identiques");
    } else {
      onSubmit = setFormSubmitted(true);
    }
  };

  return (
    <>
      <div>
        {formSubmitted !== true ? (
          <div className="formulaire">
            <h1>Create Account</h1>
            <form
              style={{ display: "flex", flexDirection: "column", gap: 30 }}
              onSubmit={handleSubmit}
            >
              <div className="name">
                <p>Name</p>
                <input
                  value={username}
                  type="text"
                  placeholder="Jean Dupont"
                  name="name"
                  onChange={(event) => {
                    setUserName(event.target.value);
                  }}
                />
              </div>
              <div className="email">
                <p>Email</p>
                <input
                  value={email}
                  type="email"
                  placeholder="jeandupont@mail.com"
                  name="email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
              <div className="password">
                <p>Password</p>
                <input
                  value={password}
                  type={showPassword ? "text" : "password"}
                  placeholder="aZeRtYuIoP"
                  name="password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
                <FontAwesomeIcon
                  className="eye"
                  icon={showPassword ? "eye-slash" : "eye"}
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              </div>
              <div className="confirmedpassword">
                <p>Confirm your password</p>
                <input
                  value={confirmedPassword}
                  type={showConfirmedPassword ? "text" : "password"}
                  placeholder="aZeRtYuIoP"
                  name="confirmedpassword"
                  onChange={(event) => {
                    setConfirmedPassword(event.target.value);
                  }}
                />
                <FontAwesomeIcon
                  className="eye"
                  icon={showConfirmedPassword ? "eye-slash" : "eye"}
                  onClick={() =>
                    setShowConfirmedPassword((prevState) => !prevState)
                  }
                />
              </div>
              <button type="submit">Register</button>
            </form>
          </div>
        ) : (
          <div className="StepTwo">
            <div className="details">
              <p>Name : {username}</p>
              <p>Email : {email}</p>
              <p>Password : {password}</p>
            </div>
            <button
              className="change"
              type="submit"
              value="Edit"
              onClick={(event) => {
                event.preventDefault();
                onSubmit = setFormSubmitted(false);
              }}
            >
              Edit your information
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;

<FontAwesomeIcon icon="fa-solid fa-eye" />;
