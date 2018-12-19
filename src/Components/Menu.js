import ReactDOM from "react-dom";
import Provider from "react-redux/es/components/Provider";
import store from "../Store/AppStore";
import ListFileContainer from "../Containers/ListFileContainer";
import React from "react";
import MediaRepoContainer from "../Containers/MediaRepoContainer";


class Menu extends React.Component{

    constructor(props) {
        super(props);
    }

    upload = ( ) =>{
        ReactDOM.render(
            <Provider store={store}>
                <div>
                    <MediaRepoContainer/>
                </div>
            </Provider>,
            document.getElementById('page'),
        );
    }


    library = ( ) =>{
        ReactDOM.render(
            <Provider store={store}>
                <div>
                    <ListFileContainer/>
                </div>
            </Provider>,
            document.getElementById('page'),
        );
    }

    render() {
        return (
            <ul className="topnav">
                <li><a className="active" href="#upload" onClick={this.upload}>Upload</a></li>
                <li><a href="#library" onClick={this.library}>Library</a></li>
                <li className="right"><a href="#about">About</a></li>
            </ul>
        )
    }
}

export default Menu;



