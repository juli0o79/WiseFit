import styled from 'styled-components/macro';

export const Container = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 400px;
    position: relative;
    margin: auto;
    border-radius: 30px;
    padding: 30px;

    @media{
        height: 400px;
    }
`;

export const Section = styled.div`
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const Namegroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
        
`;

export const Cvvgroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
    margin-left: 5%;
`;

export const Numbergroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const FormGroup = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
`;

export const FormTitle = styled.h2`
    color: #1c1c1c;
    margin-left: 5%;
`;

export const Form = styled.form``;

export const Select = styled.select`
    height: 40px;
`;

export const Image = styled.img`
    height: 60px;
    margin-left: 30px;
`;

export const Selectgroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    @media(max-width:800px){
        flex-direction: column;
        justify-content: center;
        ${Image}{
            margin: 0px;
            height: 40px;
        }
        ${Select}{
            width: 100px;
            height: 40px;
        }
    }
`;

export const Option = styled.option``;

export const Name = styled.input`
    width: 100%;
    height: 30px;

`;

export const Number = styled.input`
    width: 100%;
    height: 30px;
`;

export const Cvv = styled.input`
    width: 100%;
    height: 30px;
`;

export const Submit = styled.input`
    color: white;
    height: 40px;
    width: 120px;
    font-size: 20px;
    background-color: #1c1c1c;
    border: none;
    display: block;
    margin-left: 5%;
    transition: 0.3s;

    &:hover{
        background-color: #e1ff00;
    }
`;

export const Label = styled.label`
    color: #1c1c1c;
    display: block;
    font-size: 20px;
    margin-bottom: 5px;
`;

export const Break = styled.br``;

