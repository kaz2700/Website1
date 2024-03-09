import './App.css';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

var day = "https://cityfurnish.com/blog/wp-content/uploads/2023/08/beach-near-hotel-min-1200x800.jpg"
var night = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAFQo6dHU5iw_QD0R7K70kiGllxt4YSXTdgg&usqp=CAU"

const images = [
{image: day, name: "day"},
{image: night, name: "night"}
]


function getImage(){
  return new Date().getHours() % 2 === 0 ? day : night
}

function MyButton({clicks, onClick}){
  return (
    <button className="text-3xl font-bold underline" onClick={onClick}>Clicked {clicks}</button> //u can also have a lambda w code if ur one o f those
  );
}

function MyIndependentButton(){
  const [clicks, setClicks] = useState(0);
  return (
    <button onClick={() => {setClicks(clicks + 1)}}>Clicked {clicks}</button> //u can also have a lambda w code if ur one o f those
  );
}

function ogSquare({onClick}){
  return (
    <>
    <div className="title">
      Enter password:
    </div>
    <div className="row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="row">
        <Square/>
        <Square/>
        <Square/>
      </div>
    </>
  )
}

function Square()
{
  const [value, setValue] = useState(null);
  function tableClick()
  {
    setValue('X')
  }

  return <button 
            className="custom-button"
            onClick={tableClick}>
              {value}
          </button>
}

function NumberBox({addNumber}, id){
  return(
    <>
   <button onClick={() => {
          addNumber(id)
          }} className="custom-button">{id}</button>
    </>
  )
}

function EnterBox({enter}) {
  return(
    <>
   <button onClick={() => {
          enter()
          }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Enter</button>
    </>
  )
}

function ResetBox({reset}){
  return(
    <>
    <button onClick={() => {
          reset()
          }} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Reset</button>
    </>
  )
}

function Dial({addNumber, enter, reset}){//todo w for loop and mapping
  return(
    <>
      <div>
        {NumberBox({addNumber}, 1)}
        {NumberBox({addNumber}, 2)}
        {NumberBox({addNumber}, 3)}
      </div>
      <div>
        {NumberBox({addNumber}, 4)}
        {NumberBox({addNumber}, 5)}
        {NumberBox({addNumber}, 6)}
      </div>
      <div>
        {NumberBox({addNumber}, 7)}
        {NumberBox({addNumber}, 8)}
        {NumberBox({addNumber}, 9)}
      </div>
      <div>
        {EnterBox({enter})}
        {ResetBox({reset})}
      </div>
    </>
  )
}

function booleanTest(bool){
  if(bool)
    return(
      <div>
        True
      </div>
    )
  else
    return(
      <div>
        False
      </div>
     )
}

function App() {
  const [clicks, setClicks] = useState(0);
  const matchPw = "777";
  const [pw, setPw] = useState("");
  const [boolean, setBoolean] = useState(false);
  const [timer, setTimer] = useState(0)
  function handleTimer(){
    setTimer(timer + 1)
  }

  function handleBoolean(){
    setBoolean(!boolean);
  }

  function handleClick(){
    setClicks(clicks + 1);
  }

  function handlePw(int){
    setPw(pw + int)
  }

  function enter(){
    var match = pw === matchPw
    if(match)
      setBoolean(true)
  }

  function reset(){
    setBoolean(false)
    setPw("")
  }
  setInterval(handleTimer, 1000)
  return(
    <div>
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
      washanin, welkom ta da <span class="text-blue-500">crib</span>
      </h1>
      <p class="text-lg font-semibold text-gray-700">
      Current Time: <span class="text-blue-500">{new Date().getHours() + " " + new Date().getMinutes() + " " + new Date().getSeconds()}</span>
      </p>
      <p class="text-lg font-semibold text-gray-700">
      Time online: <span class="text-blue-500">{timer}</span>
      </p>
      
      <img 
      className="avatar"
      src={getImage()}
      />

      <h1
      className="text"
      >pw: {pw}{  booleanTest(boolean)}</h1>
      <MyButton clicks={clicks} onClick={handleClick}/>
      <MyButton clicks={clicks} onClick={handleClick}/>
      <MyIndependentButton/>nxi
      <Dial addNumber={handlePw} enter={enter} reset={reset}></Dial>
      <ogSquare onClick={handlePw}>dd</ogSquare>
      {ogSquare(handlePw)}

      <ol> {
        images.map(image  =>
          <li
          key = {image.name}
          style={{color: 'black'}}
          >
            <p>
              {
                "Title: " + image.name
              }
            </p>
            <img
            className="avatar"
            src={image.image}
            >
            </img>
          </li>)
        } </ol>
    </div>
  );
}

export default App;