import React, { useState,useContext } from 'react'
import ReactToExcel from 'react-html-table-to-excel'
import BodyContext from '../../context/BodyContext'
import './style.css'
export default function Exportpage() {
    const { platform, ads, setAds, totalAdCount, setTotalAdCount,exportpage,setExportpage} = useContext(BodyContext)
    //const [count,setCount]=useState(0)
    var count=0;
  return (
    <div>
        <h1>Export Page</h1>
        <table id="tab">
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>redirectUrl</th>
        </tr>

       
        {ads.map((val, key) => {
            count=count+1;
          return (
            <tr key={key}>
              <td>{count}</td> 
              <td>{val.title}</td>
              <td>{val.description}</td>
              <td>{val.redirectUrl}</td>
            </tr>
          )
          
        }
        )}
        </table>
        <ReactToExcel table="tab" filename="excel file" sheet="sheet 1" buttonText="exp"/>

    </div>
    
  )
}
