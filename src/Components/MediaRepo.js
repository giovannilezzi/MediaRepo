import React from 'react';
import ReactDOM from "react-dom";
import Provider from "react-redux/es/components/Provider";
import store from "../Store/AppStore";
import ListFileContainer from "../Containers/ListFileContainer";
import { Button } from 'react-bootstrap';
import $ from 'jquery'

class MediaRepo extends React.Component{

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
                <h1 className="titolo">Upload your file</h1>
                <h2 id = 'post-list2'>Town Square</h2>

                <label className="fas fa-cloud-upload-alt fa-9x custom-file-upload " >
                    <input type="file" onChange={this.handleFileSelect} />
                </label>



            </section>
        );
    }
}

export default MediaRepo
