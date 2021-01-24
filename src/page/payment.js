import React from 'react';
import { Header, Card } from '../componentes';
import * as ROUTES from '../constants/routes';
import { FooterContainer } from '../containers/footer';
import logo from '../logo.png'


export default function PaymentPage() {
    return (
        <>
            <Header.Frame>
                <Header.Group>
                    <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                </Header.Group>
            </Header.Frame>
            <Card>
                <Card.Form />
            </Card>
            <FooterContainer />
        </>
    )
}