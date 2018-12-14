import React from 'react';
import '../style.css'
import $ from 'jquery'
import ReactDOM from 'react-dom'
import Provider from "react-redux/es/components/Provider";
import store from "../Store/AppStore";
import ListFileContainer from "../Containers/ListFileContainer";
import ListImageContainer from "../Containers/ListImageContainer";
import MediaRepoContainer from "../Containers/MediaRepoContainer";



class ListFile extends React.Component{

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.asyncCallAllImages()
    }

    viewFile(){
        ReactDOM.render(
            <Provider store={store}>
                <div>
                   <ListImageContainer/>
                </div>
            </Provider>,
            document.getElementById('root'),
        );
    }


    render() {
        let listImage = [];

        if (this.props.listFiles && !this.props.isLoading) {

            for(var i = 0; i<this.props.listFiles.length; i++){


                if(this.props.listFiles[i].MimeType == 'data:image/png;base64,' ) {
                    listImage.push(
                        <li onClick={this.viewFile} className="image" key={this.props.listFiles[i].Id} data={this.props.listFiles[i].MimeType+this.props.listFiles[i].File} width="800" height="400">
                            {
                                <a className="link" onClick={this.viewFile}> {this.props.listFiles[i].Name} </a>
                            }

                        </li>
                    )

                }
                else if(this.props.listFiles[i].MimeType == 'data:application/pdf;base64,' ) {
                    listImage.push(
                        <li onClick={this.viewFile} className="pdf" key={this.props.listFiles[i].Id} data={this.props.listFiles[i].MimeType+this.props.listFiles[i].File} width="800" height="400">
                            {
                                <a className="link" onClick={this.viewFile}> {this.props.listFiles[i].Name} </a>
                            }
                        </li>
                    )
                }

                else if(this.props.listFiles[i].MimeType == 'data:text/plain;base64,' ) {
                    listImage.push(
                        <li onClick={this.viewFile} className="file" key={this.props.listFiles[i].Id} data={this.props.listFiles[i].MimeType+this.props.listFiles[i].File} width="800" height="400">
                            {
                                <a className="link" onClick={this.viewFile}> {this.props.listFiles[i].Name} </a>
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




        return (
            <div>
                <div> <h1>Libreria Multimediale</h1></div>
                {listImage}

            </div>
        )
    }
}

export default ListFile;

