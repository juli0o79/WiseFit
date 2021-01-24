import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {
    Container,
    Form,
    FormTitle,
    FormGroup,
    Label,
    Select,
    Option,
    Name,
    Number,
    Cvv,
    Submit,
    Image,
    Namegroup,
    Numbergroup,
    Cvvgroup,
    Selectgroup,
    Section

} from './styles/creditcard'

export default function Card({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Card.Form = function CardForm({ children, ...restProps }) {

    const history = useHistory();
    const [name, setName] = useState("");
    const [cvv, setCvv] = useState("");
    const [number, setNumber] = useState("");
    const isInvalid = name === "" || cvv === "" || number === "";

    function Finish(e) {
        if (isInvalid) {
            e.preventDefault();
            alert('Preencha os campos')
        } else {
            alert('Parabéns por adquirir o plano')
            history.push('/home');
        }
    }
    return (
        <Form {...restProps}>
            <Section>
                <FormTitle>Pagamento</FormTitle>
                <FormGroup>
                    <Namegroup>
                        <Label htmlFor="nome"> Nome:</Label>
                        <Name type="text" placeholder="Nome do titular" id="nome" value={name} onChange={({ target }) => setName(target.value)} />
                    </Namegroup>
                    <Cvvgroup>
                        <Label htmlfor="cvv">CVV </Label>
                        <Number type="number" placeholder="cvv" id="cvv" value={cvv} onChange={({ target }) => setCvv(target.value)} />
                    </Cvvgroup>
                </FormGroup>
                <FormGroup>
                    <Numbergroup>
                        <Label htmlfor="numero">Número do cartão </Label>
                        <Cvv type="number" placeholder="Número do cartão" id="numero" value={number} onChange={({ target }) => setNumber(target.value)} />
                    </Numbergroup>
                </FormGroup>
                <FormGroup>
                    <Selectgroup>
                        <Select>
                            <Option>Jan</Option>
                            <Option>Fev</Option>
                            <Option>Mar</Option>
                            <Option>Abr</Option>
                            <Option>Mai</Option>
                            <Option>Jun</Option>
                            <Option>Jul</Option>
                            <Option>Ago</Option>
                            <Option>Set</Option>
                            <Option>Out</Option>
                            <Option>Nov</Option>
                            <Option>Dez</Option>
                        </Select>
                        <Select>
                            <Option value="2020">
                                2020
                    </Option>
                            <Option value="2021">
                                2021
                    </Option>
                        </Select>
                        <Image src="images/misc/bandeiras.png" alt="bandeiras" />
                    </Selectgroup>
                </FormGroup>
                <Submit type="submit" value="Confirmar" onClick={(e) => Finish(e)} />
            </Section>

        </Form>
    )
}