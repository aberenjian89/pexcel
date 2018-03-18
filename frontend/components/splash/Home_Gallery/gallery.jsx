import React from 'react';

class Gallery extends React.Component{
    constructor(props) {
        super(props);
        this.state = {images:this.props.images};
    }

    componentDidMount(){
        if (this.state.images.length <= 0){
            this.props.fetchimages();
        }
    }


    componentWillReceiveProps(nextProps){
        this.setState({images:nextProps.images});
    }


    render(){
        let images =[];
        let flag =false;
        let fclass ="";
        if (this.state.images){
            images =this.state.images.map((image)=>{
                if (flag){
                    fclass="figure1";
                    flag= false;
                }else{
                    fclass="figure2";
                    flag=true
                }
                return(
                        <figure key={image.id} className={fclass}>
                            <img className="figure-img" src={image.img_url}/>
                        </figure>
                );
            });
        }

        return (
            <div className="gallery">
                <main className="main">
                    {images}
                </main>
            </div>
        );
    }
}



export default Gallery;