import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store/AppStore'
import MediaRepoContainer from "./Containers/MediaRepoContainer";

ReactDOM.render(
    <Provider store={store}>
        <div>
            <MediaRepoContainer/>
        </div>
    </Provider>,
    document.getElementById('root'),
);
