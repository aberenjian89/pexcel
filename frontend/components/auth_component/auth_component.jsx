import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close'
import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';





function Transition(props) {
    return <Slide direction="up" {...props} />;
}


const styles = theme =>({
    root: {
        width: "100%"
    },
    subject:{
        display: "flex",
        justifyContent: "space-between",
    },
    typography_subject:{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column"
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    textField_group:{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        alignContent: "center"
    },
    textField_actions:{
        display: "flex",
        justifyContent: "space-between"

    }
});

class AuthComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            type: null,
            remember: false,
            login: {
                username: "",
                password: ""
            }
        };
        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.ModalStatus.status !== this.state.open){
            this.setState({
                open: nextProps.ModalStatus.status,
                type: nextProps.ModalStatus.type,
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

    handleChange(){

    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Dialog
                    open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                    fullWidth={true}
                >
                    <DialogContent>
                        <div className={classes.subject}>
                            {this.state.type == 'Sign_In' && (
                                <Typography variant="h5"  className={classes.typography_subject}>
                                    LOG IN TO PEXCEL
                                </Typography>
                            )}
                            {this.state.type == 'Sign_Up' && (
                                <Typography variant="h5"  className={classes.typography_subject}>
                                    SIGN UP TO PEXCEL
                                </Typography>
                            )}
                            <IconButton onClick={this.handleClose}>
                                <CloseIcon/>
                            </IconButton>
                        </div>
                        <div>
                            <form className={classes.textField_group}>
                                <TextField
                                    required
                                    label="Email"
                                    className={classes.textField}
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    margin="normal"
                                    variant="outlined"
                                />
                                <TextField
                                    required
                                    label="Password"
                                    className={classes.textField}
                                    type="password"
                                    name="password"
                                    margin="normal"
                                    variant="outlined"
                                />
                            </form>
                            <div className={classes.textField_actions}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.remember}
                                            onChange={this.handleChange('checkedB')}
                                            value="remember my username"
                                        />
                                    }
                                    label="Remember my username"
                                />
                                <Button>Login</Button>
                            </div>


                        </div>

                        {/*<DialogContentText id="alert-dialog-slide-description">*/}
                            {/*Let Google help apps determine location. This means sending anonymous location data to*/}
                            {/*Google, even when no apps are running.*/}
                        {/*</DialogContentText>*/}
                    </DialogContent>

                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(AuthComponent);