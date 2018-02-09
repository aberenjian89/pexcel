import React from 'react';

class ImageView extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
           img_title: this.props.image.img_title,
           img_desc: this.props.image.img_desc,
           img_location: this.props.image.img_location,
            img_url: this.props.image.img_url,
            img_category: this.props.image.category,
            author_id : this.props.image.author_id,
            date_taken: this.props.image.date_taken,
            value:false
        }) || {};
        //this.state = this.props.image || {}
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.delete = this.delete.bind(this);
        this.handlefollow = this.handlefollow.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }


    componentDidMount(){
        this.props.fetchimg(this.props.imageid)

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
        this.setState({value: true});
        return this.props.updateuserimg(this.props.CurrentUser.id,this.state.id,this.state)
            .then(() => this.props.history.push('/profile'))
    }

    handlefollow(isFollow){
        if (isFollow){
           return () => this.props.removeFollow(this.props.image.author_id)
        }else{
           return () => this.props.createFollow(this.props.image.author_id)
        }
    }


    renderErrors(){
        let errors="";

        if (this.props.Imageerror.length > 0){
            errors=this.props.Imageerror.map((err,id) => <li key={id}>{err}</li>)
            if (this.state.value !==false)
            {
                this.setState({value: false});

            }

        }


        return (
            <ul className="errors">
                {errors}
            </ul>
        )
    }





    delete(e){
        e.preventDefault();
       this.setState({value: true});
        return this.props.deleteuserimg(this.props.CurrentUser.id,this.props.image.id)
            .then(() => this.props.history.push('/profile'))
    }


    render(){
        let isFollow = this.props.image.follow;
        let display;
        if (this.props.CurrentUser){

            if (this.props.CurrentUser.id === this.props.image.author_id){
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
                                <button className="update-button" disabled={this.state.value}><i className="fas fa-edit"></i><span>Update</span></button>
                                <button className="delete-button" disabled={this.state.value} onClick={this.delete}><i className="fas fa-trash-alt"></i><span>Delete</span></button>
                            </div>
                        </form>
                        {this.renderErrors()}
                    </div>

                )
            }else{

                display=(
                    <div className="info">
                        <div className="image-info">
                            <div className="author-info">
                                <img src={this.props.image.author_img}/>
                                <div className="author-state">
                                    <label>{this.props.image.author_username}</label>
                                    {/*<label>{this.props.image.number_followee} Followers</label>*/}
                                </div>
                            </div>
                            <div className="action-tools">
                                <button  onClick={this.handlefollow(isFollow)} className="follow-button">{isFollow ? "UnFollow" : "Follow"}</button>
                                {/*<button>Like</button>*/}
                            </div>
                            <div className="img-title">
                                <label>Title </label>
                                <span>{this.props.image.img_title}</span>
                            </div>
                            <div className="img-desc">
                                <label>Description</label>
                                <span>{this.props.image.img_desc}</span>
                            </div>
                            <div className="img-location">
                                <label>Location</label>
                                <span>{this.props.image.img_location}</span>
                            </div>
                            <div className="img-date">
                                <label>Date Taken</label>
                                <span>{this.props.image.date_taken}</span>
                            </div>
                            <div className="img-category">
                                <label>Category</label>
                                <span>{this.props.image.category}</span>
                            </div>
                        </div>
                    </div>)
            }
        }else{
            display=(
                <div className="info">
                    <div className="image-info">
                        <div className="author-info">
                            <img src={this.props.image.author_img}/>
                            <div className="author-state">
                                <label>{this.props.image.author_username}</label>
                                {/*<label>{this.props.image.number_followee} Followers</label>*/}
                            </div>
                        </div>
                        <div className="img-title">
                            <label>Title </label>
                            <span>{this.props.image.img_title}</span>
                        </div>
                        <div className="img-desc">
                            <label>Description</label>
                            <span>{this.props.image.img_desc}</span>
                        </div>
                        <div className="img-location">
                            <label>Location</label>
                            <span>{this.props.image.img_location}</span>
                        </div>
                        <div className="img-date">
                            <label>Date Taken</label>
                            <span>{this.props.image.date_taken}</span>
                        </div>
                        <div className="img-category">
                            <label>Category</label>
                            <span>{this.props.image.category}</span>
                        </div>
                    </div>
                </div>)
        }

        return(

            <div className="image-view-container">
                <img className="responsive" src={this.props.image.img_url}/>
                {display}
            </div>
        )
    }

}

export default ImageView;