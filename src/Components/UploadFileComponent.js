import React from 'react';
import ReactDOM from "react-dom";
import Provider from "react-redux/es/components/Provider";
import store from "../Store/AppStore";
import ListFileContainer from "../Containers/ListFileContainer";
import { Button } from 'react-bootstrap';
import $ from 'jquery'

class UploadFileComponent extends React.Component{

    constructor(props) {
        super(props)
    }


    library = () => {
        ReactDOM.render(
            <Provider store={store}>
                <div>
                    <ListFileContainer/>
                </div>
            </Provider>,
            document.getElementById('page'),
        );
    }

    handleFileSelect = (event) => {
        this.props.handleFileSelect(event, $('#post-list2').text())
        //su mattermost:   this.props.handleFileSelect(event, $('#channelHeaderDropdownButton').text())
        //in locale:   this.props.handleFileSelect(event, $('#post-list2').text())
    }

    render() {
        return (
            <section className="section">
                <h2 id = 'post-list2'>Town Square</h2>
                <div className="upload-btn-wrapper">
                    <i className=""></i>
                    <label className="up fas fa-plus">
                          New
                        <input input type="file"  onChange={this.handleFileSelect}/>
                    </label>

                </div>

            </section>
        );
    }
}

export default UploadFileComponent
