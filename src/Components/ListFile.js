import React from 'react';
import $ from 'jquery'

class ListFile extends React.Component{

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.asyncCallAllImages('Town Square')
        //su mattermost:  this.props.asyncCallAllImages($('#channelHeaderDropdownButton').text())
      //in local:  this.props.asyncCallAllImages('Town Square')
    }

    viewFile = () => {

        var that = this
        $('a.tile').on('click', function (e) {
            e.preventDefault();
            var id = $(this).attr('id');
            that.props.AsyncCallGetFileById(id)
            //that.props.saveFile(that.props.listFiles[id-1])
        });
        $('li.pdf').on('click', function (e) {
            e.preventDefault();
            var id = $(this).attr('id');
            that.props.AsyncCallGetFileById(id)
            //that.props.saveFile(that.props.listFiles[id-1])
        });
        $('li.file').on('click', function (e) {
            e.preventDefault();
            var id = $(this).attr('id');
            that.props.AsyncCallGetFileById(id)
            //that.props.saveFile(that.props.listFiles[id-1])
        });
    }

    render() {
        let listImage = [];
        if (this.props.listFiles && !this.props.isLoading) {
            for(var i = 0; i<this.props.listFiles.length; i++){
                if(this.props.listFiles[i].MimeType == 'data:image/png;base64,' || this.props.listFiles[i].MimeType == 'data:image/jpeg;base64,') {
                 /*   listImage.push(
                        <li className="menuover" id={this.props.listFiles[i].Id} onClick={this.viewFile} className="image" key={this.props.listFiles[i].Id} >
                            {
                                <a className="far fa-file-image fa-9x link " > {this.props.listFiles[i].Name} </a>
                            }
                        </li>
                    )*/
                    listImage.push(
                    <a className="tile" id={this.props.listFiles[i].Id} onClick={this.viewFile}  key={this.props.listFiles[i].Id}>
                        <h2 className="tile-description">{this.props.listFiles[i].Name}</h2>
                        <div className="tile-divider"></div>
                        <p className=" far fa-file-image fa-3x"> </p>
                    </a>
                    )

                }
                else if(this.props.listFiles[i].MimeType == 'data:application/pdf;base64,' ) {
                  /*  listImage.push(
                        <li className="menuover" id={this.props.listFiles[i].Id} onClick={this.viewFile} className="pdf" key={this.props.listFiles[i].Id} >
                            {
                                <a className=" far fa-file-pdf fa-9x link" > {this.props.listFiles[i].Name} </a>
                            }
                        </li>
                    )*/
                    listImage.push(
                        <a className="tile" id={this.props.listFiles[i].Id} onClick={this.viewFile}  key={this.props.listFiles[i].Id}>
                            <h2 className="tile-description">{this.props.listFiles[i].Name}</h2>
                            <div className="tile-divider"></div>
                            <p className=" far fa-file-pdf fa-3x"> </p>
                        </a>
                    )
                }
                else if(this.props.listFiles[i].MimeType == 'data:text/plain;base64,' ) {
                  /*  listImage.push(
                        <li className="menuover" id={this.props.listFiles[i].Id} onClick={this.viewFile} className="file" key={this.props.listFiles[i].Id} >
                            {
                                <a className="far fa-file-alt fa-9x link" > {this.props.listFiles[i].Name} </a>
                            }
                        </li>
                    )*/
                    listImage.push(
                        <a className="tile" id={this.props.listFiles[i].Id} onClick={this.viewFile}  key={this.props.listFiles[i].Id}>
                            <h2 className="tile-description">{this.props.listFiles[i].Name}</h2>
                            <div className="tile-divider"></div>
                            <p className=" far fa-file-alt fa-3x"> </p>
                        </a>
                    )
                }else {
                   /* listImage.push(
                        <li className="menuover" id={this.props.listFiles[i].Id} onClick={this.viewFile} className="file" key={this.props.listFiles[i].Id} >
                            {
                                <a className="far fa-file-alt fa-9x link" > {this.props.listFiles[i].Name} </a>
                            }
                        </li>
                    )*/
                    listImage.push(
                        <a className="tile" id={this.props.listFiles[i].Id} onClick={this.viewFile}  key={this.props.listFiles[i].Id}>
                            <h2 className="tile-description">{this.props.listFiles[i].Name}</h2>
                            <div className="tile-divider"></div>
                            <p className=" far fa-file-alt fa-3x"> </p>
                        </a>
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
                    <h1 className="titolo">Libreria Multimediale</h1></div>
                    <div className="tiles-flex">
                         {listImage}
                     </div>
            </div>
        )
    }
}

export default ListFile;
