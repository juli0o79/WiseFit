import React from 'react';
import Payment from '../componentes/payment';

export default function PaymentContainer() {
    return (
        <Payment>
            <Payment.Section>
                <Payment.Title>MENSAL</Payment.Title>
                <Payment.Price>R$ 59,00</Payment.Price>
                <Payment.Text>
                    • Área de membros
                </Payment.Text>
                <Payment.Text>
                    • Vídeos explicativos
                </Payment.Text>
                <Payment.Text>
                    • Ficha de treino <br/> personalizada
                </Payment.Text>
            </Payment.Section>

            <Payment.Section>
                <Payment.Title>TRIMESTRAL</Payment.Title>
                <Payment.Text>MENSAL</Payment.Text>
                <Payment.Price>R$ 59,00</Payment.Price>
                <Payment.Text>À VISTA</Payment.Text>
                <Payment.Subtitle>
                    R$ 157,90
                </Payment.Subtitle>
                <Payment.Text>
                    • Área de membros
                </Payment.Text>
                <Payment.Text>
                    • Vídeos explicativos
                </Payment.Text>
                <Payment.Text>
                    <Payment.Span>• Ficha de treino <br/> personalizada</Payment.Span>
                </Payment.Text>
                <Payment.Break />
                <Payment.Text>
                    <Payment.Span>• Comunidade exclusiva no <br/> facebook</Payment.Span>

                </Payment.Text>
                <Payment.Text>
                    <Payment.Span>• Apoio personalizado por <br/> What's app</Payment.Span>

                </Payment.Text>

            </Payment.Section>
            <Payment.Section>
                <Payment.Title>SEMESTRAL</Payment.Title>
                <Payment.Text>MENSAL</Payment.Text>
                <Payment.Price>R$ 59,00</Payment.Price>
                <Payment.Text>À VISTA</Payment.Text>
                <Payment.Subtitle>
                    R$ 157,90
                </Payment.Subtitle>
                <Payment.Text>
                    • Área de membros
                </Payment.Text>
                <Payment.Text>
                    • Vídeos explicativos
                </Payment.Text>
                <Payment.Text>
                    <Payment.Span>• Ficha de treino <br/> personalizada</Payment.Span>
                </Payment.Text>
                <Payment.Break />
                <Payment.Text>
                    <Payment.Span>• Comunidade exclusiva no <br/> facebook</Payment.Span>

                </Payment.Text>
                <Payment.Text>
                    <Payment.Span>• Apoio personalizado <br/> por What's app</Payment.Span>

                </Payment.Text>
            </Payment.Section>
            <Payment.Signin/>
        </Payment>
    )
}