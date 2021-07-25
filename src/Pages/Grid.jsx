import React from 'react'
import Box from "../Components/Box";
import styles from "./Grid.module.scss"
import "./Grid.css"
import {dijkstra,getNodesInShortestPathOrder} from "../Components/Logic/dijkstra";
export default function Grid() {
    
    let [START_ROW,SET_START_ROW] = React.useState(0)
    let [START_COL,SET_START_COL] = React.useState(0)
    let [END_ROW,SET_END_ROW] = React.useState(0)
    let [END_COL,SET_END_COL] = React.useState(5)

    const animateDijkstra=(visitedNodesInOrder, nodesInShortestPathOrder) =>{
        for (let i = 1; i <visitedNodesInOrder.length-1; i++) {
            setTimeout(() => {
                const node = visitedNodesInOrder[i];
                document.getElementById(`node-${node.row}-${node.col}`).className =
                'node node-visited';
            }, 10 * i);
            if (i === visitedNodesInOrder.length-2) {
              setTimeout(() => {
                animateShortestPath(nodesInShortestPathOrder);
              }, 10 * i);
              return;
            }

        }
      }

      const animateShortestPath =(nodesInShortestPathOrder)=> {
        for (let i = 1; i < nodesInShortestPathOrder.length-1; i++) {
          setTimeout(() => {
            const node = nodesInShortestPathOrder[i];
            document.getElementById(`node-${node.row}-${node.col}`).className =
              'node node-shortest-path';
          }, 50 * i);
        }
      }
    const createGrid = () =>{
        let grid=[];
        for(let i=0;i<16;i++){
            let EachRow =[];
            for(let j=0;j<40;j++){
                EachRow.push(createBox(j,i));
            }
            grid.push(EachRow);
        }
        return grid;
    }
    
    const createBox = (col,row)=>{
        return {
            col,row,
            isStart:START_ROW==row && START_COL==col,
            isFinish:END_ROW==row && END_COL==col,
            distance:Infinity,
            isVisited:false,
            isWall:false,
            previousNode:null,
        }
    }
    
    // const [grid,SetGrid] = React.useState(createGrid());
    const grid = createGrid();
    const assignStart =async(i,j)=>{
            
            SET_START_ROW(i)
            SET_START_COL(j)
        
    }
    const assignEnd =(i,j)=>{
        SET_END_ROW(i)
        SET_END_COL(j)
        
    }
    const setStartAndEnd =(i,j)=>{
        if(selectingFilter==1){
            resetAllGrid()
            assignStart(i,j);
            setSelectingFilter(2)
        }else if(selectingFilter==2){
            assignEnd(i,j);
        }else{
            console.log("i,j",i,j)
            // createAWall(i,j)
        }

    }
    const resetAllGrid =()=>{
        for (let e of document.getElementsByTagName("p")) { 
            // e.style.backgroundColor= "white";
            e.className="node"
         }
         setSelectingFilter(1)
        //  assignStart(0,0)
        //  assignEnd(0,5)
        //  SetGrid(createBox())
    }
    const StartCode= async()=>{
        // resetAllGrid()
      let data= await dijkstra(grid,grid[START_ROW][START_COL],grid[END_ROW][END_COL])
      let shortPath =await getNodesInShortestPathOrder(grid[END_ROW][END_COL])
      animateDijkstra(data,shortPath)
      console.log(data,shortPath)
      setSelectingFilter(1)
    }
    let [selectingFilter,setSelectingFilter]  = React.useState(1)
    return (

        <div  style={{margin: "50px 0 0"}}>
            <div>
                <h1>Dijkstra Logic to Find Shortest Path</h1>
            </div>
            <div className={styles.buttons}>
                <button onClick={StartCode}>Start</button>
                <button onClick={()=>setSelectingFilter(1)}>Select Start Point</button>
                <button onClick={()=>setSelectingFilter(2)}>Select End Point</button>
                {/* <button onClick={()=>setSelectingFilter(3)}>Select Walls</button> */}
                <button onClick={()=>resetAllGrid()}>Reset</button>
            </div>
            {
                grid.map((row,i)=>{
                    
                    return (
                        <div key={i}>
                            {row.map((colm,j)=>{
                            const {row,col,isStart,isFinish,distance,isVisited,isWall} = colm;
                         return(    <Box
                         
                              key={j}
                              row={row}
                            col={col} 
                            isStart={isStart}
                            isEnd={isFinish}
                            distance={distance}
                            isVisited={isVisited}
                            isWall={isWall}
                            AssignStart={setStartAndEnd}
                            
                              />  )
                            })}
                        </div>
                    )}
                )}
        </div>
    )
}
