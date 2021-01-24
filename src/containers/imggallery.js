import React from 'react';
import { Gallery, Depo } from '../componentes';

const transform = [
    "transformum",
    "transformdois",
    "transformtres"
]

export default function ImageGalleryContainer() {
    return (<>
        <Depo>
            <Depo.Group>
                <Depo.GroupImage src="bg-left">
                    <Depo.SideGroupRight>
                        <Depo.Text>
                            Transformação na vida de alunos que vão além de fotos de antes e depois nas redes sociais, com pessoas que renovaram as suas forças e até mesmo venceram a depressão.
                    </Depo.Text>
                    </Depo.SideGroupRight>
                </Depo.GroupImage>
            </Depo.Group>
        </Depo>
        <Gallery>
            <Gallery.Section>
                <Gallery.Image src={transform[0]}>
                </Gallery.Image>
            </Gallery.Section>
            <Gallery.Section>
                <Gallery.Image src={transform[1]}>
                </Gallery.Image>
            </Gallery.Section>
            <Gallery.Section>
                <Gallery.Image src={transform[2]}>
                </Gallery.Image>
            </Gallery.Section>
        </Gallery>
    </>
    )
}