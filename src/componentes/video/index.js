import React from 'react';
import {
    Container,
    Section,
    Title,
    Player,
    Subtitle
} from './styles/video'




export default function Video({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Video.Section = function VideoSection({ children, ...restProps }) {
    return (
        <Section {...restProps}> {children} </Section>
    )
}

Video.Title = function VideoTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}> {children} </Title>
    )
}

Video.Subtitle = function VideoSubtitle({ children, ...restProps }) {
    return (
        <Subtitle {...restProps}> {children} </Subtitle>
    )
}

Video.Player = function VideoPlayer({ children, ...restProps }) {
    return (
        <Player {...restProps}> {children} </Player>
    )
}