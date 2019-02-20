import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store/AppStore';
import $ from 'jquery'
import './style.css'
import AppContainer from "./Containers/AppContainer";


// Courtesy of https://feathericons.com/
const Icon = () => <i className='icon fa fa-plug'/>;

class HelloWorldPlugin {
    initialize(registry)
    {
        registry.registerMainMenuAction (
            "MediaRepo",
            () => {
                $('#post-list').css("overflow-y", "scroll");
                $('#create_post').css("display", "none")
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
                        <AppContainer/>
                    </Provider>,
                    document.getElementById('post-list'),
                )
            },
            <Icon />,
        );
    }
}

window.registerPlugin('com.mattermost.webapp-mediarepo', new HelloWorldPlugin());
