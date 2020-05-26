import React from 'react'

const Board =(props)=>{
    return (
        <div>
            <button className='board_box' onClick={props.onClick}>{props.value}</button>
        </div>
    )
}
export default Board
