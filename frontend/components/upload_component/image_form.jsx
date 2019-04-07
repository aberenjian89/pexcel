import React from 'react'
import Input from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";


const styles = theme => ({
    root:{
        width: '100%'
    }
})

class ImageForm extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Typography>
                    General
                </Typography>
                <div>

                </div>
                <Typography>
                    Camera
                </Typography>
                <div>

                </div>
                <Typography>
                    Description
                </Typography>
                <div>

                </div>
                <Typography>
                    Tags
                </Typography>
                <div>

                </div>

            </div>
        )
    }
}

ImageForm.protoTypes = {
    classes: PropTypes.object.isRequired
}


export default withStyles(styles)(ImageForm)