import React from 'react';
import { Footer } from '../componentes'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Title>
                Dúvidas? Entre em contato
            </Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">FAQ</Footer.Link>
                    <Footer.Link href="#">Parceiros</Footer.Link>
                    <Footer.Link href="#">Dicas de alimentação</Footer.Link>
                    <Footer.Link href="#">Informações</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Informações sobre treinos</Footer.Link>
                    <Footer.Link href="#">Presentear um amigo</Footer.Link>
                    <Footer.Link href="#">Termos de uso</Footer.Link>
                    <Footer.Link href="#">Contato</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href="#">Conta</Footer.Link>
                    <Footer.Link href="#">Enviar foto de evolução</Footer.Link>
                    <Footer.Link href="#">Privacidade</Footer.Link>
                    <Footer.Link href="#">Certificados</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href="#">Centro de Mídia</Footer.Link>
                    <Footer.Link href="#">Treino para pandemia</Footer.Link>
                    <Footer.Link href="#">Informações do Cookie</Footer.Link>
                    <Footer.Link href="#">Direitos Autorais</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break />
            <Footer.Text>Camilão- Personal Trainer</Footer.Text>
        </Footer>
    )
}