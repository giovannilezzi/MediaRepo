import React from 'react';
import FileContainer from '../Containers/FileContainer'
import UploadFileContainer from "../Containers/UploadFileContainer";

class ListFileComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            imageClicked: false,
            pdfClicked: false,
            testiClicked: false,
            altriClicked: false
        }
    }

    disableMenu = () => {
        var element = document.getElementById("filtriMenu");
        element.classList.remove("mystyle");
    }


    //Dall'array dei files, si vanno a cercare solo i files con l'estenzione relatica al filtraggio selezionato dal menu a tendina.
    filterImage = () =>{
        this.setState({
            imageClicked : true,
            testiClicked : false,
            pdfClicked: false,
            altriClicked: false
        })

    }

    filterPdf = () =>{
        this.setState({
            pdfClicked: true,
            testiClicked : false,
            imageClicked: false,
            altriClicked: false
        })

    }

    filterTesti = () =>{
        this.setState({
            testiClicked : true,
            pdfClicked: false,
            imageClicked: false,
            altriClicked: false
        })

    }

    filterAltri = () =>{
        this.setState({
            altriClicked: true,
            testiClicked : false,
            pdfClicked: false,
            imageClicked: false
        })

    }

    resetFilter = () =>{
        this.setState({
            imageClicked: false,
            pdfClicked: false,
            testiClicked : false,
            altriClicked: false

        })

    }

    visibleMenu = ( ) => {
        var element = document.getElementById("idlista");
        element.classList.add("mystyle");
    }
    /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    dropdownMenu = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    }



    searchFile = () => {
        this.setState({
            searching: true
        })
        const requestBody = {
            Name: this.getTitle.value,
            Channel: "Town Square"
        }
        this.props.searchFile(requestBody)

    }

    openFilterMenu = () => {
        document.getElementsByClassName('dropdownMenuNuovo')[0].classList.toggle('down');
        document.getElementsByClassName('arrowMenu')[0].classList.toggle('gone');
        if (document.getElementsByClassName('dropdownMenuNuovo')[0].classList.contains('down')) {
            setTimeout(function() {
                document.getElementsByClassName('dropdownMenuNuovo')[0].style.overflow = 'visible'
            }, 500)
        } else {
            document.getElementsByClassName('dropdownMenuNuovo')[0].style.overflow = 'hidden'
        }
    }

    myFunction = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    render() {
    //    this.props.asyncCallAllFiles('Town Square')+
        if (!this.props.allFilesLoaded) {
            this.props.asyncCallAllFiles('Town Square')
        }
        //su mattermost:  this.props.asyncCallAllFiles($('#channelHeaderDropdownButton').text())
        //in local:  this.props.asyncCallAllFiles('Town Square')
        let listImage = [];
        let listSearching = [];
        let image = [];
        let pdf = [];
        let testi = [];
        let altri = [];

        if(this.props.searchFileResponse && this.props.isSearching){
            for(var i = 0; i<this.props.searchFileResponse.length; i++) {
                listSearching.push(
                    <FileContainer file={this.props.searchFileResponse[i]} key={this.props.searchFileResponse[i].Id}/>
                )
                console.log(this.props.searchFileResponse)
            }
        }

        if (this.props.listFiles && !this.props.isLoading) {
            for(var i = 0; i<this.props.listFiles.length; i++){
                if(this.props.listFiles[i].MimeType == 'data:image/png;base64,' || this.props.listFiles[i].MimeType == 'data:image/jpeg;base64,') {
                    image.push(
                        <FileContainer file={this.props.listFiles[i]} key={this.props.listFiles[i].Id}/>
                    )


                    listImage.push(
                        <FileContainer file={this.props.listFiles[i]} key={this.props.listFiles[i].Id}/>
                    )

                }
                else if(this.props.listFiles[i].MimeType == 'data:application/pdf;base64,' ) {
                    pdf.push(
                        <FileContainer file={this.props.listFiles[i]} key={this.props.listFiles[i].Id}/>
                    )

                    listImage.push(
                        <FileContainer file={this.props.listFiles[i]} key={this.props.listFiles[i].Id}/>
                    )
                }
                else if(this.props.listFiles[i].MimeType == 'data:text/plain;base64,' ) {
                    testi.push(
                        <FileContainer file={this.props.listFiles[i]} key={this.props.listFiles[i].Id}/>
                    )
                    listImage.push(
                        <FileContainer file={this.props.listFiles[i]} key={this.props.listFiles[i].Id}/>
                    )
                }else {
                    altri.push(
                        <FileContainer file={this.props.listFiles[i]} key={this.props.listFiles[i].Id}/>
                    )

                    listImage.push(
                        <FileContainer file={this.props.listFiles[i]} key={this.props.listFiles[i].Id}/>
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
            <header className="headerMediaRepo">
                <div id="logoMediaRepo">
                    <span className="iconMediaRepo"> archive </span>

                    <span>
              Media<b>Repository</b>
            </span>
                </div>
            </header>

                <div className="navbarMediaRepo">
                    <a className="TypeFilterList"> <UploadFileContainer/> </a>
                    <div className="subnavMediaRepo">
                        <button className="subnavbtnMediaRepo">Filtra <i className="fa fa-caret-down"></i></button>
                        <div className="subnav-contentMediaRepo">
                            <a className="TypeFilterList" onClick={this.filterImage}>Immagini  <span className="spanZone far fa-file-image"></span></a>
                            <a className="TypeFilterList" onClick={this.filterPdf}>PDF <span className="spanZone far fa-file-pdf"></span></a>
                            <a className="TypeFilterList" onClick={this.filterTesti}>Testi <span className="spanZone far fa-file-alt"></span></a>
                            <a className="TypeFilterList" onClick={this.filterAltri}>Altro <span className="spanZone far fa-file"></span></a>
                            <a className="TypeFilterList" onClick={this.resetFilter}>Reset <span className="spanZone far fa-window-close"></span></a>
                        </div>
                    </div>
                    <input type="text" placeholder="Search File.." className="inputStyleMediaRepo" ref={(input) => this.getTitle = input} onChange={this.searchFile}/>

                </div>
                <div className= "firstDiv">

                <div className="tiles-flex">
                     {
                         this.state.searching?
                             listSearching
                             :

                         this.state.imageClicked?
                             image
                             :
                         this.state.pdfClicked?
                             pdf
                             :
                         this.state.testiClicked?
                            testi
                            :
                         this.state.altriClicked?
                            altri
                            :
                         this.state.imageClicked || this.state.pdfClicked || this.state.testiClicked || this.state.altriClicked?
                            <div></div>
                            :
                            listImage
                    }
                 </div>
            </div>
            </div>
        )
    }
}

export default ListFileComponent;
