import styled from 'styled-components'

export const CardContainer = styled.div `
  box-shadow: 0px 0px 3px 0px grey;
  border-radius: 4px;
  width: 680px;
  margin: 10px;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;

  iframe{
    border: none;
    overflow: hidden;
    margin: 0 auto;
  }
`;
export const AdHeader = styled.div `
  display: flex;
  height: 50px;
  position: relative;
  // padding: 10px 10px 0px;
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
export const Name = styled.div `
margin-left: 5px;
cursor: pointer;
margin-left: 10px;
h2{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
  width: 150px;
  text-align: center;
  box-shadow: 0px 0px 2px 0px grey;
  padding: 5px;
  margin: 3px;
  margin-left: 10px;
  border-radius: 3px;
  color: white;
  background: #0079e3;
  img{
    height: 15px;
    border: solid 2px white;
    padding: 2px;
    margin-left: 6px;
    border-radius: 50%;
  }
}
`;
export const Options = styled.div `
  display: flex;
  position: absolute;
  right: 0;
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
    height: 35px;
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
        height: 25px;
        margin: 0px 15px;
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
  display: flex;
  background: #e7e7e7;
  height: 100%;
  align-items:center;
  jusfify-content:center;
`;
