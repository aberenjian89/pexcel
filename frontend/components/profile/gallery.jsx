import React from 'react'


class Gallery extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        let images =[];
        let flag =false;
        let fclass ="";
        if (this.props.UserImgs){
            debugger;
            images =Object.values(this.props.UserImgs).map((image)=>{
                if (flag){
                    fclass="user-figure1";
                    flag= false;
                }else{
                    fclass="user-figure2";
                    flag=true
                }
                return(
                    <figure key={image.id} className={fclass}>
                        <img className="user- figure-img" src={image.img_url}/>
                    </figure>
                );
            });
        }
        return (
            <div className="user-gallery-container">
                <div className="user-gallery">
                    <main className="user-main">
                        {images}
                    </main>
                </div>
            </div>
        )
    }
}

export default Gallery;