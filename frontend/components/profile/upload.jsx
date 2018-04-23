import React from 'react';
import ImageIndexItem from './ImageIndexItem'


class Upload extends React.Component{
    constructor(props) {
        super(props);
        this.state = {images: [], upload: this};
        this.readfiledrag = this.readfiledrag.bind(this);
        this.readfile = this.readfile.bind(this);
        this.removeImage = this.removeImage(this);

    }

    componentDidMount(){

        let upload = this;

        (function(){
            let dropzone = document.getElementById('dropzone');
            dropzone.ondrop = function(e){
                e.preventDefault();
                this.className = 'dropzone'
                let arr  = e.dataTransfer.files;
                for (var i = 0; i < arr.length; i++) {
                   upload.readfiledrag(arr[i])
                }
            }

            dropzone.ondragover = function(){
                this.className = 'dropzone dragover';
                return false;
            }

            dropzone.ondragleave = function(){
                this.className = 'dropzone';
                return false;
            }
        })

   
    }

    readfiledrag(file){
        let fileReader = new FileReader();
        let array = this.state.images;


        fileReader.onloadend = () =>{
            let image = {
                file: "",
                url: "",
                img_title:"",
                img_location:"",
                author_id: "",
                img_desc:"",
                date_taken:"",
                category:""
            };
            image.file = file;
            image.url = fileReader.result;
            array.push(image);
            this.setState({images: array})
        };


        if (file){
            fileReader.readAsDataURL(file)
        }
    }

    readfile(e){
        let file = e.currentTarget.files[0];
        let fileReader = new FileReader();
        let array = this.state.images;

        fileReader.onloadend = () =>{
            let image = {
                file: "",
                url: "",
                img_title:"",
                img_location:"",
                author_id: "",
                img_desc:"",
                date_taken:"",
                category:""
            };
            image.file = file;
            image.url = fileReader.result;
            array.push(image);
            this.setState({images: array})
        };

        debugger;
        if (file){
            fileReader.readAsDataURL(file)
        }

    }

    removeImage(){
        return (e) => {
            let idx = parseInt(e.currentTarget.name);
            let array = this.state.images;

            array = array.slice(0,idx).concat(array.slice(idx+1,array.length));
            this.setState({images: array})
        }

    }

    render(){
       return (
            <div className="upload-container">
                <div className="dropzone" id="dropzone">
                    <label> Drag & Drops or Browse </label>
                    <input type="file"  name="myFile" multiple onChange={this.readfile}/>       
                </div>
            </div>
        )
    }
}


export default Upload;