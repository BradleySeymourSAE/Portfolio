import theme from 'components/web-ui/theme';


export default {
  ...theme,
  colors: {
    ...theme.colors,
    alphaBlack10: 'rgba(0, 0, 0, .1)',
    alphaBlack20: 'rgba(0, 0, 0, .2)',
    alphaBlack30: 'rgba(0, 0, 0, .3)',
    alphaBlack40: 'rgba(0, 0, 0, .4)',
    alphaBlack50: 'rgba(0, 0, 0, .5)',
    alphaBlack60: 'rgba(0, 0, 0, .6)',
    alphaBlack70: 'rgba(0, 0, 0, .7)',
    alphaBlack80: 'rgba(0, 0, 0, .8)',
    alphaBlack90: 'rgba(0, 0, 0, .9)',
    alphaWhite10: 'rgba(255, 255, 255, .1)',
    alphaWhite20: 'rgba(255, 255, 255, .2)',
    alphaWhite30: 'rgba(255, 255, 255, .3)',
    alphaWhite40: 'rgba(255, 255, 255, .4)',
    alphaWhite50: 'rgba(255, 255, 255, .5)',
    alphaWhite60: 'rgba(255, 255, 255, .6)',
    alphaWhite70: 'rgba(255, 255, 255, .7)',
    alphaWhite80: 'rgba(255, 255, 255, .8)',
    alphaWhite90: 'rgba(255, 255, 255, .9)',
    alphaPurple90: 'rgba(198, 83, 255, .9)',
    black: '#000000',
    white: '#FFFFFF',
    messages: {
      notice: '#FFAB00',
      error: '#DE3736'
    },
  },
  cardOffset: {
    top: '0px',
    bottom: '0px',
  },
  cardForm: {
    headerTopOffset: '0px',
    headerHeight: '55px'
  },
  fonts: {
    // body: '"Poppins", "Quicksand", sans-serif',
    header: `'Montserrat', sans-serif`,
    family: {
      poppins: `'Poppins', 'Quicksand', sans-serif`,
      montserrat: `Montserrat', sans-serif`,
      helvetica: `'Helvetica', sans-serif`,
      quicksand: `'Quicksand', 'Montserrat', sans-serif`,
    },
    weights: {
      light: 300,
      normal: 400,
      regular: 450,
      bold: 500,
      bolder: 550,
      heavy: 600,
    },
    sizes: {
      small: '1em',
      regular: '1.05em',
      large: '1.15em',
    },
  },
  viewport: {
    w: 375,
    h: 667,
    breakpoints: {
      w: 414 + 120,
      h: 897,
    },
  },
};
