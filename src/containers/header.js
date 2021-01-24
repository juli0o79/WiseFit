import React from 'react';
import { Header } from '../componentes'
import * as ROUTES from '../constants/routes'
import logo from "../logo.png"

export default function HeaderContainer({ children }) {

    return (
        <Header src="capa">

            <Header.Frame>
                <Header.Group>
                    <Header.Logo to={ROUTES.HOME} src={logo} alt="Camilao" />
                    <Header.ButtonLink>Assinar</Header.ButtonLink>
                </Header.Group>
            </Header.Frame>
            <Header.Feature>
                <Header.FeatureCallOut>
                    CHEGA DE EXERCÍCIOS GENÉRICOS!
            </Header.FeatureCallOut>
                <Header.Text>
                    Treine com o Método Científico e Personalizado que tem Transformado a Vida de Mais de 5 Mil Alunos!
            </Header.Text>
            </Header.Feature>
            <Header.Signin />
        </Header>
    )
}