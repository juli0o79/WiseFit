import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, ButtonHead, Overlay, Inner, Close, Video, Image } from './styles/player';

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}


Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
      <Overlay onClick={() => setShowPlayer(false)} data-testid="player" {...restProps}>
        <Inner>

          <Video id="Camilao player" controls>
            <source src={src} type="video/mp4" />
          </Video>
          <Close />
        </Inner>
      </Overlay>,
      document.body
    )
    : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <Button onClick={() => setShowPlayer((showPlayer) => !showPlayer)} {...restProps}>
      Assista
    </Button>
  );
};

Player.Image = function PlayerImage({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <Image onClick={() => setShowPlayer((showPlayer) => !showPlayer)} {...restProps}>
      <img src="images/thumb/playbutton.png" alt="play" />
    </Image>
  );
};

Player.ButtonHead = function PlayerButtonHead({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <ButtonHead onClick={() => setShowPlayer((showPlayer) => !showPlayer)} {...restProps}>
      Assistir
    </ButtonHead>
  );
};