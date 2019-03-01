import React, { Component } from 'react';

class EditFileComponent extends Component {

    componentDidMount() {
        document.getElementById("opacitaEditFile").style.marginTop = document.getElementById("post-list").scrollTop + "px";
        //document.getElementsByClassName("myOpacityCalendar")[0].style.height = Math.max( document.body.scrollHeight) + "px"
        document.getElementById("post-list").style.overflowY = "hidden"
        document.getElementsByClassName("myOpacityCalendarEditEvent")[0].style.marginTop = document.getElementById("post-list").scrollTop + "px"
    }

    handleEditFile = () => {
        const requestBody = {
            Id: this.props.file.Id,
            Name: this.getName.value
        }
        this.props.handleEditFile(requestBody)
    }

    closeEditFile = () => {
        this.props.closeEditFile()
    }

    render() {
        return (
            <div className="myPost">
                <div className="myOpacityCalendarEditEvent"></div>
                <div id="opacitaEditFile" className="myFormMedia ">
                   <input className="insertEdit" required type="text" ref={(input) => this.getName = input}
                          defaultValue={this.props.file.Name} placeholder="Enter new File Name" /><br /><br />

                    <button className="  button2" onClick={this.handleEditFile} >
                        <span>Save Edit </span>
                    </button>
                    <button className="  button3" onClick={this.closeEditFile}>
                        <span>Close</span>
                    </button>

                </div>
            </div>
        );
    }
}
export default EditFileComponent


