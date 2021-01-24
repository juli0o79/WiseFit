import React from 'react';
import {Video} from '../componentes'

const slideImages = [
    'videos/AlessandraNegreiros.mp4',
    'videos/LarissaAssuncao.mp4',
    'videos/GorettiRamiro.mov',
  ];


export default function PlayerContainer(){

    return(
    <Video>
        <Video.Section>
            <Video.Player src={slideImages[0]}/>
        </Video.Section>
    </Video>
    )
}