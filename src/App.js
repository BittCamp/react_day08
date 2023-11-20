import React from 'react';
import Color from './components/Color';
import Count from './components/Count';
import Animal from './components/Animal';

const App = () => {
  return (
    <div>
      <Color />
      <hr />  
      <Count />
      <hr />  
      <Animal/>
    </div>
  );
};

export default App;