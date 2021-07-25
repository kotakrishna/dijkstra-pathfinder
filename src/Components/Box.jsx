import React from 'react'
import styles from "./Box.module.scss"
import { BoxContainer } from './BoxStyling'
export default function Box(data) {
    const {row,col,isStart,isEnd,distance,isVisited,isWall,AssignStart,AssignEnd} = data
    return (
        <BoxContainer 
        className="box"
         id={`node-${row}-${col}`} 
        onClick={()=>AssignStart(row,col)}
        isStart={isStart}
        isEnd={isEnd}
        isWall={isWall}
        isVisited={isVisited}
        //   style={isStart?{background:'red'}:isEnd?{background:"green"}:isVisited?{background:"blue"}:{}} className={styles.box}
        >    
        </BoxContainer>
    )
}
