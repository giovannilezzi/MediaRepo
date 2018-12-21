import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store/AppStore'
import MediaRepoContainer from "./Containers/MediaRepoContainer";
import './style.css'
import Menu from "./Components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";



var link = $('<link/>', {
    rel: 'stylesheet',
    type:'text/css',
    href: 'https://use.fontawesome.com/releases/v5.5.0/css/all.css',
    integrity: 'sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU',
    crossorigin: 'anonymous'
})
$('head').prepend(link);

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
