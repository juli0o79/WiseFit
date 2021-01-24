import React, { useState, createContext, useContext } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { SignIn } from '../index';
import {
    Background,
    ButtonLink,
    Container,
    Group,
    Logo,
    Feature,
    Text,
    FeatureCallOut,
    TextLink,
}
    from './styles/header';

const IsOpenContext = createContext();

export default function Header({ bg = true, children, ...restProps }) {
    const [isOpen, SetIsOpen] = useState("none");
    const [isLocked, SetIsLocked] = useState(false);
    return bg ? (
        <IsOpenContext.Provider value={{ isOpen, SetIsOpen, isLocked, SetIsLocked }}>
            <Background {...restProps}> {children} </Background>
        </IsOpenContext.Provider>
    ) : (<IsOpenContext.Provider value={{ isOpen, SetIsOpen, isLocked, SetIsLocked }}>{children} </IsOpenContext.Provider>); // children aqui não está entre jsx, pode ser usado como objeto (verificar)

}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return (
        <Feature {...restProps}>{children}</Feature>
    )
}

Header.Group = function HeaderGroup({ children, ...restProps }) {

    return (

        <Group {...restProps}>{children}</Group>
    )
};

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
    return (
        <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
    )
}

Header.Text = function HeaderText({ children, ...restProps }) {
    return (
        <Text {...restProps}>{children}</Text>
    )
}

Header.Signin = function HeaderSignIn({ children, ...restProps }) {
    const { isOpen, SetIsOpen, isLocked, SetIsLocked } = useContext(IsOpenContext);
    return (
        <SignIn>
            {isLocked ? (<SignIn.Overlay isOpen={isOpen} isLocked={isLocked} SetIsLocked={SetIsLocked} />) : (<SignIn.ReleaseBody />)}
        </SignIn>
    )
}

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return (
        <TextLink {...restProps}>{children}</TextLink>
    )
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    const { isOpen, SetIsOpen, SetIsLocked } = useContext(IsOpenContext);
    return <ButtonLink {...restProps} onClick={() => { SetIsOpen(''); SetIsLocked(true) }}>{children}</ButtonLink>
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    )
}