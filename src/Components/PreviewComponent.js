import React from 'react';

class PreviewComponent extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        let file = ""
        if (this.props.file && !this.props.isLoading) {
            file =      <object className="File" id={this.props.file.Id} data={this.props.file.MimeType+this.props.file.File}>
                            {this.props.file.Name + this.props.file.MimeType}
                        </object>

        }
        else
            file = <h3 className="loading-indicator">Loading ...</h3>

        return (
            <div class= "myFile">
                <div className="myOpacity"></div>
                <div class="centerFile">
                    {file}
                </div>
            </div>
        )
    }
}

export default PreviewComponent;
