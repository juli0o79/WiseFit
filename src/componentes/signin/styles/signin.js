import styled, { createGlobalStyle } from 'styled-components/macro'


export const LockBody = createGlobalStyle`
    body, html{
        overflow: hidden;

    }`;

export const ReleaseBody = createGlobalStyle`
    body{
        overflow: visible;
    }
`;


export const Container = styled.div``;

export const Overlay = styled.div`
    background-color: rgba(0,0,0,0.8);
    position: fixed;
    top:0;
    left:0;
    height: 100%;
    width: 100%;
    display: ${({ isOpen }) => isOpen ? isOpen : null}
    z-index: 10000;
`;

export const Image = styled.img`
    width: 20px;
    height:20px;
    position: absolute;
    right: 30px;
    top: 30px;
    &:hover{
        cursor: pointer;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
    
`;

export const Formsection = styled.div`
    display: flex;
    position: relative;
    flex-direction : column;
    margin: auto;
    width: 100%;
    text-align: center;
    margin-bottom: 15px;
`;

export const Label = styled.label`
    color: #1c1c1c;
`;

export const Section = styled.section`
    width: 20vw;
    height: 30vw;
    border-radius: 10px;
    background-color: white;
    margin: auto;
    margin-top: 5vw;
    display: flex;
    align-items: center;
    
    @media(max-width: 900px){
        width: 80vw;
    height: 90vw;
    margin-top: 10vw;
    }
`;

export const Title = styled.h1`
    color: #1c1c1c;
`;

export const Name = styled.input`
    width: 100%;
`;

export const Email = styled.input``;

export const Phone = styled.input``;

export const Button = styled.button`
    height: 30px;
    width: 120px;
`;