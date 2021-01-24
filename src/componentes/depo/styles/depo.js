import styled from 'styled-components/macro';

export const Container = styled.div`
margin-top: 2px;
@media(max-width: 900px){
    width: 90%;
    margin-left: 5%;
}
 
`;

export const SideGroup = styled.div`
width: 40%;
text-align: left;
margin-left: 5%;
    h3{
        font-size: 30px;
        margin-left: 0px;
        padding: 0px;
        text-align: left;
    }

 @media(max-width: 900px){
     width: 90%;
     margin-left: 5%;
     h3{
        font-size: 20px;
        margin-left: 0px;
        padding: 0px;
        text-align: center;
    }
    p{
        margin: 0px;
        margin-left: 0px;
        text-align: center;
    }
 }   
 
`;



export const SideGroupRight = styled.div`
width: 40%;
text-align: right;
margin-left: 55%;
    h3{
        font-size: 30px;
        margin-right: 0px;
        padding: 0px;
    }

 @media(max-width: 900px){
     position: relative;
     width: 90%;
     margin: auto;
     text-align: center;
     h3{
        font-size: 20px;
        padding: 0px;
        text-align: center;
    }
    p{
        font-size: 25px;
        margin: 0px;
        margin-left: 0px;
    }
 }   
 
`;

export const Group = styled.div`
    width: 100%;
    display: block;
   text-align: center;
   margin-bottom: 40px;

   @media(max-width: 900px){
    margin-bottom: 20px;
}
   
    `;

export const Section = styled.div`
    width: 90%;
    position: relative;
    margin: auto;
   `;
export const GroupSlide = styled(Group)`
    width: 80%;
    margin-left: 10%;
    `;

export const Button = styled.button`
    background-color: #e1ff00;
    color: #1c1c1c;
    width: 270px;
    height: 70px;
    font-size: 30px;
    border-radius: 5px;
    transition: 0.3s;
    margin-bottom: 25px;

        &:hover {
        background-color: white;
        cursor: pointer;
        }

        @media(max-width: 900px){
            width: 170px;
        height: 40px;
        font-size: 20px;
        }
    `;

export const GroupImage = styled.div`
    display: flex;
    align-items: center;
    background: url("../images/misc/${({ src }) => src}.jpg")
    top left / cover no-repeat;
    height: 420px;
    width: 100%;
    padding-top: 80px;
    ${Group}{
        margin-bottom: 0px;
    }
    h3{
        margin-top: 0px;
    }

    @media(max-width: 900px){
        background: #1c1c1c;
        height: auto;
    }

    `;
export const HouseImage = styled(GroupImage)`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 320px;

        h3{
            margin-bottom: 0px;
            font-size: 35px;
        }

        p{
            width: 90%;
            margin-left: 5%;
            margin-bottom: 0px;
            font-size: 25px;
        }
    `;

export const Image = styled.img``;

export const Promotion = styled.h3`
    color: white;
    font-size: 50px;
    font-weight: regular;
    margin-left: 5%;
    text-align: center;

`;

export const Text = styled.p`
    color: white;
    font-size: 20px;
    letter-spacing: 1px;
    margin-bottom: 40px;

    @media(max-width: 900px){
        font-size: 20px;
        text-align: center;
        margin-left: 0px;
        margin-bottom: 25px;
    }
`;


export const Span = styled.span`
    color: #e1ff00;
    font-weight: bold;
`;

