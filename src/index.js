import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import App from './components/App';
import rootReducer from './rootReducer';

let middleware = [thunk];
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(rootReducer)}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
