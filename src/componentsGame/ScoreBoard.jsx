import React, { Component } from 'react'
import {Storage} from '../storage/storage'
import {Link} from 'react-router-dom'


class ScoreBoard extends Component {
    state={
        scoreboard :[]
    }
    async componentDidMount(){
    let storage = await new Storage().getData()

    this.setState({
        scoreboard: storage
    })
}

    
    render() {
        return (
            <div className='game'>
            <h1 className='scoreboard'>Recent Games:</h1>
            <ul>
                {this.state.scoreboard.map((leader,index)=>{
                    return <li key={index}>{leader} </li>

                })}     
            </ul>
              <Link to='./BoardBox' >
                  <button className='btn3'>Start new Game</button>
                  </Link> 
            </div>
        )
    }
}

export default ScoreBoard
