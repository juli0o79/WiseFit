import React from 'react';
import { Depo } from '../componentes'


export default function DepoContainer() {

    return (
        <Depo>
            <Depo.HouseImage src="house">

                <Depo.Group> <Depo.Promotion>
                    Casa ou academia? <Depo.Span>Faça os dois</Depo.Span>!
                    </Depo.Promotion>
                    <Depo.Text>
                        Acabou a dúvida! Agora você treinar em casa e na academia,
                        com as fichas de séries exclusivas que serão desenvolvidas sob medida para você.
                        Se você prefere usar os aparelhos da academia, não tem problema.
                        Você receberá a sua ficha, entenderá como são os exercícios e potencializará
                        os seus resultados.
                    </Depo.Text>
                </Depo.Group>
            </Depo.HouseImage>
            <Depo.Group>
                <Depo.Section>
                    <Depo.Promotion>
                        NADA DE <Depo.Span>OBRIGAÇÃO</Depo.Span>. AQUI, SEU TREINO SERÁ UM <Depo.Span>HÁBITO</Depo.Span>.
                </Depo.Promotion>
                </Depo.Section>

                <Depo.Button>
                    Quero Começar
                </Depo.Button>
            </Depo.Group>

            <Depo.Group>
                <Depo.Promotion>
                    E cada vez mais pessoas estão cuidando da saúde com o <Depo.Span>Camilão Wise Fit</Depo.Span>!
                </Depo.Promotion>
                <Depo.GroupSlide>
                </Depo.GroupSlide>
                <Depo.Button>
                    Quero Começar
                </Depo.Button>
                <Depo.Section>
                    <Depo.Text>
                        Nunca mais sentirá desmotivação,aqui você aprenderá
                        que os treinos não são uma obrigação que você se sente forçada a fazer.
                        Aqui você irá cuidar da sua saúde com gostinho que quero mais, criando um hábito comum na sua vida.
                </Depo.Text>
                </Depo.Section>
                <Depo.Group>
                    <Depo.GroupImage src="determinacao">
                        <Depo.SideGroup>
                            <Depo.Promotion>
                                O QUE FAZ MILHARES DE PESSOAS ESCOLHEREM A <Depo.Span>CAMILÃO WISE FIT</Depo.Span>?
                        </Depo.Promotion>
                            <Depo.Text>
                                Personal Camila Dantas - Camilão <br />
                                Com quase 20 anos de experiência como professora,
                                possui treinamentos com qualidade, não são apenas exercícios,
                                são séries com base científica e conteúdo direcionado a saúde do sistema músculo-esquelético.
                        </Depo.Text>
                        </Depo.SideGroup>
                    </Depo.GroupImage>
                </Depo.Group>
                <Depo.Group>
                    <Depo.Section>
                        <Depo.Promotion>
                            A primeira mensalidade é <Depo.Span>gratuita</Depo.Span>  em qualquer um dos planos
                        </Depo.Promotion>
                    </Depo.Section>
                </Depo.Group>

            </Depo.Group>
            <Depo.Signin />

        </Depo>
    )
}