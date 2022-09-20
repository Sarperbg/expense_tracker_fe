import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import rootReducer from './store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux'

const store = createStore(rootReducer, applyMiddleware(thunk))


ReactDOM.render(
    <Provider store={store}>
        <App />,
    </Provider>,
    document.getElementById("root"));

