import ReactDOM from "react-dom";
import Provider from "react-redux/es/components/Provider";
import store from "../Store/AppStore";
import ListFileContainer from "../Containers/ListFileContainer";
import React from "react";
import MediaRepoContainer from "../Containers/MediaRepoContainer";
import $ from 'jquery'

class Menu extends React.Component{

    constructor(props) {
        super(props);
    }

    upload = ( ) =>{
        if ($("#upload").attr('class') != 'active'){
            $("#library").removeClass("active");
            $("#upload").addClass("active");
        }
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
        if ($("#library").attr('class') != 'active'){
            $("#upload").removeClass("active");
            $("#library").addClass("active");
        }
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
                <li className="menuover"><a id='upload' className="active amenuover" href="#upload" onClick={this.upload}>Upload</a></li>
                <li  className="menuover"><a id='library' className="amenuover" href="#library" onClick={this.library}>Library</a></li>
                <li className="right"><a href="#about">About</a></li>
            </ul>
        )
    }
}

export default Menu;



