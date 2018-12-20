import React from 'react';
import $ from 'jquery'

class ListFile extends React.Component{

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.asyncCallAllImages('Town Square')
    }

    viewFile = () => {
        var that = this
        $('li.image').on('click', function (e) {
            e.preventDefault();
            var id = $(this).attr('id');
            console.log(id)
            console.log(that.props.listFiles)
            console.log(that.props.listFiles[id])
            that.props.AsyncCallGetFileById(id)
            //that.props.saveFile(that.props.listFiles[id-1])
        });
        $('li.pdf').on('click', function (e) {
            e.preventDefault();
            var id = $(this).attr('id');
            console.log(id)
            console.log(that.props.listFiles)
            console.log(that.props.listFiles[id])
            that.props.AsyncCallGetFileById(id)
            //that.props.saveFile(that.props.listFiles[id-1])
        });
        $('li.file').on('click', function (e) {
            e.preventDefault();
            var id = $(this).attr('id');
            console.log(id)
            console.log(that.props.listFiles)
            console.log(that.props.listFiles[id])
            that.props.AsyncCallGetFileById(id)
            //that.props.saveFile(that.props.listFiles[id-1])
        });
    }

    render() {
        let listImage = [];
        if (this.props.listFiles && !this.props.isLoading) {
            for(var i = 0; i<this.props.listFiles.length; i++){
                if(this.props.listFiles[i].MimeType == 'data:image/png;base64,' || this.props.listFiles[i].MimeType == 'data:image/jpeg;base64,') {
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
                }else {
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
