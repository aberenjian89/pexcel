import React from 'react';
import Modal from 'react-modal';
import {Link} from 'react-router-dom';

class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({show: true,image: "",imageUrl: "",
            img_title: "",
            img_desc: "",
            img_location: "",
            date_taken: "",
            category: "",
        });

        this.closemodal=this.closemodal.bind(this);
        this.updatefile= this.updatefile.bind(this);
        this.handlesubmit = this.handlesubmit.bind(this)
        this.update = this.update.bind(this)
    }




    closemodal(){
        this.setState({show: false})
    }

    updatefile(e){
        debugger;
        let file = e.currentTarget.files[0];

        let fileReader = new FileReader();

        fileReader.onloadend = () =>{
            this.setState({image: file,imageUrl: fileReader.result })
        };

        if (file){
            fileReader.readAsDataURL(file)
        }

    }


    handlesubmit(e){
        e.preventDefault();
        let formData = new FormData();
        formData.append("image[img_title]",this.state.img_title);
        formData.append("image[img_desc]", this.state.img_desc);
        formData.append("image[img_location]", this.state.img_location);
        formData.append("image[date_taken]", this.state.date_taken);
        formData.append("image[category]",this.state.category);
        formData.append("image[img]", this.state.image);

        return this.props.createimg(this.props.UserId,formData)
            .then(() => this.setState({show: false}))
    }


    update(type) {
        return (e) => (
            this.setState({[type]: e.target.value})
        )
    }

    render() {
        let dropzone;
        let image;
        let form;
        if (this.state.image === ""){
            dropzone = (<input type="file" onChange={this.updatefile}/>)
            image = (<div></div>)
        }else{
            debugger;
            dropzone=(   <div className="new-image-form">
                             <div className="new-img-form-container">
                                <form onSubmit={this.handlesubmit}>
                                    <label>Title</label><br/>
                                    <input type="text" onChange={this.update("img_title")}/><br/>
                                    <label>Description</label><br/>
                                    <input type="text" onChange={this.update("img_desc")}/><br/>
                                    <label>Location:</label><br/>
                                    <input type="text" onChange={this.update("img_location")}/><br/>
                                    <label>Date:</label><br/>
                                    <input type="text" onChange={this.update("date_taken")}/><br/>
                                    <label>Category:</label><br/>
                                    <input type="text" onChange={this.update("category")}/><br/>
                                    <input type="submit" value="Upload"/>
                                </form>
                            </div>
                        </div>);
            image= (<img width="400" height="500" src={this.state.imageUrl}/>)


        }
        return (
            <Modal className="upload-modal" isOpen={this.state.show} onRequestClose={this.closemodal}>
                {/*<Link to="/profile" onClick={this.closemodal}><i className="fas fa-times"></i></Link>*/}
                <div className="upload-image">
                    {image}
                    {dropzone}
                </div>
            </Modal>
        )
    }
}

export default Upload;