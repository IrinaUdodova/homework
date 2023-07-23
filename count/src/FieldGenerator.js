import React from 'react'
function FieldGenerator (){
    let string = "";

    for ( let ik=0; ik <= 8; ik++) {
        let cellContentEncoded = Math.trunc(Math.random() * 3);

        let x = "";
        switch (cellContentEncoded) {
            case 0:
                x = "X";
                break;
            case 1:
                x = "0";
                break;
            default:
                x = " ";
                break;
        }
         string += x;
    }
        return string;

}
export default FieldGenerator