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
                <div className="myForm">
                   <input required type="text" ref={(input) => this.getName = input}
                          defaultValue={this.props.file.Name} placeholder="Enter new File Name" /><br /><br />
                   <button onClick={this.handleEditFile}> Update </button>
                   <button onClick={this.closeEditFile}> Close </button>
                </div>
            </div>
        );
    }
}
export default EditFileComponent


