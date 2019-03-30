import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';


function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
    },
});

class AuthComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
        };
        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.ModalStatus.status !== this.state.open){
            this.setState({
                open: nextProps.ModalStatus.status
            })
        }
    }

    handleOpen(){
        this.setState({ open: true });
    };

    handleClose(){
        this.setState({
            open: false
        });
        this.props.ModalHide()
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <Typography variant="h6" id="modal-title">
                            Text in a modal
                        </Typography>
                        <Typography variant="subtitle1" id="simple-modal-description">
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                        <AuthComponentWrapped />
                    </div>
                </Modal>
            </div>
        );
    }
}

AuthComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

const AuthComponentWrapped = withStyles(styles)(AuthComponent);

export default AuthComponentWrapped;