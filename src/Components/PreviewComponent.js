import React from 'react';
import ReactDOM from "react-dom";
import Provider from "./UploadFileComponent";
import store from "../Store/AppStore";

class PreviewComponent extends React.Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.getElementById("opacitaPreview").style.marginTop = document.getElementById("post-list").scrollTop + "px";
        //document.getElementsByClassName("myOpacityCalendar")[0].style.height = Math.max( document.body.scrollHeight) + "px"
        document.getElementById("post-list").style.overflowY = "hidden"
        document.getElementsByClassName("myOpacityPreviewFile")[0].style.marginTop = document.getElementById("post-list").scrollTop + "px"
    }

    split = (mimeType) => {
        return mimeType.substring(
            mimeType.lastIndexOf(":") + 1,
            mimeType.lastIndexOf(";")
        )
    }

    closeFile = () => {
        this.props.closeFile()
    }

    render() {
        let file = ""
        if (this.props.file && !this.props.isLoading) {
            if (this.props.file.MimeType == 'data:image/png;base64,') {
                file =      <object className="Image" id={this.props.file.Id} data={this.props.file.MimeType+this.props.file.File} type={this.split(this.props.file.MimeType)}>
                </object>
            }else file = <object className="File" id={this.props.file.Id} data={this.props.file.MimeType+this.props.file.File} type={this.split(this.props.file.MimeType)}>
            </object>

        }
        else
            file = <h3 className="loading-indicator">Loading ...</h3>
        return (
            <div className= "myFile">
                <div className="myOpacityPreviewFile"></div>
                <div id="opacitaPreview" className="centerFile">
                    <div className="close_file">
                        <i className="fas fa-times-circle fa-3x" onClick={this.closeFile}></i>
                    </div>
                    {file}
                </div>
            </div>
        )
    }
}

export default PreviewComponent;
