import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//---------------------------
import { Provider } from 'react-redux';
import rootReducer from './store';
// import { createStore } from 'redux'; - deprecated, 실행은 된다.
import { legacy_createStore as createStore } from 'redux'; //store라는 저장장소를 만드는거.
import { composeWithDevTools } from 'redux-devtools-extension'; //리덕스 개발자 도구

// const store = createStore(rootReducer); //store라는 저장장소를 만드는거.
const store = createStore(rootReducer, composeWithDevTools); // store인데 개발자 도구도 만들어주게 하는거.
//---------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ store }>{/*  <App/> 후손까지  store를 사용해도 된다.  */}
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
