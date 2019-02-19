import React from "react";
import $ from "jquery";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "../Store/AppStore";
import EditFileContainer from '../Containers/EditFileContainer'

class FileComponent extends React.Component{

    constructor(props) {
        super(props);
    }

    viewFile = () => {
        this.props.AsyncCallGetFileById(this.props.file.Id)
    }

    deleteFile = () =>{
        const requestBody = {
            Id: this.props.file.Id
        }
        this.props.deleteFile(requestBody)
    }

    editFile = () => {
        console.log(this.props.file)
        ReactDOM.render(
            <Provider store={store}>
                <EditFileContainer file = {this.props.file} />
            </Provider>,
            document.getElementById('root')
        )
    }

    render() {
      return(
          <a className="tile" id={this.props.file.Id}   key={this.props.file.Id}>
              <h2 className="tile-description" onClick={this.viewFile}  id={this.props.file.Id} >
                  {
                  this.props.file.MimeType=='data:image/png;base64,' || this.props.file.MimeType=='data:image/jpeg;base64,'?
                      <i className=" immagineFile far fa-file-image fa-3x"> </i>
                      :
                      this.props.file.MimeType=='data:application/pdf;base64,'?
                          <i className=" immagineFile far fa-file-pdf fa-3x"> </i>
                          :
                          this.props.file.MimeType=='data:text/plain;base64,'?
                              <i className=" immagineFile far fa-file-alt fa-3x"> </i>
                              :
                              <i className=" immagineFile far fa-file-alt fa-3x"> </i>
                 }

              <span className="titoloFile">{this.props.file.Name} </span>
              </h2>
              <div className="tile-divider"></div>


              <div className="underFile">
                  <img src="https://png.icons8.com/color/edit" onClick={this.editFile}/>
                  <img className="imageDelete" src="https://png.icons8.com/color/delete" onClick={this.deleteFile} />
              </div>

          </a>
          )
    }
}

export default FileComponent;



