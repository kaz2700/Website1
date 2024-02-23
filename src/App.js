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
  return new Date().getSeconds() % 2 === 0 ? day : night
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
        <button onClick={() => {
          onClick(1)
          }} className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      <div className="row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </>
  )
}

function NumberBox({addNumber}, id){
  return(
    <>
   <button onClick={() => {
          addNumber(id)
          }} className="square">{id}</button>
    </>
  )
}

function EnterBox({enter}) {
  return(
    <>
   <button onClick={() => {
          enter()
          }} className="square">Enter</button>
    </>
  )
}

function ResetBox({reset}){
  return(
    <>
    <button onClick={() => {
          reset()
          }} className="square">Reset</button>
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

  return(
    <div>
      <img 
      className="avatar"
      src={getImage()}
      />

      <h1
      className="text"
      >pw {pw}{  booleanTest(boolean)      }</h1>
      
      <MyButton clicks={clicks} onClick={handleClick}/>
      <MyButton clicks={clicks} onClick={handleClick}/>
      <MyIndependentButton/>nxi
      <Dial addNumber={handlePw} enter={enter} reset={reset}></Dial>

      <ol> {
        images.map(image  =>
          <li
          key = {image.name}
          style={{color: 'gold'}}
          >
            <p>
              {
                image.name
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