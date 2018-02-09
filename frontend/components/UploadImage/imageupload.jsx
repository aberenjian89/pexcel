import React from 'react';


class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({show: true,image: "",imageUrl: "",value: false});

        this.updatefile= this.updatefile.bind(this);
        this.handlesubmit = this.handlesubmit.bind(this);
        this.update = this.update.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }


    componentWillUnmount(){
        if (this.props.Imageerror.length > 0){
            this.props.ClearImageError();
        }
    }


    updatefile(e){
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
        // e.preventDefault();
        // let $el = $(e.target);
        // $el.contextmenu = "  Uploading ...";
        // e.currentTarget.disabled = true ;

        this.setState({value: true});

        let formData = new FormData();
        formData.append("image[img_title]",this.state.img_title);
        formData.append("image[img_desc]", this.state.img_desc);
        formData.append("image[img_location]", this.state.img_location);
        formData.append("image[date_taken]", this.state.date_taken);
        formData.append("image[category]",this.state.category);
        console.log(this.state.image);
        formData.append("image[img]", this.state.image);

        return this.props.createimg(this.props.UserId,formData)
            .then(() => this.props.history.push('/profile'))
    }


    update(type) {
        return (e) => (
            this.setState({[type]: e.target.value})
        )
    }


    renderErrors(){
        let errors="";
        if (this.props.Imageerror.length > 0){
            errors=this.props.Imageerror.map((err,id) => <li key={id}>{err}</li>)
            this.setState({value: false})
        }

        return (
            <ul className="errors">
                {errors}
            </ul>
        )
    }


    render() {
        let action;
        let form;
        if (this.state.image === ""){

            action = (
                <div className="button-container">
                    <label className="fileContainer"><input id="file" type="file" onChange={this.updatefile}/><i className="fas fa-image"></i><span>Choose a file</span></label>
                </div>);
        }else{

            action=(
                <div className="image-form">
                    <img src={this.state.imageUrl}/>
                    <div className="form">
                        <form>
                            <label>Title:</label>
                            <input type="text" onChange={this.update("img_title")}/>
                            <label>Description:</label>
                            <textarea  onChange={this.update("img_desc")}/>
                            <label>Location:</label>
                            <input type="text" onChange={this.update("img_location")}/>
                            <label>Date:</label>
                            <input type="text" onChange={this.update("date_taken")}/>
                            <label>Category:</label>
                            <input type="text" onChange={this.update("category")}/>
                            <button className="upload-button" disabled={this.state.value} onClick={this.handlesubmit}><i className="fas fa-upload"></i><span>Upload</span></button>
                        </form>
                        {this.renderErrors()}
                    </div>
                </div>
            );

        }
        return (
            <div className="upload-container">
                    {action}
            </div>

        )
    }
}

export default ImageUpload;