import styled from 'styled-components'
import React, { useEffect, useState, useContext } from 'react'
import BodyContext from '../../context/BodyContext'

export const Bodycomponent = styled.div `
    height:100%;
    width: 100%;
    background-color: #FBFBFB;
    display: flex;
    margin-top:1px;
    

`;
export const Side = styled.div`
padding-top:2%;
 width:7%;
 display:flex;
 flex-direction:column;
 
 background:#FFFFFF;
 
  
`;
export const Main = styled.div `
    background:#FBFBFB;
    width:93%;
    height:100%;
  
`;
export const Icond =styled.div `

   
    cursor:pointer;
   
   
`;
export const Icon =styled.img `
  width:100%;
transform: scale(0.4);

   
   
`;
export const SearchIcon =styled.img `
    transform: scale(0.5);
    position:relative;
    left:15%;
`;

export const SearchHeader = styled.div`
    
     height:5%;
     width:%;
     padding-left:3%;
     padding-bottom:2%;
     display:flex;
     justify-content:space-between
     
     
`;

export const AdsWrapper = styled.div `

//height:800px;
width:90%;
padding-left:3%;

display: grid;
grid-template-columns: repeat(3,35%);

      
      // background-color:blue;
`;


export const SearchWrapper = styled.div `
  box-shadow: 0px 0px 2px #80808059;
  padding: 10px 0px;
  margin: 1.5rem 0px;
  
  height: 40%;
  box-shadow: 0px 0px 0px 1px #80808099;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  padding: 0px 5%;
`;
export const AllWrapper = styled.div `
width:40%;
display:flex;
gap:5%;



`;
export const Allads = styled.div `
  box-shadow: 0px 0px 2px #80808059;
  cursor:pointer;
  margin:  1.5rem 0px;
  width: 20%;
  height: 40%;
  box-shadow: 0px 0px 0px 1px #80808099;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;

 
`;
export const Favads = styled.div `
  box-shadow: 0px 0px 2px #80808059;
  cursor:pointer;
  margin:  1.5rem 0px;
  width: 30%;
  height: 40%;
  box-shadow: 0px 0px 0px 1px #80808099;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
 
`;
export const Others = styled.div `
  
//width: 30%;
  margin:  1.5rem 0px;
  height: 40%;
  
  display: flex;
  align-items: center;

  
`;

export const Input = styled.input`
    outline: none;
    
   
    border: none;
    
`;

export const AdsCount = styled.p `
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-family: sans-serif;
  margin: 0px!important;
  margin-right: 10px!important;
  span{
    font-size: 24px;
    margin-left: 5px;
  }
`;

export const Pagination = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Prev = styled.button`

`;

export const Next = styled(Prev)`

`;

export const PageNumber = styled.div`
  padding: 0 1rem;
`;  