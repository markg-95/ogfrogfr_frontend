    // src/styles/fonts.js
    import { createGlobalStyle } from 'styled-components';
    import FuzzyBubbles_Bold from './FuzzyBubbles-Bold.ttf';
    import FuzzyBubbles_Reg from './FuzzyBubbles-Regular.ttf';

    export const GlobalFontStyles = createGlobalStyle`
      @font-face {
        font-family: 'FuzzyBubbles';
        src: url(${FuzzyBubbles_Bold}) format('truetype');
        font-weight: normal;
        font-style: normal;
      }
    `;