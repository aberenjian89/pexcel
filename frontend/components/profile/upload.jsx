import React from 'react';

class Upload extends React.Component{
    constructor(props){
        super(props);
    }



    render(){
        return (
           <div>
               <p onClick={() => document.getElementById('modal').style.display='none'}>
                   Ali
               </p>
           </div>
        )
    }
}


export default Upload;