import styled from "styled-components"

export const Header = styled.div `
  display: flex;
  align-items: center;
   box-shadow: 4px 1px 0px 0px #707070;
  width: 88%;
  height: 80px;
  background: #FFFFFF;
  padding:0% 7% 0% 5%;
 
  h1{
    width: 50%;
    padding-left: 2rem;
  }
`;
export const HeaderWrapper = styled.div `
  width: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
  background: white;

  img{
    height: 22px;
    margin: 20px 0px;
  }
`;
export const Export = styled.div `
// top: 32px;
// left: 1562px;
width: 201px;
height: 35px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 0px 6px #00000029;
border-radius: 18px;

display:flex;


img{
position:relative;
bottom:14px;
left:10px;

width: 16px;
height: 18px;
background: transparent url('images/export.png') 0% 0% no-repeat padding-box;

}

`;
export const A = styled.div `
position:relative;
  
left:30px;
top:8px;


font-size: 17px;
letter-spacing: 0px;
color: #3B7AEB;
`;
export const Csv1 = styled.div `
position:relative;
left:40px;
width: 60px;
height: 35px;
background: #3D75EA 0% 0% no-repeat padding-box;
border-radius: 18px;

opacity: 1;
h3{
  position:relative;
  top:7px;
  left:5px;
text-align: left;
font: normal normal normal 18px/21px Arial;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
}
 
`;
export const Card1 = styled.div `
position:relative;
right:10px;
width: 60px;
height: 35px;
background: #3D75EA 0% 0% no-repeat padding-box;
border-radius: 18px;

opacity: 1;
h3{
  position:relative;
  top:7px;
  left:5px;
text-align: left;
font: normal normal normal 18px/21px Arial;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
}
 
`;

