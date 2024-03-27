import { useState } from 'react';

const accounts = new Map();
accounts.set("user", "password");


function RegisterButton({username, password, password2}) {
  return(
    <div className='centered-container'>
      <button className="custom-button" onClick={()=>{registerAccount(username, password, password2)}}>Register</button>
    </div>
  );
}

function RegisterBar() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

  return (
    <>
    <form>
        <div className='centered-container'>
          <input className="text-box" type="text" placeholder="Username" onChange={event => {setUsername(event.target.value)}}/>
        </div>
        <div className='centered-container'>
        <input className="text-box" type="password" placeholder="Password" onChange={event => setPassword(event.currentTarget.value)}/>
        </div>
        <div className='centered-container'>
        <input className="text-box" type="password" placeholder="Repeat password" onChange={event => setPassword2(event.currentTarget.value)}/>
        </div>
        <div className='custom-div'>
        <label>
          <input type="checkbox" id="loginRememberMe" onChange={event => {setRememberMe(event.target.checked)}}/>
          {' '}
          Remember me {rememberMe}
        </label>
        </div>
    </form>
    <RegisterButton username ={username} password={password} password2={password2}/>
    </>

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

function registerAccount(username, password, password2) {
  if (password !== password2) {
    alert("Passwords do not match.")
    return;
  }
  var rememberMe = document.getElementById('loginRememberMe').value;

  if (accounts.has(username)) {
    alert("account already exists bitch");
    return;
  }

  accounts.set(username, password)
  alert("account created");
}

function Register() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return(
    <div>
      <RegisterBar/>
    </div>
  )
}

export default Register;