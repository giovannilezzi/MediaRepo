import React from 'react';
import $ from 'jquery'

class ListImage extends React.Component{

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.asyncCallAllFiles('Town Square')
    }

    render() {

        let listItems = ""
        if (this.props.listFiles && !this.props.isLoading) {
            listItems =
                this.props.listFiles.map((image) =>
                    <object className="File" key={image.Id}  width="800" height="400">
                        {image.Name + image.MimeType + image.Channel}
                    </object>
                )
        }
        else
            listItems = <h3 className="loading-indicator">Loading ...</h3>

        return (
            <div >
                <h1 id='post-list'>TownSquare</h1>
                {listItems}
            </div>
        )
    }
}

export default ListImage;

/*data={image.MimeType+image.File}*/
