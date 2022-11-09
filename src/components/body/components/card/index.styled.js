import styled from 'styled-components'

export const CardContainer = styled.div `
  box-shadow: 0px 0px 3px 0px grey;
  border-radius: 4px;
  margin: 10px;

  display: flex;
  flex-direction: column;
  align-items:centre;
  justify-content:centre;
  // width: 90%;
  // height: 900px;
 
`;
export const AdHeader = styled.div `
  display: flex;
  height: 50px;
  position: relative;
  align-items: center;
  padding: 5px;
`;
export const Logo = styled.div `
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    border-radius: 50%;
    height: 40px;
    width: 40px;
  }
`;
export const Namef = styled.div `

width: 25%;
height: 50%;
background: #1877F2 0% 0% no-repeat padding-box;
border-radius: 6px;
opacity: 1;
display: flex;
justify-content: center;
align-items: center;
gap:5px;
h6{
  color:white;
}
`;
export const Namet = styled.div `

width: 25%;
height: 50%;
background: #55ACEE 0% 0% no-repeat padding-box;
border-radius: 6px;
opacity: 1;
display: flex;
justify-content: center;
align-items: center;
gap:5px;
h6{
  color:white;
}
`;
export const Namey = styled.div `

width:25%;
height: 50%;
background: #EA412C 0% 0% no-repeat padding-box;
display: flex;
justify-content: center;
align-items: center;
gap:5px;
border-radius: 6px;
opacity: 1;
h6{
  color:white;
}
`;
export const Options = styled.div `
  display: flex;
  position: absolute;
  right: 0;
  justify-content: center;
  align-items: center;
  gap:5px;
`;
export const Options2 = styled.div `
height:70px;
display: flex;
gap:20%;
justify-content: center;
  align-items: center;
`;
export const AdlibraryButton = styled.button `
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  box-shadow: 0px 0px 2px 0px #696969cf;
  border-radius: 3px;
  background: #f0f0f0;
  margin: 0px 10px;
  font-weight: 600;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  
  text-align: center;
  box-shadow: grey 0px 0px 2px 0px;
  padding: 5px;
  margin: 3px 3px 3px 10px;
  border-radius: 3px;
  color: white;
  background: rgb(0, 121, 227);
  font-size: 18px;
  height: 34px;
  span{
    background: white;
    color: #2d79e3;
    padding: 2px 3px;
    border-radius: 2px;
    margin-left: 5px;
  }
  &:hover{

  }
`;
export const FavoriteButton = styled.button `
  border: none;
  background: none;
  cursor: pointer;
  width: auto;
  margin-right: 5px;
  img{
    
  }
  &:hover{
    
  }
`;
export const CardBody = styled.div `
position: relative;
  .nextArrow.arrow{
    cursor: pointer;
    width: 50px;
    position: absolute;
    background: white;
    height: 50px;
    top: 36%;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    border-radius: 33px;
    box-shadow: 0px 0px 4px 1px #808080c9;
    color: #636363;
  }

  .backArrow.arrow{
    cursor: pointer;
    width: 50px;
    position: absolute;
    background: white;
    height: 50px;
    top: 36%;
    left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    border-radius: 33px;
    box-shadow: 0px 0px 4px 1px #808080c9;
    color: #636363;
  }
`;
export const CardDescription = styled.div `
padding: 0px 10px;
p{
  font-size: 15px;
  font-weight: 400;
  line-height: 1.3;
}
`;
export const CardMedia1 = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    // width: 100%;
  }
`;

export const CardMedia2 = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  display: flex;
  min-width: 560px;
  min-height: 560px;
  position: relative;
  padding: 0px 3px 0px 0px;
  margin: 10px;
  img{
    width: auto;
    height: auto;
    max-height: 100%;
    max-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
export const CallOfActions = styled.div `
  display: flex;
  background: #f0f2f5;
  cursor: pointer;
  padding: 10px;
`;
export const Left = styled.div `
  width: 80%;
  max-width: ${
    props => props.arrayImg ? "200px" : "80%"
};
`;
export const Right = styled.div `
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  button{
    height: 30px;
    min-width: 90px;
    outline: none;
    border: none;
    box-shadow: 0px 0px 2px 0px grey;
    background: rgb(228 230 235);
    border-radius: 3px;
  }
`;
export const ActionUrl = styled.p `
  font-size: 13px;
  color: #65676bde;
  padding: 2px;
  margin: 0px;
`;
export const ActionHead = styled.p `
  line-height: 1.17;
  color: #050505;
  font-size: 16px;
  font-weight: 600;
  padding: 2px;
  margin: 0px;
`;
export const ActionDescription = styled.p `
  font-size: 15px;
  color: #65676b;
  padding: 2px;
  margin: 0px;
`;
export const Stats = styled.div `
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 15px 0px;
`;
export const Likes = styled.div `
  font-size: 16px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    height: 20px;
    margin-right: 5px;
  }
`;
export const Comments = styled.div `
  font-size: 16px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    height: 20px;
    margin-right: 5px;
  }
`;
export const Shares = styled.div `
  font-size: 16px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    height: 20px;
    margin-right: 5px;
  }
`;
export const DeleteButton = styled.button `
    outline: none;
    border: none;
    background: none;

    img{
        
        padding-right:10px;
        cursor: pointer;
    }
`;

export const FoundOn = styled.div `
  
`;

export const ImageListContainer = styled.div `
  display: flex;
  overflow-x: hidden;
  
`;

export const LeftArrow = styled.div `

`;

export const RightArrow = styled.div `

`;

export const EmbedContainer = styled.div `
  
  background: #e7e7e7;
  height:95%;
  width:100%;
  



  iframe{
    transform: scale(0.85);
    position:relative;
    bottom:10%;
   
    
  }
`;
