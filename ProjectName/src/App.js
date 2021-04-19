import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers'
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigator from './Navigator'
import Toast from 'react-native-toast-message';

const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware) 

const App =()=> {
  return (
    <>
      <Provider store={store}>
        <SafeAreaView style={{flex:1}} edges={['right', 'top', 'left']}>            
          <Navigator/>
        </SafeAreaView>
      </Provider>
      <Toast 
        ref={(ref) => Toast.setRef(ref)}                 
        />
    </>
  )
}
export default App

