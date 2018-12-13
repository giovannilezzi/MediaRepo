import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import history from './history'
import store from './Store/AppStore'
import MediaRepoContainer from "./Containers/MediaRepoContainer";
import ListImageContainer from "./Containers/ListImageContainer";

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route exact path="/" component={MediaRepoContainer} />
                <Route  path="/Images" component={ListImageContainer}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'),
);
