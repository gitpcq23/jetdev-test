import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {AppNavigator} from './src/navigators/app-navigator';
import thunk from 'redux-thunk';
import {applyMiddleware, legacy_createStore as createStore} from 'redux';

import favoriteReducer from './src/redux/root-reducer';

export const store = createStore(favoriteReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
