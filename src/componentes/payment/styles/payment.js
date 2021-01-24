import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 90%;
    margin-left: 5%;
    @media(max-width: 1000px){
        flex-direction: column;
    }
    }
`;

export const Title = styled.h3`
    font-size: 40px;
    color: white;
    position: relative;
    text-align: center;
    bottom: 40px;
    margin: 0px;
    @media(max-width: 1000px){
        font-size: 30px;
    }
`
export const Text = styled.p`
  color: white;
  text-align: center;
  margin: 5px;
  font-size: 21.8px;
  @media(max-width: 900px){
      font-size: 20px;
  }
`

export const Section = styled.div`
    display: flex;
    justify-content: end;
    flex-direction: column;
    width: 30%;
    height: 520px;
    margin: 3%;
    border-radius: 10px;
    background:  rgba(255, 255, 255, 0.08);
    padding: 20px;  
    transition: 0.3s;
    cursor: pointer;
    &:hover{
        background:  rgba(255, 255, 255, 0.31);
        width: 32%;
        height: 520px;
        margin: 0px;

        ${Title}{
            color: #e1ff00;
        }
    }
    @media(max-width: 1000px){
        width: 90%;
        height: auto;
        margin: 0px;
        margin-bottom: 35px;
        &:hover{
            width: 91%;
            height: auto;
        }
    }

  
`;

export const Subsection = styled.div`
    width: 100%;
    display: flex;

`;

export const Break = styled.div`
    height: 30px;
`;

export const Price = styled.p`
    font-size: 40px;
    color: white;
    text-align: center;
    width: 100%;
    margin: 0px;
    margin-bottom: 10px;
    @media(max-width: 1000px){
        font-size: 30px;
    }
`

export const Subtitle= styled.p`
    color: white;
    text-align: center;
    font-size: 40px;
    margin-top: 0px;
`;

export const Button = styled.button``;

export const Span = styled.span`
    color :#e1ff00;
`