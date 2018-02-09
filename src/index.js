import React from 'react';
import App from './app';
import { render } from 'react-dom';
import '../sass/main.scss';

/* style={"background-color" + (this.props.importance == 1 ? "red" : "orange")} */

render(<App />, document.querySelector('#root'));