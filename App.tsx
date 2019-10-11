import React from 'react';
import AppContainer from './app/screens/Router';
import { Provider } from 'react-redux';
import store from './app/store';

export default function App() {
  return <Provider store={store}><AppContainer /></Provider>
}

