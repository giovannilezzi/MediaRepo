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



    render() {
    //    this.props.asyncCallAllFiles('Town Square')+
        console.log(this.props.allFilesLoaded)
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
            console.log("booleana" + this.props.isSearching)
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
                <div className="menuOpzioni">
                    <UploadFileContainer/>
                    <div className="opzioni">



                        <div>

                                <ul id="menufiltra">
                                    <li id="idlista" className="lilista"><a className="FiltraName filtraggio" onClick={this.visibleMenu}>Filtra</a>
                                        <ul className="hidden">
                                            <li> <a className="filtraggio" onClick={this.filterImage}>Immagini</a></li>
                                            <li> <a className="filtraggio" onClick={this.filterPdf}>PDF</a></li>
                                            <li> <a className="filtraggio" onClick={this.filterTesti}>Testo</a></li>
                                            <li> <a className="filtraggio" onClick={this.filterAltri}>Altri</a></li>
                                            <li> <a className="filtraggio" onClick={this.resetFilter}>Resetta</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <input type="search" id="s" name="s" placeholder="Cerca un file..." ref={(input) => this.getTitle = input} onChange={this.searchFile}/>
                                <input type="submit" id="sub" name="sub" className="cerca" />

                        </div>


                    </div>



                    <h1 className="titolo">Libreria Multimediale</h1></div>

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
