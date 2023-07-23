import React from 'react';
import Cell from './Cell';
import './Filling.css';
import FieldGenerator from './FieldGenerator'

const Filling = () => {
    let field = FieldGenerator();
  return (
    <table>
        <tr>
          <td><Cell Field = {field} Index = "0"/></td>
          <td><Cell Field ={field} Index = "1"/></td>
          <td><Cell Field ={field} Index = "2"/></td>
        </tr>
        <tr>
          <td><Cell Field ={field} Index = "3"/></td>
          <td><Cell Field ={field} Index = "4"/></td>
          <td><Cell Field ={field} Index = "5"/></td>
        </tr>
        <tr>
          <td><Cell Field ={field} Index = "6"/></td>
          <td><Cell Field ={field} Index = "7"/></td>
          <td><Cell Field ={field} Index = "8"/></td>
        </tr>
    </table>
  );
};

export default Filling;