import { useState } from 'react';

const accounts = new Map();
accounts.set("user", "password");

function LoginButton() {
  return(
    <div className='centered-container'>
      <button className="custom-button" onClick={checkLogin}>Login</button>
    </div>
  );
}

function RegisterButton() {
  return(
    <div className='centered-container'>
      <button class="custom-button" onClick={registerAccount}>Register</button>
    </div>
  );
}

function LoginBar() {
  return (
    <form>
        <div className='centered-container'>
          <input className="text-box" type="text" placeholder="Username" id="loginUsername" />
        </div>
        <div className='centered-container'>
        <input className="text-box" type="password" placeholder="Password" id="loginPassword"/>
        </div>
        <div className='custom-div'>
        <label>
          <input type="checkbox" id="loginRememberMe"/>
          {' '}
          Remember me
        </label>
        </div>
    </form>
  );
}

function InfoMessage({newMessage}) {
  const [message, setMessage] = useState("dddd");
  if(message !== newMessage) {
    setMessage(newMessage);
  }
  return(
    <>
    {message}
    </>
  )
}

function checkLogin() {
  var username = document.getElementById('loginUsername').value;
  var password = document.getElementById('loginPassword').value;
  var rememberMe = document.getElementById('loginRememberMe').value;

  if (accounts.has(username) && accounts.get(username) === password) {
      alert("logged in");
  } else {
    alert("wrong credentials");
  }
}

function registerAccount() {
  var username = document.getElementById('loginUsername').value;
  var password = document.getElementById('loginPassword').value;
  var rememberMe = document.getElementById('loginRememberMe').value;

  if (accounts.has(username)) {
    alert("account already exists bitch");
    return;
  }

  accounts.set(username, password)
  alert("account created");
}

function Login() {
  const [loginBool, setLoginBool] = useState(false);    

  return(
    <div>
      <LoginBar/>
      <LoginButton onClick={checkLogin}/>
    </div>
  )
}

export default Login;