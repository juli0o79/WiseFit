import React, { useState, useContext, createContext } from 'react';
import SignIn from '../signin';
import {
    Container,
    Group,
    Promotion,
    Text,
    Span,
    Image,
    GroupImage,
    SideGroup,
    Section,
    Button,
    GroupSlide,
    SideGroupRight,
    HouseImage
} from './styles/depo'

const IsOpenContext = createContext();


export default function Depo({ children, ...restProps }) {
    const [isOpen, SetIsOpen] = useState("none");
    const [isLocked, SetIsLocked] = useState(false);
    return (
        <IsOpenContext.Provider value={{ isOpen, SetIsOpen, isLocked, SetIsLocked }}>
            <Container {...restProps}>{children}</Container>
        </IsOpenContext.Provider>
    )
}

Depo.Button = function DepoButton({ children, ...restProps }) {
    const { isOpen, SetIsOpen, SetIsLocked } = useContext(IsOpenContext);
    return (
        <Button {...restProps} onClick={() => { SetIsOpen(''); SetIsLocked(true); }}>{children}</Button>
    )
}

Depo.SideGroup = function DepoSideGroup({ children, ...restProps }) {
    return <SideGroup {...restProps}>{children}</SideGroup>
}

Depo.Section = function DepoSection({ children, ...restProps }) {
    return <Section {...restProps}>{children}</Section>
}

Depo.SideGroupRight = function DepoSideGroupRight({ children, ...restProps }) {
    return <SideGroupRight {...restProps}>{children}</SideGroupRight>
}


Depo.Group = function DepoGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}

Depo.Signin = function DepoSignIn({ children, ...restProps }) {
    const { isOpen, SetIsOpen, isLocked, SetIsLocked } = useContext(IsOpenContext);
    return (
        <SignIn>
            {isLocked ? (<SignIn.Overlay isOpen={isOpen} isLocked={isLocked} SetIsLocked={SetIsLocked} />) : (<SignIn.ReleaseBody />)}
        </SignIn>
    )
}

Depo.GroupSlide = function DepoGroupSlide({ children, ...restProps }) {
    return <GroupSlide {...restProps}>{children}</GroupSlide>
}

Depo.GroupImage = function DepoGroupImage({ children, ...restProps }) {
    return <GroupImage {...restProps}>{children}</GroupImage>
}

Depo.HouseImage = function DepoGroupHouseImage({ children, ...restProps }) {
    return <HouseImage {...restProps}>{children}</HouseImage>
}

Depo.Promotion = function DepoPromotion({ children, ...restProps }) {
    return <Promotion {...restProps}>{children}</Promotion>
}



Depo.Text = function DepoText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Depo.Span = function DepoSpan({ children, ...restProps }) {
    return <Span {...restProps}>{children}</Span>
}

Depo.Image = function DepoImage({ children, ...restProps }) {
    return <Image {...restProps} />
}