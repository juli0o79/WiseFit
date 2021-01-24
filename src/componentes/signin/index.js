import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {
    Container,
    Overlay,
    Title,
    Form,
    Formsection,
    Label,
    Name,
    Email,
    Phone,
    Button,
    Section,
    Image,
    LockBody,
    ReleaseBody
} from './styles/signin'

export default function SignIn({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

SignIn.Overlay = function SignInOverlay({ isOpen, isLocked, SetIsLocked, children, ...restProps }) {

    const history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const isInvalid = name === "" || email === "" || phone === "";
    function Validate(e) {
        if (isInvalid) {
            e.preventDefault();
            alert('Preencha os campos')
        } else {
            history.push('/payment')
        }
    }

    return (
        <Overlay {...restProps} isOpen={isOpen}>
            <LockBody />
            <Image src="images/misc/close.png" onClick={() => { SetIsLocked(false); console.log() }} alt="fechar" />
            <Section>
                <Form>
                    <Title>
                        Informe seus dados
                    </Title>
                    <Formsection>
                        <Label htmlFor="name"> Seu Nome: </Label>
                        <Name id="name" value={name} onChange={({ target }) => setName(target.value)} />
                    </Formsection>
                    <Formsection>
                        <Label htmlFor="email"> Seu Email: </Label>
                        <Email type="email" id="email" value={email} onChange={({ target }) => setEmail(target.value)} />
                    </Formsection>
                    <Formsection>
                        <Label htmlFor="number"> Seu Contato: </Label>
                        <Phone type="number" id="phone" value={phone} onChange={({ target }) => setPhone(target.value)} />
                    </Formsection>
                    <Button onClick={(e) => Validate(e)}>
                        Finalizar
                    </Button>
                </Form>
            </Section>
            {children}
        </Overlay>
    )
}

SignIn.Section = function SignInSection({ children, ...restProps }) {
    return (
        <Section {...restProps}>
            {children}
        </Section>
    )
}


SignIn.Title = function SignInTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}>
            {children}
        </Title>
    )
}

SignIn.Image = function SignInImage({ ...restProps }) {
    return (
        <Image {...restProps} />
    )
}

SignIn.Name = function SignInName({ ...restProps }) {
    return (
        <Name {...restProps} />
    )
}


SignIn.Email = function SignInEmail({ ...restProps }) {
    return (
        <Email {...restProps} />
    )
}

SignIn.Phone = function SignInPhone({ ...restProps }) {
    return (
        <Phone {...restProps} />
    )
}

SignIn.LockBody = function SignInLockBody({ ...restProps }) {
    return (
        <LockBody {...restProps} />
    )
}


SignIn.ReleaseBody = function SignInReleaseBody({ ...restProps }) {
    return (
        <ReleaseBody {...restProps} />
    )
}


