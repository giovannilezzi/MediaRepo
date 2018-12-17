import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store/AppStore';
import MediaRepoContainer from './Containers/MediaRepoContainer'
import $ from 'jquery'

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
                ReactDOM.render(
                    <Provider store={store}>
                        <div>
                            <MediaRepoContainer/>
                        </div>
                    </Provider>,
                    document.getElementById('post-list')
                );
            },
            <Icon />,
        );
    }
}

window.registerPlugin('com.mattermost.webapp-mediarepo', new HelloWorldPlugin());
