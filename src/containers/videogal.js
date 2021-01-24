import React from 'react';
import { Video, Player, Depo } from '../componentes'

export default function GalleryContainer() {


    return (<>
        <Depo>
            <Video.Subtitle>
                Depoimentos e Evoluções
            </Video.Subtitle>
        </Depo>
        <Video>
            <Video.Section>
                <Player>
                    <Player.Image src="alesandra" ></Player.Image>
                    <Player.Video src="videos/AlessandraNegreiros.mp4" />
                </Player>
            </Video.Section>
            <Video.Section>
                <Player>
                    <Player.Image src="goretti" />
                    <Player.Video src="videos/GorettiRamiro.mov" />
                </Player>
            </Video.Section>
            <Video.Section>
                <Player>
                    <Player.Image src="larissa" />
                    <Player.Video src="videos/LarissaAssuncao.mp4" />
                </Player>
            </Video.Section>
        </Video>
        <Video>
            <Video.Section>
                <Player>
                    <Player.Image src="matheus" />
                    <Player.Video src="videos/Matheus.mp4" />
                </Player>
            </Video.Section>
            <Video.Section>
                <Player>
                    <Player.Image src="rafa" />
                    <Player.Video src="videos/RafaelaVeloso.mov" />
                </Player>
            </Video.Section>
        </Video>

    </>
    )
}