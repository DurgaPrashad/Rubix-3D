import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

ReactDOM.render(
  <div>
    <App />
    <a className="github-fork-ribbon"
      href="https://github.com/JithuTholoor/RubixCube"
      data-ribbon="Fork me on GitHub" title="Fork me on GitHub">3*3</a>
  </div>,
  document.getElementById('root')
);
