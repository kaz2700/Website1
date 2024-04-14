import { useState } from "react";
import Navbar from "../Components/NavBar";


var day = "https://cityfurnish.com/blog/wp-content/uploads/2023/08/beach-near-hotel-min-1200x800.jpg"
var night = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAFQo6dHU5iw_QD0R7K70kiGllxt4YSXTdgg&usqp=CAU"

const blank = "⠀";

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
    <button onClick={() => {setClicks(clicks + 1)}}> Clicked {clicks}</button> //u can also have a lambda w code if ur one o f those
  );
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

function OGSquare({xIsNext, squares, onPlay}){

  function handleClick(i) {
    if(squares[i] !== "⠀" || calculateWinner(squares)) {
      return;
    }
    
  const nextSquares = squares.slice();
  if(xIsNext) {
      nextSquares[i] = "X";
  } else {
      nextSquares[i] = "O";
  }
    onPlay(nextSquares)
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
    <div className="status">{status}</div>
    <div className="title">
      las damas primero:
    </div>
    <div className="row">
        <Square value={squares[0]} onSquareClick={() => {handleClick(0)}}/>
        <Square value={squares[1]} onSquareClick={() => {handleClick(1)}}/>
        <Square value={squares[2]} onSquareClick={() => {handleClick(2)}}/>
      </div>
      <div className="row">
        <Square value={squares[3]} onSquareClick={() => {handleClick(3)}}/>
        <Square value={squares[4]} onSquareClick={() => {handleClick(4)}}/>
        <Square value={squares[5]} onSquareClick={() => {handleClick(5)}}/>
      </div>
      <div className="row">
        <Square value={squares[6]} onSquareClick={() => {handleClick(6)}}/>
        <Square value={squares[7]} onSquareClick={() => {handleClick(7)}}/>
        <Square value={squares[8]} onSquareClick={() => {handleClick(8)}}  />
      </div>
    </>
  )
}

function Square({value, onSquareClick})
{
  return <button 
            className="custom-button"
            onClick={onSquareClick}
          >
              {value}
          </button>
}

export default function Game()
{
  const [history, setHistory] = useState([Array(9).fill("⠀")]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <>
        <Navbar />
        <div className="game">
        <div className="game-board">
            <OGSquare xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info">
            <ol>{moves}</ol>
        </div>
        </div>
    </>
     
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
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
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
      <MyButton clicks={clicks} onClick={handleClick} />
      <MyButton clicks={clicks} onClick={handleClick} />
      <MyIndependentButton/>
      <ol> {
        images.map((image, num)  =>
          <li
          key = {image.name}
          style={{color: 'black'}}
          >
            <p>
              {
                "Title: " + image.name + num
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

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] !== "⠀" && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  var space = 0;
  squares.forEach(element => {
    if(element !== "⠀") {
      space = space + 1
    }
  });
  if (space === 9) {  
    return "draw";
  }
  return null;
}