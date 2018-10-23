import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';


export default class App extends React.Component {

  componentWillMount(){
    const config = {
      apiKey: "AIzaSyCXS2Y1xJhkUrhhFHVoFRat5yfBz8Gww4E",
      authDomain: "manager-67283.firebaseapp.com",
      databaseURL: "https://manager-67283.firebaseio.com",
      projectId: "manager-67283",
      storageBucket: "manager-67283.appspot.com",
      messagingSenderId: "405336041458"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
          <Router/>
      </Provider>
    );
  }
}
