import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LogInContext } from "../Context/LogInContext";
import NavBar from "../Components/NavBar";
import { SupabaseContext } from "../Context/SupabaseContext";

function RegisterBar() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { accountId, setAccountId } = useContext(LogInContext);
  const supabase = useContext(SupabaseContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (accountId !== null) {
      navigate("/");
    }
  }, [accountId, navigate]);

  return (
    <>
      <form>
        <div className="centered-container">
          <input
            className="text-box"
            type="text"
            placeholder="Username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </div>
        <div className="centered-container">
          <input
            className="text-box"
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
        </div>
        <div className="centered-container">
          <input
            className="text-box"
            type="password"
            placeholder="Repeat password"
            onChange={(event) => setPassword2(event.currentTarget.value)}
          />
        </div>
        <div className="custom-div">
          {errorMessage !== "" ? errorMessage : ""}
        </div>
        <div className="custom-div">
          <label>
            <input
              type="checkbox"
              id="loginRememberMe"
              onChange={(event) => {
                setRememberMe(event.target.checked);
              }}
            />{" "}
            Remember me {rememberMe}
          </label>
        </div>
      </form>
      <div className="centered-container">
        <button
          className="custom-button"
          onClick={() => {
            registerAccount(
              supabase,
              username,
              password,
              password2,
              setAccountId,
              setErrorMessage,
            );
          }}
        >
          Register
        </button>
      </div>
    </>
  );
}

async function registerAccount(
  supabase,
  username,
  password,
  password2,
  setAccountId,
  setErrorMessage,
) {
  if (username.length < 3) {
    setErrorMessage("Username length must be greater than 3.");
    return;
  }

  if (password.length < 3) {
    setErrorMessage("Password length must be greater than 3.");
    return;
  }

  if (password !== password2) {
    setErrorMessage("Passwords do not match.");
    return;
  }

  if (localStorage.getItem("loggedInUser") !== null) {
    setErrorMessage("Already logged in.");
    return;
  }

  const { data } = await supabase
    .from("accounts")
    .select()
    .eq("username", username);
  if (data.length !== 0) {
    setErrorMessage(`The accounts exists.`);
    return;
  }

  const account_info = await supabase
    .from("accounts")
    .insert({ username: username, password: password })
    .select();
  setAccountId(account_info.data[0].id);
  alert("Account created");
}

function Register() {
  return (
    <div>
      <NavBar />
      <RegisterBar />
    </div>
  );
}

export default Register;
