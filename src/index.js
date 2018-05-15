import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

import App from './app';
import counter from './redux/reducer';
import actions from './redux/action';

const store = createStore(counter);

const render = () => ReactDOM.render(
    <App 
        value={store.getState()}
        onIncrement={() => actions.increase(store)}
        onDecrement={() => actions.decrease(store)}
    />,
    document.getElementById('root')
);

render()
store.subscribe(render);