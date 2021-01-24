import React, { useState, useContext, createContext } from 'react';
import { SignIn } from '../index'
import {
    Container,
    Section,
    Title,
    Subtitle,
    Button,
    Break,
    Price,
    Text,
    Subsection,
    Span
} from './styles/payment'

const IsOpenContext = createContext();

export default function Payment({ children, ...restProps }) {
    const [isOpen, SetIsOpen] = useState("none");
    const [isLocked, SetIsLocked] = useState(false);
    return (
        <IsOpenContext.Provider value={{ isOpen, SetIsOpen, isLocked, SetIsLocked }}>
            <Container {...restProps}>{children}</Container>
        </IsOpenContext.Provider>
    )
}

Payment.Signin = function PaymentSignIn({ children, ...restProps }) {
    const { isOpen, SetIsOpen, isLocked, SetIsLocked } = useContext(IsOpenContext);
    return (
        <SignIn>
            {isLocked ? (<SignIn.Overlay isOpen={isOpen} isLocked={isLocked} SetIsLocked={SetIsLocked} />) : (<SignIn.ReleaseBody />)}
        </SignIn>
    )
}

Payment.Section = function PaymentSection({ children, ...restProps }) {
    const { isOpen, SetIsOpen, SetIsLocked } = useContext(IsOpenContext);
    return (
        <Section {...restProps} onClick={() => { SetIsOpen(''); SetIsLocked(true) }}> {children} </Section>
    )
}
Payment.Subsection = function PaymentSubsection({ children, ...restProps }) {
    return (
        <Subsection {...restProps}> {children} </Subsection>
    )
}

Payment.Break = function PaymentBreak({ children, ...restProps }) {
    return (
        <Break {...restProps}> {children} </Break>
    )
}

Payment.Title = function PaymentTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}> {children} </Title>
    )
}

Payment.Span = function PaymentSpan({ children, ...restProps }) {
    return (
        <Span {...restProps}> {children} </Span>
    )
}

Payment.Text = function PaymentText({ children, ...restProps }) {
    return (
        <Text {...restProps}> {children} </Text>
    )
}

Payment.Price = function PaymentPrice({ children, ...restProps }) {
    return (
        <Price {...restProps}> {children} </Price>
    )
}

Payment.Subtitle = function PaymentSubtitle({ children, ...restProps }) {
    return (
        <Subtitle {...restProps}> {children} </Subtitle>
    )
}

Payment.Button = function PaymentButton({ children, ...restProps }) {
    return (
        <Button {...restProps}> {children} </Button>
    )
}