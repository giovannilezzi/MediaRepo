import React from "react";
import $ from "jquery";


class FileComponent extends React.Component{

    constructor(props) {
        super(props);
    }

    viewFile = () => {
        this.props.AsyncCallGetFileById(this.props.file.Id)
     /*  var that = this
        $('a.tile').on('click', function (e) {
            e.preventDefault();
            var id = $(this).attr('id');
            that.props.AsyncCallGetFileById(id)
            //that.props.saveFile(that.props.listFiles[id-1])
        });*/
    }

    deleteFile = () =>{
        $("#" + this.props.file.Id).remove();
        const requestBody = {
            Id: this.props.file.Id
        }
        this.props.deleteFile(requestBody)
    }




    render() {
      return(
          <a className="tile" id={this.props.file.Id}   key={this.props.file.Id}>
              <h2 className="tile-description" onClick={this.viewFile}  id={this.props.file.Id} >{this.props.file.Name}</h2>
              <div className="tile-divider"></div>
              {
                  this.props.file.MimeType=='data:image/png;base64,' || this.props.file.MimeType=='data:image/jpeg;base64,'?
                      <p className=" far fa-file-image fa-3x"> </p>
                      :
                  this.props.file.MimeType=='data:application/pdf;base64,'?
                      <p className=" far fa-file-pdf fa-3x"> </p>
                      :
                  this.props.file.MimeType=='data:text/plain;base64,'?
                      <p className=" far fa-file-alt fa-3x"> </p>
                      :
                      <p className=" far fa-file-alt fa-3x"> </p>
              }


              <button onClick={this.deleteFile} className="deleteFile"> delete </button>
          </a>
          )

    }
}

export default FileComponent;



