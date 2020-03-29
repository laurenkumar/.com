import randomCombo from 'random-a11y-combo'

const [paletteBackground, paletteColor] = randomCombo()

function LightenDarkenColor(col, amt) {
  var usePound = false

  if (col[0] === '#') {
    col = col.slice(1)
    usePound = true
  }

  var num = parseInt(col, 16)

  var r = (num >> 16) + amt

  if (r > 255) r = 255
  else if (r < 0) r = 0

  var b = ((num >> 8) & 0x00ff) + amt

  if (b > 255) b = 255
  else if (b < 0) b = 0

  var g = (num & 0x0000ff) + amt

  if (g > 255) g = 255
  else if (g < 0) g = 0

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}

var lightHighlight = LightenDarkenColor('#fff8e7', 5)
var lightShadow = LightenDarkenColor('#fff8e7', -40)
var darkShadow = LightenDarkenColor('#140D00', 20)
var randomHighlight = LightenDarkenColor(paletteBackground, 40)
var randomShadow = LightenDarkenColor(paletteBackground, -40)

export default {
  sizes: {
    maxWidth: '1280px',
    maxWidthCentered: '650px',
  },
  responsive: {
    small: '35em',
    medium: '50em',
    large: '70em',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    background: '#fff8e7',
    text: '#140D00',
    primary: '#140D00',
    secondary: lightHighlight,
    tertiary: '#f3f3f3',
    highlight: '#5b8bf7',
    shadow: lightShadow,
    modes: {
      light: {
        background: '#fff8e7',
        text: '#140D00',
        primary: '#140D00',
        secondary: lightHighlight,
        tertiary: '#f3f3f3',
        highlight: '#5b8bf7',
        shadow: lightShadow,
      },
      dark: {
        background: '#140D00',
        text: '#fff8e7',
        primary: '#fff8e7',
        secondary: darkShadow,
        tertiary: '#140D00',
        highlight: '#5b8bf7',
        shadow: darkShadow,
      },
      random: {
        background: paletteBackground,
        text: paletteColor,
        primary: paletteColor,
        secondary: randomHighlight,
        muted: paletteColor,
        shadow: randomShadow,
      },
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      color: 'text',
    },
    h1: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
    h2: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
    },
    h3: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
    },
    h4: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h5: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
    h6: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
    },
    p: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      fontSize: 2,
      mb: 3,
    },
    ul: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      fontSize: 2,
      mb: 3,
    },
    ol: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      fontSize: 2,
      mb: 3,
    },
    li: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      fontSize: 2,
      mb: 3,
    },
    a: {
      color: 'inherit',
      fontWeight: 'heading',
      textDecoration: 'none',
    },

    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
}
