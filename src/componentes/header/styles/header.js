import styled from 'styled-components/macro';
//Importando link do react router-dom e ele também pode ser estilizado, interessante ....
import { Link as ReactRouterLink } from 'react-router-dom';

/* Para poder utilizar jsx dentro de citação se usa crases e o $
    é isso que está ocorrendo no background */

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: url(${({ src }) => src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg'})
    top left / cover no-repeat; 

    @media(max-width: 1100px) {
        ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && 'background: none;'}
        background: #1c1c1c;
    }
`;

export const Frame = styled.div`
    width: 100%;
`;

export const Group = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center; 
   width: 100%;
   height: 120px;
   @media(max-width: 1100px){
       background: #1c1c1c;
   }
`;

export const TextLink = styled.p`
    color: white;
    text-decoration: none;
    margin-right : 30px;
    font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }

    &:last-of-type{
        margin-right: 0;
    }
    @media(max-width: 500px){
        margin-right: 10px;
    }
`;

export const Logo = styled.img`
    height: 90px;
    width:  90px;
    margin-right: 40px;
    transition: 0.3s;
    

    @media(max-width: 1409px){
        height: 70px;
        width: 70px;
    }
    &:hover{
        height: 70px;
        width: 70px;
    }

`;

export const ButtonLink = styled.button`
    display: block;
    background-color: #e1ff00;
    width: 110px;
    height: fit-content;
    color: #1c1c1c;
    border: 0;
    font-size: 20px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;
    transition: 0.3s;

    &:hover {
        background-color: white;
    }

`;

export const Container = styled.div`
    display: flex;
    margin: 0 5%;
    height: 64px;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;

    a {
        display:flex;
    }
    @media(max-width: 1000px) {
        margin: 0 30px;


    }
`;


export const Feature = styled(Container)`
    padding: 150px 0 500px 0;
    flex-direction: column;
    align-items: normal;
    width: 30%;

    @media(max-width: 1100px){
       display:none; 
    }

`;

export const Text = styled.p`
    color: #333333;
    font-size: 30px;
    letter-spacing: 1px;
    text-align: left;
    line-height: normal;
    margin: 0;
`;

export const FeatureCallOut = styled.h2`
    color: #1c1c1c;
    font-size: 50px;
   
    
    margin: 0;
    margin-bottom: 20px;
    
     font-weight: bold;
`;







