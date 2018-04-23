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
        }())

   
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
       let images;
       if (this.state.images.length > 0 ){
            images = this.state.images.map((img,idx) =>{
                return (
                        <div className="img-container">
                            <div>
                                 <img src={img.url} key={idx} />
                            </div>
                            <div className="img-form">
                                <div className="img-title-container">
                                    <label> Title </label>
                                    <input type="text" name="img_title" />
                                </div>
                                <div className="img-location-container">
                                     <label> Location </label>
                                     <input type="text" name="img_location" />
                                </div>
                                <div className="img-desc-container">
                                     <label> Description </label>
                                     <input type="text" name="img_desc" />
                                </div>
                                <div className="img-datataken-container"> 
                                     <label> Date Taken </label>
                                     <input type="text" name="date_taken" />
                                </div>
                                <div>
                                    <label> Category </label>
                                    <select name="category">
                                        <option value="uncategorized">Uncategorized</option>
                                        <option value="abstract">Abstract</option>
                                        <option value="aerial">Aerial</option>
                                        <option value="animals">Animals</option>
                                        <option value="black&white">Black & White</option>
                                        <option value="celebrities">Celebrities</option>
                                        <option value="city&architecture">City & Architecture</option>
                                        <option value="commercial">Commerical</option>
                                        <option value="concert">Concert</option>
                                        <option value="family">Family</option>
                                        <option value="fashion">Fashion</option>
                                        <option value="film">Film</option>
                                        <option value="fineart">Fine Art</option>
                                        <option value="food">Food</option>
                                        <option value="landscapes">Landscapes</option>
                                        <option value="nature">Natures</option>
                                        <option value="night">Night</option>
                                        <option value="people">People</option>
                                        <option value="performingarts">Performing Arts</option>
                                        <option value="sport">sports</option>
                                        <option value="stillife">Still Life</option>
                                        <option value="street">Street</option>
                                        <option value="transportation">Transportation</option>
                                        <option value="travel">Travel</option>
                                        <option value="underwater">Under Water</option>
                                        <option value="wedding">Wedding</option>
                                        <option value="nude">Nude</option>
                                    </select>
                                </div> 
                            </div>                          
                        </div>
                    );
            })
       }
       return (
            <div className="upload-container">
                <div className="dropzone" id="dropzone">
                    <label> Drag & Drops or Browse </label>
                    <input type="file"  name="myFile" multiple onChange={this.readfile}/>       
                </div>
                <div className="images-container">
                    {images}
                </div>
            </div>
        )
    }
}


export default Upload;