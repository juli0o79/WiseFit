import React from 'react';
import {
    Container,
    Section,
    Title,
    Player,
    Subtitle,
    Image
} from './styles/gallery'




export default function Gallery({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Gallery.Section = function GallerySection({ children, ...restProps }) {
    return (
        <Section {...restProps}> {children} </Section>
    )
}

Gallery.Image = function GalleryImage({ children, ...restProps }) {
    return (
        <Image {...restProps}> {children} </Image>
    )
}

Gallery.Title = function GalleryTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}> {children} </Title>
    )
}

Gallery.Subtitle = function GallerySubtitle({ children, ...restProps }) {
    return (
        <Subtitle {...restProps}> {children} </Subtitle>
    )
}

Gallery.Player = function GalleryPlayer({ children, ...restProps }) {
    return (
        <Player {...restProps}> {children} </Player>
    )
}