import { createGlobalStyle } from 'styled-components';

import RobotoBold from './Roboto-Bold.ttf';
import RobotoRegular from './Roboto-Regular.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBold}) format('truetype');
    font-weight: bold;
    font-style: bold;
  }
  & * {
  font-family: Roboto;
  }
`;
