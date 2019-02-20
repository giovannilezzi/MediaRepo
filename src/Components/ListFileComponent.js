import React from 'react';
import $ from 'jquery'
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

    componentWillMount() {
    }

    disableMenu = () => {
        var element = document.getElementById("idlista");
        element.classList.remove("mystyle");
    }

    disableMenu = () => {
        var element = document.getElementById("idlista");
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
        this.disableMenu()

    }

    filterPdf = () =>{
        this.setState({
            pdfClicked: true,
            testiClicked : false,
            imageClicked: false,
            altriClicked: false
        })
        this.disableMenu()

    }

    filterTesti = () =>{
        this.setState({
            testiClicked : true,
            pdfClicked: false,
            imageClicked: false,
            altriClicked: false
        })
        this.disableMenu()

    }

    filterAltri = () =>{
        this.setState({
            altriClicked: true,
            testiClicked : false,
            pdfClicked: false,
            imageClicked: false
        })
        this.disableMenu()

    }

    resetFilter = () =>{
        this.setState({
            imageClicked: false,
            pdfClicked: false,
            testiClicked : false,
            altriClicked: false

        })
        this.disableMenu()

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



    searchFile = (e) => {
        this.setState({
            searching: true
        })

        e.preventDefault();
        const requestBody = {
            Name: this.getTitle.value,
            Channel: "Town Square"
        }
        console.log(this.getTitle.value)
        this.props.searchFile(requestBody)

    }

    visibleMenu = ( ) => {
        var element = document.getElementById("idlista");
        element.classList.add("mystyle");
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


            <div className= "firstDiv">
                <div className="opzioni">
                    <UploadFileContainer/>
                    <div className="search">
                        <input type="checkbox" id="trigger" className="search__checkbox" onChange={this.searchFile}/>
                        <label className="search__label-init" htmlFor="trigger"></label>
                        <label className="search__label-active" htmlFor="trigger"></label>
                        <div className="search__border"></div>
                        <input type="text" className="search__input" ref={(input) => this.getTitle = input} onChange={this.searchFile} />
                        <div className="search__close"></div>
                    </div>

                    <div className="menuNuovo">
                        <div className="titleMenuNuovo" onClick={this.openFilterMenu}>Filtra <span className=" spanZone fa fa-bars"></span>
                            <div className="arrowMenu"></div>
                        </div>
                        <div className="dropdownMenuNuovo">
                            <p className="pMenuNuovo" onClick={this.filterImage}>Immagini <span className="spanZone far fa-file-image"></span></p>
                            <p className="pMenuNuovo" onClick={this.filterPdf}>PDF <span className="spanZone far fa-file-pdf"></span></p>
                            <p className="pMenuNuovo" onClick={this.filterTesti}>Testo <span className="spanZone far fa-file-alt"></span></p>
                            <p className="pMenuNuovo" onClick={this.filterAltri}>Altro <span className="spanZone far fa-file"></span></p>
                            <p className="pMenuNuovo" onClick={this.resetFilter}>Resetta <span className="spanZone far fa-window-close"></span></p>
                        </div>
                    </div>



                </div>
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

    )
    }
}
export default ListFileComponent;
