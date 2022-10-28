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