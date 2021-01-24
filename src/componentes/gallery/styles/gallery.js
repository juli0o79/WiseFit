import styled from 'styled-components/macro'

export const Container = styled.div`
    width: 90%;
    height: 30vw;
    display: flex;
    flex-direction: row;
    margin-left: 5%;
    border-top: #e1ff00 solid 5px;

    @media(max-width: 900px){
        flex-direction: column;
        height: auto;
    }
`;

export const Image = styled.div`
  
  background: url(${({ src }) => src ? `../images/misc/${src}.jpg` : null})
  top left / cover no-repeat;
  height: 100%;  
  width: 100%;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    width: 60px;
    height: 60px;
    transition: 0.3s;
  }

  &:hover{
    background: url(${({ src }) => src ? `../images/misc/${src}-hover.jpg` : null})top left / cover no-repeat;

    img{
      width: 70px;
      height: 70px;
    }
  }
`

export const Section = styled.div`
    width: 30%;
    display: flex;
    padding: 20px;
    flex-direction: row;
    @media(max-width: 900px){
        width: 100%;
        padding-left: 0px;
        height:90vw;

    }
    
`;

export const Title = styled.h4``;

export const Subtitle = styled.p``;

export const Player = styled.video`
    width: 100%;
    height: 100%;
`;