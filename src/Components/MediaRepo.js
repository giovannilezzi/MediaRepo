import React from 'react';
import  '../style.css';

class MediaRepo extends React.Component{

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="section" id = "answerform">
                <label className="custom-file-upload">
                    <input type="file" onChange={this.props.handleFileSelect} />
                    <i className="fa fa-cloud-upload"></i> Upload File
                </label>
                <br/>
                <object className="files" data={this.props.files} />
            </div>
        );
    }
}

export default MediaRepo;

