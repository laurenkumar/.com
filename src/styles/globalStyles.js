import { css } from '@emotion/core'

export const GlobalStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Crimson+Text|Montserrat:900&display=swap');

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default padding */
  ul[class],
  ol[class] {
    padding: 0;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img {
    max-width: 100%;
    display: block;
  }

  /* Natural flow and rhythm in articles by default */
  article > * + * {
    margin-top: 1em;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
    padding: 1rem;
    border: 2px solid currentColor;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* END RESET */

  hr {
    margin: 0;
    border: 0;
    height: 2px;
    background: currentColor;
    width: 100%;
  }

  .knockout {
    line-height: 1;
    font-size: inherit !important;
    color: currentColor;
    padding: 0;
    margin: 0;
    -webkit-text-stroke: 2px currentColor;
    -webkit-text-fill-color: transparent;
  }

  .buttons {
    a {
      padding: 1rem;
      border: 2px solid currentColor;
    }
  }
`

export default GlobalStyles
