import React from 'react';
import ReactDOM from 'react-dom';

const App = (props) => (
    <div>Hello , {props.name} !!!</div>
  );

App.propTypes = {
  name: React.PropTypes.string,
}  

App.defaultProps = {
  name: 'Zuck',
}

ReactDOM.render(<App />, document.getElementById('app'));