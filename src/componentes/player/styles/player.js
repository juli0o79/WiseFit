import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const Image = styled.div`
  
    background: url(${({ src}) => src ? `../images/thumb/${src}.jpg` : null})
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
      background: url(${({ src}) => src ? `../images/thumb/${src}-hover.jpg` : null})top left / cover no-repeat;

      img{
        width: 70px;
        height: 70px;
      }
    }
  `

export const Background = styled.div`
    background: rgba(0,0,0,0.0);
    height: 70%;
    border-radius: 10px;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

export const Playerbg = styled.div`
    width: 100%;
    height: 100%;
    color:red;
    position: absolute;
`;

export const Overlay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    margin: 0 px;
    z-index: 110000;
`;


export const Inner = styled.div`
    position: relative;
    width: 30%;
    max-width: 900px;
    margin: auto;

    video {
      height: 100%;
      width: 100%;
    }
`;

export const Close = styled.button`
    position: absolute;
    right: 15px;
    top: 15px;
    width: 22px;
    height: 22px;
    opacity: 0.7;
    background-color: transparent;
    border: 0;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }

    &:before,
    &:after {
      position: absolute;
      left: 10px;
      top: 0;
      content: ' ';
      height: 22px;
      width: 2px;
      background-color: #333;
    }

    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
`;

export const Button = styled.button`
    background-color: #e1ff00;
    border-radius: 20px;
    width: 115px;
    height: 45px;
    color: #1c1c1c;
    font-size: 20px;
    height: 45px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 0;
    position: relative;
    bottom: 30px;
    margin: auto;

    &:hover {
      transform: scale(1.05);
    }
`;

export const ButtonHead = styled.button`
    box-shadow: 0 0.6vw 1vw -0.4vw  rgba(0, 0, 0, 0.35);
    background-color: #e6e6e6;
    color: #000;
    border-width: 0;
    padding: 10px 20px;
    font-weight: bold;
    border-radius: 5px;
    max-width: 130px;
    font-size: 20px;
    margin-top: 20px;
    cursor: pointer;
    transition: background-color 1s ease;

    &:hover{
        background-color: #ff1e1e;
        color: white; 
    }
`;

export const Video = styled.video`
    width: 70% !important;
    width: 70% !important;
    height: 70% ;
`;