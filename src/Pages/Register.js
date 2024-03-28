import { useState } from 'react';

function RegisterButton({supabase, username, password, password2}) {
  return(
    <div className='centered-container'>
      <button className="custom-button" onClick={()=>{registerAccount(supabase, username, password, password2)}}>Register</button>
    </div>
  );
}

function RegisterBar({supabase}) {
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
    <RegisterButton supabase={supabase} username ={username} password={password} password2={password2}/>
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

async function registerAccount(supabase, username, password, password2) {
  if(username.length < 3) {
    alert("Username length must be greater than 3.");
    return;
  }

  if(password.length < 3) {
    alert("Password length must be greater than 3.");
    return;
  }

  if (password !== password2) {
    alert("Passwords do not match.")
    return;
  }


  const { data } = await supabase.from('accounts').select('password').eq('username', username)

  if (data.length  !== 0) {
    alert(`The accounts exists with password "${data[0].password}".`);
    return;
  }

  await supabase.from('accounts').insert({username: username, password: password})
  alert("Account created");
}

function Register({supabase}) {
  return(
    <div>
      <RegisterBar supabase={supabase}/>
    </div>
  )
}

export default Register;