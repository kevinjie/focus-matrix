import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import Matrix from './view/matrix'
import Panel from './view/panel'

const App = () => {
  return (
    <Provider store={store}>
      <div id="container">
        <Matrix />
        <Panel />
      </div>
    </Provider>
  )
}

export default App;
