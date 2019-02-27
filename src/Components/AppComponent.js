import React from "react";
import ListFileContainer from "../Containers/ListFileContainer";
import EditFileContainer from "../Containers/EditFileContainer";
import PreviewContainer from "../Containers/PreviewContainer"

class AppComponent extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div id= "appPreview">
                {
                    this.props.previewFileClicked?
                        <div className="preview">
                            <PreviewContainer/>
                        </div>
                        :
                        <div></div>
                }

                {
                    this.props.editFileClicked?
                        <div className="preview">
                            <EditFileContainer file={this.props.file}/>
                        </div>
                        :
                        <div></div>
                }
                <div id="navi">
                    <ListFileContainer/>
                </div>
            </div>

        )
    }
}

export default AppComponent;



