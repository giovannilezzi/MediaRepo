import React from 'react';

class Preview extends React.Component{

    constructor(props) {
        super(props);
        console.log(this.props)
    }

    render() {
        let file = ""
        if (this.props.file && !this.props.isLoading) {
            file =
                    <object className="File" id={this.props.file.Id} data={this.props.file.MimeType+this.props.file.File}>
                        {this.props.file.Name + this.props.file.MimeType}
                    </object>
        }
        else
            file = <h3 className="loading-indicator">Loading ...</h3>

        return (
            <div>
                {file}
            </div>
        )
    }
}

export default Preview;
