import React, { Component } from 'react';

class EditFileComponent extends Component {

    handleEditFile = () => {
        const requestBody = {
            Id: this.props.file.Id,
            Name: this.getName.value
        }
        this.props.handleEditFile(requestBody)
    }

    render() {
        return (
            <div key={this.props.file.Id} className="post">
                <form className="form" onSubmit={this.handleEditFile}>
                    <input required type="text" ref={(input) => this.getName = input}
                           defaultValue={this.props.file.Name} placeholder="Enter new File Name" /><br /><br />

                    <button>Update</button>
                </form>
            </div>
        );
    }
}
export default EditFileComponent


