import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    * , *::before, *::after {
        box-sizing: border-box;
        font-family: sans-serif;
    }
`;

export default GlobalStyles;
