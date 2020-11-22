import React from 'react';
import Panel from './components/Panel';
import { propTypes, defaultProps } from './components/Panel/propTypes';

const TypingComponent = ({ ...props }) => <Panel {...props} />;

Panel.propTypes = { ...propTypes };

Panel.defaultProps = { ...defaultProps };

export default TypingComponent;
