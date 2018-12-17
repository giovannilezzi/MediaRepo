import React from 'react';
import '../style.css'
import $ from 'jquery'

class ListFile extends React.Component{

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.asyncCallAllImages()
    }

    viewFile = () => {
        var that = this
        $('li.image a').on('click', function (e) {
            console.log("ciao")
            e.preventDefault();
            var id = $(this).parent().attr('id');
            that.props.saveFile(that.props.listFiles[id])
        });
        $('li.pdf a').on('click', function (e) {
            console.log("ciao")
            e.preventDefault();
            var id = $(this).parent().attr('id');
            that.props.saveFile(that.props.listFiles[id])
        });
        $('li.file a').on('click', function (e) {
            console.log("ciao")
            e.preventDefault();
            var id = $(this).parent().attr('id');
            that.props.saveFile(that.props.listFiles[id])
        });
    }

    render() {
        let listImage = [];
        if (this.props.listFiles && !this.props.isLoading) {
            for(var i = 0; i<this.props.listFiles.length; i++){
                if(this.props.listFiles[i].MimeType == 'data:image/png;base64,' ) {
                    listImage.push(
                        <li id={this.props.listFiles[i].Id} onClick={this.viewFile} className="image" key={this.props.listFiles[i].Id} width="800" height="400">
                            {
                                <a className="link" > {this.props.listFiles[i].Name} </a>
                            }
                        </li>
                    )
                }
                else if(this.props.listFiles[i].MimeType == 'data:application/pdf;base64,' ) {
                    listImage.push(
                        <li id={this.props.listFiles[i].Id} onClick={this.viewFile} className="pdf" key={this.props.listFiles[i].Id} width="800" height="400">
                            {
                                <a className="link" > {this.props.listFiles[i].Name} </a>
                            }
                        </li>
                    )
                }
                else if(this.props.listFiles[i].MimeType == 'data:text/plain;base64,' ) {
                    listImage.push(
                        <li id={this.props.listFiles[i].Id} onClick={this.viewFile} className="file" key={this.props.listFiles[i].Id} width="800" height="400">
                            {
                                <a className="link" > {this.props.listFiles[i].Name} </a>
                            }
                        </li>
                    )
                }
            }
        }
        else
            listImage =

                      <div id = "loader-wrapper"> <br/> <br/> <br/> <h1>Loading ...</h1>
                              < div  id = "loader"></div>
                      </div>
        console.log($("#root"))
        return (
            <div>
                <div>
                    <h1>Libreria Multimediale</h1></div>
                    {listImage}
            </div>
        )
    }
}

export default ListFile;
