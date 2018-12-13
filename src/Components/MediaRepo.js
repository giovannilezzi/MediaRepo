import React from 'react';
import  '../style.css';
import ReactDOM from "react-dom";
import Provider from "react-redux/es/components/Provider";
import store from "../Store/AppStore";
import ListFileContainer from "../Containers/ListFileContainer";


class MediaRepo extends React.Component{

    constructor(props) {
        super(props)
    }


    library(){
        ReactDOM.render(
            <Provider store={store}>
                <div>
                    <ListFileContainer/>
                </div>
            </Provider>,
            document.getElementById('root'),
        );
    }

    render() {
        return (
            <section className="section">
                <button onClick={this.library}> Go to Library </button>
                <label className="custom-file-upload">
                    <input type="file" onChange={this.props.handleFileSelect} />
                    <i className="fa fa-cloud-upload"></i> Upload File
                </label>

                <br/>

                <object className="files" data={this.props.files} />
            </section>
        );
    }
}

export default MediaRepo;

