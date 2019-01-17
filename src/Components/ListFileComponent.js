import React from 'react';
import $ from 'jquery'
import FileComponent from "./FileComponent";
import FileContainer from '../Containers/FileContainer'

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
        this.props.asyncCallAllFiles('Town Square')
        //su mattermost:  this.props.asyncCallAllFiles($('#channelHeaderDropdownButton').text())
      //in local:  this.props.asyncCallAllFiles('Town Square')
    }


    //Dall'array di tutti i file, si va a trovare quello con il nome inserito nell'input. In caso positivo si
    // mostra solo il file cercato, in caso negativo si mostrano tutti con una stampa di alert.
    searchFile = () =>{


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


    /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
    dropdownMenu = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    }


    render() {
        let listImage = [];
        let image = [];
        let pdf = [];
        let testi = [];
        let altri = [];


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
                <div>
                    <div className="dropdown">
                        <button onClick={this.dropdownMenu} className="dropbtn">Filtra</button>
                        <div id="myDropdown" className="dropdown-content">
                            <a onClick={this.filterImage}>Immagini</a>
                            <a onClick={this.filterPdf}>PDF</a>
                            <a onClick={this.filterTesti}>Testo</a>
                            <a onClick={this.filterAltri}>Altri</a>
                            <a onClick={this.resetFilter}>Resetta</a>
                        </div>
                    </div>

                    <input type="search" id="s" name="s" placeholder="Cerca un file..."/>
                        <input type="submit" id="sub" name="sub" value="Cerca"/>


                    <h1 className="titolo">Libreria Multimediale</h1></div>

                    <div className="tiles-flex">
                         {
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
