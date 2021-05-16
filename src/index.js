import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Draggable from "react-draggable"
function Main(){
  const [state ,  setState] = useState({
    showHideModel:  false
  })
  const showPopup = () => {
     setState({
       showHideModel:true
     })   
  }
  const hidePopup = () => {
     setState({
       showHideModel:false
     })
  } 
  return( 
    state.showHideModel ?
    
    <Pop>
    <Draggable defaultPosition={{x: 350, y: -250}}>
   
    <div style={{backgroundColor: "cadetblue", width: "400px",
  height: "300px"}}>
    <h1>hello friends</h1>
       <button onClick={hidePopup}>close popup</button>
       </div>   
    </Draggable>
    </Pop>
 :
     <div>

      <button onClick={showPopup}>show popup</button>
     </div>
  )
}

function Pop(props){
  console.log(props);
    const element = document.createElement("div")
    useEffect(() => {
      document.getElementById("pop").appendChild(element)
  //   return () => {
  //    document.getElementById("pop").removeChild(element)
  //  }
  }
    )
  return(
    ReactDOM.createPortal(props.children,element))
}
ReactDOM.render(
    <Main />,
  document.getElementById('root')
);


