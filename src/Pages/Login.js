import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LogInContext } from "../Context/LogInContext";
import NavBar from "../Components/NavBar";
import { SupabaseContext } from "../Context/SupabaseContext";

function LoginBar() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { accountId, setAccountId } = useContext(LogInContext);
  const supabase = useContext(SupabaseContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (accountId !== null) {
      navigate("/");
    }
  }, [accountId, navigate]);

  return (
    <>
      <NavBar />
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
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div className="custom-div">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>
      </form>
      <div className="centered-container">
        <button
          className="custom-button"
          onClick={() =>
            checkLogin(supabase, username, password, accountId, setAccountId)
          }
        >
          Login
        </button>
      </div>
    </>
  );
}

async function checkLogin(
  supabase,
  username,
  password,
  accountId,
  setAccountId,
) {
  const { data } = await supabase.from("accounts").select().eq("username", username);

  if (data.length !== 1) {
    alert("Wrong credentials");
    return;
  }

  if (data[0].password !== password) {
    alert("Wrong credentials");
    return;
  }

  if (localStorage.getItem("loggedInUser") !== null) {
    alert("Already logged in");
    return;
  }
  setAccountId(data[0].id);
  localStorage.setItem("loggedInUser", JSON.stringify(data[0]));
}

function Login({ supabase }) {
  return (
    <div>
      <LoginBar supabase={supabase} />
    </div>
  );
}

export default Login;
