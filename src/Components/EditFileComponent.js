import React, { Component } from 'react';

class EditFileComponent extends Component {

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
                <div className="myOpacity"></div>
                <div className="myFormMedia ">
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


