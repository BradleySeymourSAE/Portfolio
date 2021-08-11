import { createGlobalStyle } from 'styled-components/macro';

const StyleSheet = createGlobalStyle`

  *, ::before, ::after {
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }

  *::-webkit-scrollbar-track {
    background-color: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-image: linear-gradient(rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)),
      linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
    background-blend-mode: multiply, screen;
    background-color: rgba(204, 204, 204, 0.5);
    border-radius: 5px;
  }


  meta {
    display: none;
  }

  html {
    color: rgb(34,34,34);
    font-size: 1em;
    line-height: 1.25;
    touch-action: manipulation;
     user-select: none;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  html,
  body {
    margin: 0;
    height: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    font-family: ${(props) => props.theme.font};
  }

  body {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: ${({ theme }) => theme.colors.alphaWhite20};
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
  }

[type=checkbox]:not(:checked),
  [type=checkbox]:checked {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

[type=checkbox] {
  /* checkbox aspect */
}
[type=checkbox] + span:not(.lever) {
  position: relative;
  padding-left: 35px;
  cursor: default;
  display: inline-block;
  height: 25px;
  line-height: 25px;
  font-size: 1rem;
  user-select: none;
}
[type=checkbox] + span:not(.lever):before, [type=checkbox]:not(.filled-in) + span:not(.lever):after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  z-index: 0;
  border: 2px solid rgb(45,45,45);
  border-radius: 1px;
  margin-top: 3px;
  transition: 0.2s;
}
[type=checkbox]:not(.filled-in) + span:not(.lever):after {
  border: 0;
  transform: scale(0);
}
[type=checkbox]:not(:checked):disabled + span:not(.lever):before {
  border: none;
  background-color: rgba(0, 0, 0, 0.42);
}

[type=checkbox]:checked + span:not(.lever):before {
  top: -4px;
  left: -5px;
  width: 12px;
  height: 22px;
  border-top: 2px solid transparent;
  border-left: 2px solid transparent;
  border-right: 2px solid rgb(130,50,255);
  border-bottom: 2px solid rgb(130,50,255);
  transform: rotate(40deg);
  backface-visibility: hidden;
  transform-origin: 100% 100%;
}
[type=checkbox]:checked:disabled + span:before {
  border-right: 2px solid rgba(0, 0, 0, 0.42);
  border-bottom: 2px solid rgba(0, 0, 0, 0.42);
}


    #application {
      height: 100%;
      width: 100%;
      background: #fff;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: cover;
      box-shadow: ${(props) => props.theme.shadow.depth2};
      display: flex;
      flex-direction: column;
      position: relative;
      z-index: 1;


`;

export { StyleSheet };
export default StyleSheet;
