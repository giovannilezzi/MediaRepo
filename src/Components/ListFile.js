import React from 'react';
import '../style.css'
import $ from 'jquery'
import ReactDOM from 'react-dom'


class ListFile extends React.Component{

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.asyncCallAllImages()
    }

    componentDidMount(){
        var node = $(ReactDOM.findDOMNode(this))
        console.log(node)
        console.log(ReactDOM.findDOMNode(this).getElementsByClassName('image'))
        var fileType = ReactDOM.findDOMNode(this).getElementsByClassName('pdf')
        for (var i = 0; i < fileType.length; i++) {
            console.log(fileType[i])
        }
    }

    render() {

        let listImage = [];
        if (this.props.listFiles && !this.props.isLoading) {

            for(var i = 0; i<this.props.listFiles.length; i++){

                if(this.props.listFiles[i].MimeType == 'data:image/png;base64,' ) {
                    listImage.push(
                        <li className="image" key={this.props.listFiles[i].Id} data={this.props.listFiles[i].MimeType+this.props.listFiles[i].File} width="800" height="400">
                            {this.props.listFiles[i].Name + this.props.listFiles[i].MimeType}
                        </li>
                    )
                }
                else if(this.props.listFiles[i].MimeType == 'data:application/pdf;base64,' ) {
                    listImage.push(
                        <li className="pdf" key={this.props.listFiles[i].Id} data={this.props.listFiles[i].MimeType+this.props.listFiles[i].File} width="800" height="400">
                            {this.props.listFiles[i].Name + this.props.listFiles[i].MimeType}
                        </li>
                    )
                }

                else if(this.props.listFiles[i].MimeType == 'data:text/plain;base64,' ) {
                    listImage.push(
                        <li className="file" key={this.props.listFiles[i].Id} data={this.props.listFiles[i].MimeType+this.props.listFiles[i].File} width="800" height="400">
                            {this.props.listFiles[i].Name + this.props.listFiles[i].MimeType}
                        </li>
                    )
                }

            }

        }
        else
            listImage = <h3 className="loading-indicator">Loading ...</h3>


        return (
            <div>
                {listImage}
            </div>
        )
    }
}

export default ListFile;

