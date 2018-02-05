import React from 'react';
import Modal from 'react-modal';

class ImageView extends React.Component{
    constructor(props){
        super(props);
        this.state= {show: true,
            id: this.props.image.id,
            img_title: this.props.image.img_title,
            img_location: this.props.image.img_location,
            img_desc: this.props.image.img_desc,
            category: this.props.image.category,
            date_taken: this.props.image.date_taken};
        this.close = this.close.bind(this);
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){

    }

    close(){
        this.setState({show: false})
    }

    update(type){
        return (e) =>{
            this.setState({[type]: e.target.value})
        }
    }

    handleSubmit(e){
        e.preventDefault();
        debugger
        let image ={
            img_title: this.state.img_title,
            img_location: this.state.img_location,
            img_desc: this.state.img_desc,
            category: this.state.category,
            date_taken: this.state.date_taken};
        return this.props.updateuserimg(this.props.UserId.id,this.state.id,image)
            .then(() => this.close())
    }


    render(){
        let display;
        debugger;
        if (this.props.viewtype === 'Read'){
            display=(
                <div>
                    <img src={this.props.image.img_url} width="450" height="500"/>
                    <span>Title: {this.props.image.img_title}</span>
                    <span>Description: {this.props.image.img_desc}</span>
                    <span>Location: {this.props.image.img_location}</span>
                    <span>Date Taken: {this.props.image.date_taken}</span>
                    <span>Category: {this.props.image.category}</span>
                 </div>)
        }else{
            display=(
                <div>
                    <img src={this.props.image.img_url} width="450" height="500"/>
                    <form onSubmit={this.handleSubmit}>
                        <label>Title</label><br/>
                        <input type="text" onChange={this.update("img_title")} value={this.state.img_title}/><br/>
                        <label>Description</label><br/>
                        <input type="text" onChange={this.update("img_desc")} value={this.state.img_desc}/><br/>
                        <label>Location:</label><br/>
                        <input type="text" onChange={this.update("img_location")} value={this.state.img_location}/><br/>
                        <label>Date:</label><br/>
                        <input type="text" onChange={this.update("date_taken")} value={this.state.date_taken}/><br/>
                        <label>Category:</label><br/>
                        <input type="text" onChange={this.update("category")} value={this.state.category}/><br/>
                        <input type="submit" value="Update"/>
                    </form>
                </div>

            )
        }





        return(
        <Modal isOpen={this.state.show} onRequestClose={this.close}>
            {display}
        </Modal>
        )
    }

}

export default ImageView;