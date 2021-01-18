import React from 'react';
import GlobalFonts from './fonts';
import TypingComponent from './components/TypingComponent';

export default (props) => (
  <>
    <GlobalFonts />
    <TypingComponent {...props} />
  </>
);
