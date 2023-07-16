import React from 'react'
function Cell (){
   let  cellContentEncoded = Math.trunc(Math.random() * 3);

   let x = "";
   switch(cellContentEncoded){
      case 0: x ="X";
      break;
      case 1: x ="0";
      break;
      default: x =" ";
      break;
   }

   let [cellContent, SetCellContent] = React.useState(x);
   return (<div>{cellContent}</div>)
}
export default Cell