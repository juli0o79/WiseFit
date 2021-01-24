import styled from 'styled-components/macro'

export const Container=styled.div`
    width: 90%;
    height: 200px;
    display: flex;
    flex-direction: row;
    margin-left: 5%;
    margin-bottom: 25px;

    &:first-of-type {
        border-top: white 5px solid;
      }

    @media(max-width: 900px){
        flex-direction: column;
        height: auto;
    }
`;

export const Section = styled.div`
    width: 30%;
    display: flex;
    padding: 20px;
    flex-direction: row;
    @media(max-width: 900px){
        width: 100%;
        padding-left: 0px;
        height:50vw;

    }
    
`;

export const Title = styled.h4``;

export const Subtitle = styled.p`
    font-size: 30px;
    color:white;
    margin-left: 5%;
`;

export const Player= styled.video`
    width: 100%;
    height: 100%;
`;