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
import Divider from '@material-ui/core/Divider';






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
      flexDirection: "column",
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
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
        justifyContent: "space-between",
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit

    },
    textField_actions_register:{
        display: "flex",
        justifyContent: "flex-end",
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit
    }
});

class AuthComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            type: null,
            remember: false,
            username: "",
            email: "",
            password: ""

        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleAuthSwitch = this.handleAuthSwitch.bind(this)
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

    handleChange(e){
        if (this.state.remember){
            this.setState({
                remember: false
            })
        }else{
            this.setState({
                remember: true
            })
        }
    }

    handleInput(e,name){
        this.setState({
            [name]: e.currentTarget.value
        })
    }

    handleLogin(e){
        e.preventDefault();
        let data = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.LoginUser(data)
            .then((user) => this.handleClose())
    }

    handleRegister(e){
        e.preventDefault();
        let data = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        };
        this.props.RegisterUser(data)
            .then((user) => this.handleClose())
    }

    handleAuthSwitch(e){
        e.preventDefault()
        if (this.state.type == 'Sign_In'){
            this.setState({
                type: 'Sign_Up'
            })
        }else{
            this.setState({
                type: 'Sign_In'
            })
        }
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
                        {this.state.type == 'Sign_In' && (
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
                                    onChange={(e)=> this.handleInput(e,"email")}
                                />
                                <TextField
                                    required
                                    label="Password"
                                    className={classes.textField}
                                    type="password"
                                    name="password"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={(e)=> this.handleInput(e,"password")}
                                />
                            </form>
                            <div className={classes.textField_actions}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.remember}
                                            onChange={(e)=>this.handleChange(e)}
                                            color="default"
                                        />
                                    }
                                   label="Remember my username"
                                />
                                <Button size="large" onClick={(e)=> this.handleLogin(e)}>
                                    Login
                                </Button>
                            </div>
                            <Divider/>
                            <div className={classes.textField_actions}>
                                <Typography className={classes.typography_subject}>
                                    Don't have an account?
                                </Typography>
                                <Button size="large" onClick={(e)=> this.handleAuthSwitch(e)}>
                                    Sign Up
                                </Button>
                            </div>
                        </div>
                        )}
                        {this.state.type == 'Sign_Up' && (
                            <div>
                                <form className={classes.textField_group}>
                                    <TextField
                                        required
                                        label="Username"
                                        className={classes.textField}
                                        type="text"
                                        name="username"
                                        autoComplete="username"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={(e)=> this.handleInput(e,"username")}
                                    />
                                    <TextField
                                        required
                                        label="Email"
                                        className={classes.textField}
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={(e)=> this.handleInput(e,"email")}
                                    />
                                    <TextField
                                        required
                                        label="Password"
                                        className={classes.textField}
                                        type="password"
                                        name="password"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={(e)=> this.handleInput(e,"password")}
                                    />
                                </form>
                                <div className={classes.textField_actions_register}>
                                    <Button size="large" onClick={(e)=> this.handleRegister(e)}>
                                        Register
                                    </Button>
                                </div>
                                <Divider/>
                                <div className={classes.textField_actions}>
                                    <Typography className={classes.typography_subject}>
                                         Have an account?
                                    </Typography>
                                    <Button size="large" onClick={(e)=> this.handleAuthSwitch(e)}>
                                        Sign In
                                    </Button>
                                </div>
                            </div>
                        )}
                    </DialogContent>

                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(AuthComponent);