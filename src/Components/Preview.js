import React from 'react';

class ListImage extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        let file = ""
        if (this.props.file && !this.props.isLoading) {
            file =
                    <iframe className="File" id={this.props.file.Id} src={this.props.file.MimeType+this.props.file.File} allowFullScreen>
                        {this.props.file.Name + this.props.file.MimeType}
                    </iframe>
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

export default ListImage;
