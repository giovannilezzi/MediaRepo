import React from 'react';
import '../style.css'


class ListImage extends React.Component{

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.asyncCallAllImages()
    }

    render() {

        let listItems = ""
        if (this.props.listFiles && !this.props.isLoading) {
            listItems =
                this.props.listFiles.map((image) =>
                    <object className="File" key={image.Id} data={image.MimeType+image.File} width="800" height="400">
                        {image.Name + image.MimeType}
                    </object>
                )
        }
        else
            listItems = <h3 className="loading-indicator">Loading ...</h3>

        return (
            <div>
                {listItems}
            </div>
        )
    }
}

export default ListImage;

