import React from 'react'
import Filling from './Filling';
function Cell (props){
   props.Field[props.Index];
   return (<div> {props != undefined ? props.Field[props.Index]: ""}
      </div>)
}
export default Cell