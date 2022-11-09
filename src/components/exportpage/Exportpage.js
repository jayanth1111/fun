import React, { useState,useContext } from 'react'
import ReactToExcel from 'react-html-table-to-excel'
import BodyContext from '../../context/BodyContext'
import useAds from '../../hooks/useAds'
import './style.css'
export default function Exportpage() {
    const { platform, exports, setAds, totalAdCount, setTotalAdCount,exportpage,setExportpage} = useContext(BodyContext)
    const { getFacebookAds, getTwitterAds, getYoutubeAds,delFacebookAds,delTwitterAds,delYoutubeAds,addToFavorites,removeFromFavorites } = useAds()
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
          <th>Favorite</th>
          <th>redirectUrl</th>
          
        </tr>

       
        {
        
        exports.map((val, key) => {
            count=count+1;
          return (
            <tr key={key}>
              <td>{count}</td> 
              <td>{val.title}</td>
              <td>{val.description}</td>
              <td>{val.favorite}</td>
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
