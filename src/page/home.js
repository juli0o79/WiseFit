import React from 'react';
import DepoContainer from '../containers/depo';
import { FooterContainer } from '../containers/footer';
import HeaderContainer from '../containers/header';
import ImageGalleryContainer from '../containers/imggallery';
import PaymentContainer from '../containers/payment';
import GalleryContainer from '../containers/videogal';

export default function Home(){
    return(
    <>
        <HeaderContainer/>
        <DepoContainer />
        <PaymentContainer />
        <GalleryContainer />
        <ImageGalleryContainer />
        <FooterContainer />
    </>)
}