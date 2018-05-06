import React from 'react';
import ProfileContainer from './profile_container'

class Upload extends React.Component{
    constructor(props) {
        super(props);
        this.state = {images: [], upload: this};
        this.readfiledrag = this.readfiledrag.bind(this);
        this.readfile = this.readfile.bind(this);
        this.removeImage = this.removeImage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.uploadImages = this.uploadImages.bind(this);

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
            image.img_title = file.name;
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

    handleChange(idx){
        return (e)=>{
            let array = this.state.images;
            if (e.currentTarget.name === "img_title"){
                array[idx].img_title = e.target.value;
            }else if (e.currentTarget.name === "img_location"){
                array[idx].img_location = e.target.value;
            }else if (e.currentTarget.name === "img_desc"){
                array[idx].img_desc = e.target.value;
            }else if (e.currentTarget.name === "date_taken"){
                array[idx].date_taken = e.target.value;
            }else if (e.currentTarget.name === "category"){
                array[idx].category = e.target.value
            }
            this.setState({images: array})
        }
    }


    uploadImages(){
        let promise;
        debugger;
        let $submit = $("#submit");
        $submit.removeClass('submit');
        $submit.addClass('submit-disable');
        for(let i=0 ; i < this.state.images.length ; i++){
            let formData = new FormData();
            formData.append("image[img_title]",this.state.images[i].img_title);
            formData.append("image[img_desc]",this.state.images[i].img_desc);
            formData.append("image[img_location]",this.state.images[i].img_location);
            formData.append("image[date_taken]",this.state.images[i].date_taken);
            formData.append("image[category]",this.state.images[i].category);
            formData.append("image[img]",this.state.images[i].file);

            promise = this.props.createImg(this.props.CurrentUser.id,formData)

        }

        return promise.then(()=> this.props.history.push('/gallery'))

    }

    render(){
       let images;
       if (this.state.images.length > 0 ){
            images = this.state.images.map((img,idx) =>{
                return (
                        <div className="img-container" key={idx}>
                            <div className="img-content">
                                 <img src={img.url} key={idx} />
                            </div>
                            <div className="img-form">
                                <div className="img-title-container">
                                    <label> Title:</label>
                                    <input type="text" name="img_title" value={img.img_title} onChange={this.handleChange(idx)} required/>
                                </div>
                                <div className="img-location-container">
                                     <label> Location:</label>
                                     <input type="text" name="img_location" value={img.img_location}  onChange={this.handleChange(idx)} required/>
                                </div>
                                <div className="img-desc-container">
                                     <label> Description:</label>
                                     <input type="text" name="img_desc" value={img.img_desc} onChange={this.handleChange(idx)} required/>
                                </div>
                                <div className="img-datataken-container"> 
                                     <label> Date Taken:</label>
                                     <input type="date" name="date_taken" value={img.date_taken} onChange={this.handleChange(idx)} required/>
                                </div>
                                <div className="img-category">
                                    <label> Category: </label>
                                    <select name="category" value={img.category} onChange={this.handleChange(idx)} required>
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
                                <div>
                                    <button onClick={this.removeImage()} name={idx}>Remove</button>
                                </div>
                            </div>
                        </div>
                    );
            })
       }
       let submit;
       if (this.state.images.length > 0){
           submit=<button id="submit" onClick={this.uploadImages} className="submit">Upload</button>
       }else{
           submit=<button className="submit-disable" disabled>Upload</button>
       }
       return (
           <div>
                <ProfileContainer/>
                <div className="upload-container">
                    <div className="dropzone" id="dropzone">
                        <label> Drag & Drops or Browse </label>
                        <input type="file"  name="myFile" title="" onChange={this.readfile}/>
                    </div>
                    <div className="images-container">
                        {images}
                    </div>
                    {submit}
                </div>
           </div>
        )
    }
}


export default Upload;