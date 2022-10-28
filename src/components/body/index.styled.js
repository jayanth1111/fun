import styled from 'styled-components'

export const Body = styled.div `
  width: 100%;
  margin: 0 auto;
  min-height: calc(100vh - 100px);
  background: white;
`;
export const Bodycomponent = styled.div `
    display:flex;
    width: 100%;
    background-color: #FBFBFB;
    display: flex;
    margin-top:1px;
    

`;
export const Side = styled.div`
 width:7%;
 
 background:#FFFFFF;
 
  
`;
export const Main = styled.div `
    background:#FBFBFB;
    width:93%;
    height:1000px;
    
    
  
`;
export const Icon =styled.div `
    height:100px;
    padding-top:25%;
    padding-left:20%;
    :hover{
      background:blue;
    }
`;

export const SearchHeader = styled.div`
    
     height:10%;
     padding-left:3%
`;

export const AdsWrapper = styled.div `
      background:blue;
      height:90%;
`;

export const SearchWrapper = styled.div `
  box-shadow: 0px 0px 2px #80808059;
  padding: 10px 0px;
  margin: 1.5rem 0px;
  width: 550px;
  height: 45px;
  box-shadow: 0px 0px 0px 1px #80808099;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  padding: 0px 10px;

  img{
    height: 30px;
  }
`;

export const Input = styled.input`
    outline: none;
    width: 500px;
    line-height: 1rem;
    border: none;
    font-size: 16px;
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