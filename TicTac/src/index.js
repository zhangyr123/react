import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Asc from './asc.svg'
import Desc from './desc.svg' 


// Square
// Board
// Game

// 判断初胜者
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
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [a, b, c]
    }
  }
  return null
}
function Square(props) {
  return (
    props.winGrid && props.winGrid.includes(props.number) ?
      <button className="square active-grid" onClick={props.onClick}>
        {props.value}
      </button>
    :
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>   
  )
}
class Board extends React.Component {
  renderSquare( i ) {
    return <Square 
      value = { this.props.squares[i] } 
      onClick = {() => this.props.onClick(i)}
      number = { i }
      winGrid = { this.props.winGrid }
      key = { i }
    />
  }
  render() {
    let row = [0, 1, 2]
    let col = [0, 1, 2]
    return (
      <div>
        {
          row.map((rowItem, key) => 
            <div key={key} className="board-row">
              {
                col.map((colItem, key2) => 
                  this.renderSquare(3 * key + key2)
                )
              }
            </div>
          )
        }
      </div>
    )
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props)
    let initState = {
      history: [{
        squares: Array(9).fill(null),
        stepNumber: 0,
        row: null,
        col: null,
        index: null
      }],
      stepNumber: 0,
      xIsNext: true,
      asc: true
    }
    this.state = initState
  }
  handleClick(i) {
    let history, current
    if(this.state.asc) {
      history = this.state.history.slice(0, this.state.stepNumber + 1)
      current = history[history.length - 1]
    } else {
      const len = this.state.history.length
      history = this.state.history.slice(this.state.stepNumber, len)
      current = history[0]
    } 
    
    const squares = current.squares.slice()
    if(calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'

    let col = i % 3
    let row = (i - col) / 3 + 1
    const square = [{
            squares: squares,
            stepNumber: history.length,
            row: row,
            col: col + 1,
            index: i
          }]
    this.setState({
      history: this.state.asc ? history.concat(square) : square.concat(history),
      stepNumber: this.state.asc ? history.length : 0,
      xIsNext: !this.state.xIsNext
    })
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    })
  }
  changeSort(asc) {
    let stepNumber = this.state.stepNumber
    let len = this.state.history.length
    let history = this.getDescList(this.state.history)

    this.setState({
      asc: !asc,
      stepNumber: len - stepNumber - 1,
      history: history
    })
  }
  getDescList(history) {
    let res = []
    for(let item of history) {
      res.unshift(item)
    }
    return res
  }
  reset() {
    this.setState({
      history: [{
        squares: Array(9).fill(null),
        stepNumber: 0,
        row: null,
        col: null,
        index: null
      }],
      stepNumber: 0,
      xIsNext: true,
      asc: true
    })
  }
  render() {
    let history = this.state.history
    const len = history.length
    let asc = this.state.asc
    const current = history[this.state.stepNumber]
    const winner = calculateWinner(current.squares)
    const moves = history.map((step, move) => {
      const desc = step.stepNumber ? `Go to move #${asc ? move : len - move - 1} row${step.row} col${step.col}` : `Go To game start`
      return (
        <li key = {move}>
          { 
            move === this.state.stepNumber ?
              <button className="step active-step" onClick = {() => this.jumpTo(move)}>{`${desc}`}</button>
            :
              <button className="step" onClick = {() => this.jumpTo(move)}>{`${desc}`}</button>
          }
        </li>
      )
    })
    let status 
    if (winner) {
      status = `Winner: ${this.state.xIsNext ? 'O' : 'X'}`
    } else if(this.state.stepNumber === 9) {
      status = `Tie`
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`
    }
    return (
      <div className="game">
        <div className="game-board">
          <div className="board-top">{ status }</div>
          <Board winGrid = {winner} squares = {current.squares} onClick = {(i) => this.handleClick(i)}/>
        </div>
        <div className="game-info"> 
          <div onClick={() => this.changeSort(this.state.asc)} className="btn sort-btn">
           <img src={this.state.asc ? Asc : Desc} className="App-sort" alt="sort" />
          </div>
          <div onClick={() => this.reset()} className="btn">重置</div>
          <ol>{ moves }</ol>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Game/>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
