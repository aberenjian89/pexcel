import React from 'react';
import ImageIndexItem from './ImageIndexItem'


class Upload extends React.Component{
    constructor(props){
        super(props);
        this.state = {images: [],upload: this};
        this.readfile = this.readfile.bind(this);
        this.datagenerate = this.datagenerate.bind(this);
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
                    upload.readfile(arr[i])
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

    readfile(file){
        let fileReader = new FileReader();
        let array = this.state.images;


        fileReader.onloadend = () =>{
            let image = {
                file: "",
                url: "",
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

    render(){
        let images="";
        let flag =false;
        let fclass ="";
        if (this.state.images.length > 0){
            images =this.state.images.map((image)=>{
                if (flag){
                    fclass="figure1";
                    flag= false;
                }else{
                    fclass="figure2";
                    flag=true
                }
                return(
                    <ImageIndexItem class={fclass} image_url ={image.url}/>
                );
            });
        }

        return (
           <div className="upload-container">
               {/*<p onClick={() => document.getElementById('modal').style.display='none'}>*/}
                   {/*Ali*/}
               {/*</p>*/}

                   <figure className="dropzone" id="dropzone">
                       Drop files here to Upload
                       {/*<form>*/}
                           {/*<input type="file" multiple onChange={this.readfile}/>*/}
                       {/*</form>*/}
                   </figure>
                   <main className="main">
                       {images}
                   </main>
           </div>
        )
    }
}


export default Upload;