import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function LoginButton({supabase, username, password}) {
  return(
    <div className='centered-container'>
      <button className="custom-button" onClick={() => checkLogin(supabase, username, password)}>Login</button>
    </div>
  );
}

function LoginBar({supabase}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <>
      <form>
          <div className='centered-container'>
            <input className="text-box" type="text" placeholder="Username" onChange={event => {setUsername(event.target.value)}} />
          </div>
          <div className='centered-container'>
          <input className="text-box" type="password" placeholder="Password" onChange={event => {setPassword(event.target.value)}}/>
          </div>
          <div className='custom-div'>
          <label>
            <input type="checkbox" onChange={event => {setRememberMe(event.target.checked)}}/>
            {' '}
            Remember me
          </label>
          </div>
      </form>
      <LoginButton supabase={supabase} username={username} password={password}/>
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

async function checkLogin(supabase, username, password) {
  const { data } = await supabase.from('accounts').select('password').eq('username', username)
  //const navigate = useNavigate();

  if(data.length !== 1) {
    alert("Wrong credentials");
    return;
  }

  if (data[0].password !== password) {
    alert("Wrong credentials");
    return;
  }

  alert("Logged in")
}

function Login({supabase}) {
  const [loginBool, setLoginBool] = useState(false);    

  return(
    <div>
      <LoginBar supabase={supabase}/>
    </div>
  )
}

export default Login;