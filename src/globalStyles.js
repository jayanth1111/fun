import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    margin: 0;
    padding: 0;
  }
`;

export const EqualMargin = styled.div`
    width: 1500px;
    max-width: 1500px;
    margin: 0 auto;
`;
 
export default GlobalStyle;