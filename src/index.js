import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store/AppStore'
import MediaRepoContainer from "./Containers/MediaRepoContainer";
import './style.css'
import Menu from "./Components/Menu";

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Menu/>
        </div>

        <div id="page">
            <MediaRepoContainer/>
        </div>

    </Provider>,

    document.getElementById('root'),
);
