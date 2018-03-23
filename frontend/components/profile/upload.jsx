import React from 'react';

class Upload extends React.Component{
    constructor(props){
        super(props);
        this.closeModal = this.closeModal.bind(this)
    }


   componentDidMount(){
        let modal = $("#modal");
        modal.css('display','block');
    }

    closeModal(){
        debugger;
        this.props.Props.history.push('/profile');
    }




    render(){
        return (
            <div id="modal" className="upload-modal">
                <div className="modal-content">
                    <p onClick={this.closeModal}>Upload</p>
                </div>
            </div>
        )
    }
}


export default Upload;