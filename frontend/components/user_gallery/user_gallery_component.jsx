import React from 'react'
import PropTypes from 'prop-types'
import {FetchUserImages} from './GalleryAPI'
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const style= theme => ({
    root:{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper
    },
    gridList:{
        width: 500,
        height: 450
    }
})

class UserGalleryComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            images: []
        }
        
    }

    componentDidMount(props){
        FetchUserImages()
            .then((res)=>{
                this.setState({
                    images: Object.values(res)
                })
            })
    }

    generateRandomCols(){
        return Math.floor(Math.random() * 3)
    }


    render(){
        const {classes} = this.props
        return(
            <div className={classes.root}>
                <GridList className={classes.gridList} cols={3} cellHeight={160} >
                    {this.state.images.map((img,key)=>(
                        <GridListTile key={key} cols={1}>
                            <img src={img.file} alt={img.name}/>
                        </GridListTile>
                    ))}
                </GridList>
            </div>
            )
    }
}

UserGalleryComponent.propTypes ={
    classes: PropTypes.object.isRequired
}


export default withStyles(style)(UserGalleryComponent)