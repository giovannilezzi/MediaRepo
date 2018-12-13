import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store/AppStore';
import MediaRepoContainer from './Containers/MediaRepoContainer'
import ListImageContainer from "./Containers/ListImageContainer";

// Courtesy of https://feathericons.com/
const Icon = () => <i className='icon fa fa-plug'/>;

class HelloWorldPlugin {
    initialize(registry)
    {
        registry.registerRootComponent(ListImageContainer)
        registry.registerChannelHeaderButtonAction(
            // icon - JSX element to use as the button's icon
            <Icon />,
            // action - a function called when the button is clicked, passed the channel and channel member as arguments
            // null,
            () => {
                ReactDOM.render(
                    <Provider store={store}>
                        <MediaRepoContainer/>
                    </Provider>,
                    document.getElementById('post-list'),
                );
            },
            // dropdown_text - string or JSX element shown for the dropdown button description
            "MediaRepo",
        );
    }
}

window.registerPlugin('com.mattermost.webapp-mediarepo', new HelloWorldPlugin());
