import React from 'react';
import ImageIndexItem from './ImageIndexItem'


class Upload extends React.Component{
    constructor(props) {
        super(props);
        this.state = {images: [], upload: this};
        this.readfiledrag = this.readfiledrag.bind(this);
        this.datagenerate = this.datagenerate.bind(this);
        this.readfile = this.readfile.bind(this);
        this.removeImage = this.removeImage(this);

    }

    componentDidMount(){
        let upload = this;
        (function(){
            let dropzone = document.getElementById('dropzone');
            dropzone.ondrop = function(e){
                e.preventDefault();
                this.className = 'dropzone';
                console.log(e.dataTransfer.files);
                let arr = e.dataTransfer.files;
                for (let i = 0 ;i< arr.length  ; i++){
                    upload.readfiledrag(arr[i])
                }
               // upload.readfile(e)
            };

            dropzone.ondragover = function(){
                this.className = 'dropzone dragover';
                return false;
            };

            dropzone.ondragleave = function(){
                this.className = 'dropzone';
                return false
            };

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

    datagenerate(){
        return new Date();
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
        let images="";
        let flag =false;
        let fclass ="";
        if (this.state.images.length > 0){
            images =this.state.images.map((image,idx)=>{
                if (flag){
                    fclass="figure1";
                    flag= false;
                }else{
                    fclass="figure2";
                    flag=true
                }
                return(
                        <figure key={idx} className={fclass}>
                            <div className="img-container">
                                <img className="figure-img" src={image.url} alt={image.img_title}/>
                                <button name={idx} key={idx} onClick={this.removeImage}>
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </div>
                        </figure>
                );
            });
        }

        return (
           <div className="upload-container">
               {/*<p onClick={() => document.getElementById('modal').style.display='none'}>*/}
                   {/*Ali*/}
               {/*</p>*/}

                   <figure className="dropzone" id="dropzone">
                       <form>
                           <input name="myFile" type="file" onChange={this.readfile}/>
                           <label htmlFor="myFile">Click to Upload file or Drop files here to Upload</label>
                       </form>
                   </figure>
                   <main className="main">
                       {images}
                   </main>
                   <div className="image_form">

                   </div>
           </div>
        )
    }
}


export default Upload;