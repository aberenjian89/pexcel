import React from 'react';

class ImageView extends React.Component{
    constructor(props){
        super(props);
        this.state= this.props.image || {};

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.delete = this.delete.bind(this)
    }


    componentDidMount(){
        this.props.fetchimg(this.props.imageid);

    }

    componentWillReceiveProps(nextProps){
        this.setState(nextProps.image)
    }

    update(type){
        return (e) =>{
            this.setState({[type]: e.target.value})
        }
    }

    handleSubmit(e){
        e.preventDefault();
        return this.props.updateuserimg(this.props.UserId.id,this.state.id,this.state)
            .then(() => this.props.history.push('/profile'))
    }


    delete(e){
        e.preventDefault();
        return this.props.deleteuserimg(this.props.UserId.id,this.props.image.id)
            .then(() => this.props.history.push('/profile'))
    }


    render(){



        let display;
        if (!this.props.UserId){
            display=(
                <div className="info">
                    <div className="image-info">
                        <div className="author-info">
                            <img src={this.props.image.author_img}/>
                            <label>{this.props.image.author_username}</label>
                        </div>
                        <div>
                            <label>Title: <span>{this.props.image.img_title}</span></label>
                        </div>
                        <div>
                            <label>Description: <span>{this.props.image.img_desc}</span></label>
                        </div>
                        <div>
                            <label>Location: <span>{this.props.image.img_location}</span></label>
                        </div>
                        <div>
                            <label>Date Taken: <span>{this.props.image.date_taken}</span></label>
                        </div>
                        <div>
                            <label>Category: <span>{this.props.image.category}</span></label>
                        </div>
                    </div>
                </div>)
        }else{
            display=(
                <div className="update_form">
                    <form onSubmit={this.handleSubmit}>
                        <label>Title</label>
                        <input type="text" onChange={this.update("img_title")} value={this.state.img_title}/>
                        <label>Description</label>
                        <textarea  onChange={this.update("img_desc")} value={this.state.img_desc}/>
                        <label>Location:</label>
                        <input type="text" onChange={this.update("img_location")} value={this.state.img_location}/>
                        <label>Date:</label>
                        <input type="text" onChange={this.update("date_taken")} value={this.state.date_taken}/>
                        <label>Category:</label>
                        <input type="text" onChange={this.update("category")} value={this.state.category}/>
                        <div className="button-collection">
                            <button><i className="fas fa-edit"></i><span>Update</span></button>
                            <button onClick={this.delete}><i className="fas fa-trash-alt"></i><span>Delete</span></button>
                        </div>
                    </form>
                </div>

            )
        }

        return(

            <div className="image-view-container">
                <img src={this.props.image.img_url}/>
                {display}
            </div>
        )
    }

}

export default ImageView;