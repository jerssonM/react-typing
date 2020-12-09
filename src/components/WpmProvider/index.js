import PropTypes from 'prop-types';
import React, { createContext } from 'react';

const WpmContext = createContext();
const initialState = { wpm: 0, errors: 0, errorsList: [] };

const WpmProvider = ({ children }) => (
  <WpmContext.Provider value={{ value: initialState }}>
    {children}
  </WpmContext.Provider>
);

WpmProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.number,
    PropTypes.element
  ])
};

export default WpmProvider;
