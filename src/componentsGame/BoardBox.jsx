import React, { Component } from 'react'
import Board from './Board'
import * as utils from '../utils/functions'
import {Storage} from '../storage/storage'
import {Link} from 'react-router-dom'

class BoardBox extends Component {
    constructor(props) {
        super(props)
    
        this.state={
            boxes: Array(9).fill(null),
            historyPlayer:[],
            history:[],
            xIsNext:true
        }
    }
    
    storage= new Storage()
    handleboxClick(index){
        const boxes = this.state.boxes.slice()
        let history=this.state.history
        let historyPlayer=this.state.historyPlayer
        if(utils.findWinner(boxes)){
            return
        }
        if(utils.areAllBoxClicked(boxes)===true){
            return
        }
        if(boxes[index]===null){
        boxes[index] = this.state.xIsNext ? 'x':'o'
        historyPlayer.push(this.state.xIsNext?'x':'o')
        history.push(index)
        this.setState({
            boxes:boxes,
            history:history,
            historyPlayer:historyPlayer,
            xIsNext: !this.state.xIsNext
            
        })
        console.log(boxes)
    }
    }
    handleBoardRestart=()=>{
        this.setState({
            boxes: Array(9).fill(null),
             history: [],
             historyPlayer:[],
             xIsNext: true
        })

    }
    
    render() {
        const winner= utils.findWinner(this.state.boxes)
        const isFilled=utils.areAllBoxClicked(this.state.boxes)
        const playerName = this.state.xIsNext?'x':'o'

        let status
        if(winner){
            status= `The winner is ${winner}`
            this.storage.update([`${winner} Won`])
        }
        else if(!winner && isFilled )
        {
            status=`Game Draw!`
            this.storage.update([`Game Draw`])
        }
        else{
            status= `It is player ${playerName}'s turn`
        }
        return (
        <>
            <div className="board-wrapper">
            <div className="board"></div>
            <div className='board-heading'>
              <h1>Tic Tac Toe</h1>

              <div className='board-row'>
                <Board value={this.state.boxes[0]} onClick={()=>this.handleboxClick(0)}/>
                <Board value={this.state.boxes[1]} onClick={()=>this.handleboxClick(1)}/>
                <Board value={this.state.boxes[2]} onClick={()=>this.handleboxClick(2)}/>
                </div> 
                <div className='board-row'>
                <Board value={this.state.boxes[3]} onClick={()=>this.handleboxClick(3)}/>
                <Board value={this.state.boxes[4]} onClick={()=>this.handleboxClick(4)}/>
                <Board value={this.state.boxes[5]} onClick={()=>this.handleboxClick(5)}/>
                </div> 
                <div className='board-row'>
                <Board value={this.state.boxes[6]} onClick={()=>this.handleboxClick(6)}/>
                <Board value={this.state.boxes[7]} onClick={()=>this.handleboxClick(7)}/>
                <Board value={this.state.boxes[8]} onClick={()=>this.handleboxClick(8)}/>
                </div> 
                <h3>{status}</h3> 
            </div>
            <div className='board-history'>
                <h4 className='board-history-heading'>Moves History:</h4>
                <ul className='board-historyList'>
                        {this.state.history.length === 0 && <span>No moves to show</span>}
                        
                        {this.state.history.length !== 0 && this.state.history.map((moves, index) => {
                          
                           if(this.state.historyPlayer[index]==='x')
                            return <li key={index}>Move = {index + 1}, Player = X, Index = <strong>{moves}</strong></li>
                            else
                            return <li key={index}>Move = {index + 1}, Player = O, Index = <strong>{moves}</strong></li>
                        })}
                        
                       

                </ul>

            </div>
            <div className='board-footer'>
            <button className='btn' onClick={this.handleBoardRestart}>Start a New Game</button>
            <Link to='/'>
                  <button className='btn1'>Go back to Scoreboard</button>
                  </Link>
            </div> 
            </div>
        </>
        )
    }
}

export default BoardBox
