import React from "react";
import PropTypes, { func } from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Slide from "@material-ui/core/Slide";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Typography from "@material-ui/core/Typography";
import StepLabel from "@material-ui/core/StepLabel";
import GetApp from "@material-ui/icons/GetApp";
import Input from "@material-ui/core/Input";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const styles = theme => ({
  root: {
    // width: '90%',
  },
  button: {
    marginRight: theme.spacing.unit
  },
  completed: {
    display: "inline-block"
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    display: "flex",
    justifyContent: "center"
  },
  form_content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  upload_area: {
    minWidth: "25%",
    minHeight: "250px",
    height: "70%",
    width: "70%",
    border: "2px dashed #9e9e9e",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  dialog: {
    minHeight: "300px !important"
  },
  upload_content: {
    "& input": {
      "font-size": "100px",
      position: "absolute",
      left: 0,
      top: 0,
      opacity: 0
    },
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    height: "100px",
    "& div": {
      display: "flex",
      justifyContent: "center"
    }
  }
});

function getSteps() {
  return ["Select photos", "Edit Information", "Review"];
}

class UploadComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      activeStep: 0,
      completed: {},
      images: []
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleStep = this.handleStep.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.completedSteps = this.completedSteps.bind(this);
    this.isLastStep = this.isLastStep.bind(this);
    this.allStepsCompleted = this.allStepsCompleted.bind(this);
    this.getStepContent = this.getStepContent.bind(this);
    this.handleFiles = this.handleFiles.bind(this);
    this.imageHandleReader = this.imageHandleReader.bind(this);
  }

  totalSteps() {
    getSteps().length;
  }

  imageHandleReader(img) {
    let url = URL.createObjectURL(img);
    return url;
  }

  handleFiles(e) {
    e.preventDefault();
    if (e.currentTarget.files) {
      let files = Object.values(e.currentTarget.files);
      this.setState({
        images: [...files]
      });
    }
    this.handleNext();
  }

  componentWillReceiveProps(nextprops) {
    if (nextprops.ModalStatus != this.state.open) {
      this.setState({
        open: nextprops.ModalStatus
      });
    }
  }

  getStepContent(step, props) {
    const { classes } = props;
    switch (step) {
      case 0:
        return (
          <div className={classes.upload_area}>
            <form>
              <div className={classes.upload_content}>
                <div>
                  <GetApp fontSize="large" fontSizeAdjust="100px" />
                </div>
                <div>
                  <input
                    type="file"
                    multiple
                    onChange={e => this.handleFiles(e)}
                  />
                </div>
                <div>
                  <label>Select a file or drag a it here</label>
                </div>
              </div>
            </form>
          </div>
        );
      case 1:
        return (
          <div>
            {this.state.images.map((img, key) => {
              return (
                <div key={key}>
                  <img
                    src={this.imageHandleReader(img)}
                    width="200"
                    height="200"
                  />
                </div>
              );
            })}
          </div>
        );
      case 2:
        return "Step 3: Review your photo(s)";
      default:
        return "Unknown step";
    }
  }

  handleNext() {
    let activeStep;

    if (this.isLastStep() && !this.allStepsCompleted()) {
      // It's the last step, but not all steps have been completed,
      // find the first step that has been completed
      const steps = getSteps();
      activeStep = steps.findIndex((step, i) => !(i in this.state.completed));
    } else {
      activeStep = this.state.activeStep + 1;
    }
    this.setState({
      activeStep
    });
  }

  handleBack() {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  }

  handleStep(step) {
    return () => {
      this.setState({
        activeStep: step
      });
    };
  }

  handleComplete() {
    const { completed } = this.state;
    completed[this.state.activeStep] = true;
    this.setState({
      completed
    });
    this.handleNext();
  }

  handleReset() {
    this.setState({
      activeStep: 0,
      completed: {}
    });
  }

  completedSteps() {
    return Object.keys(this.state.completed).length;
  }

  isLastStep() {
    return this.state.activeStep === this.totalSteps() - 1;
  }

  allStepsCompleted() {
    return this.completedSteps() === this.totalSteps();
  }

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
    this.handleReset();
    this.props.ModalHide();
  }

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <Dialog
        open={this.state.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        fullWidth={true}
        maxWidth="md"
        className={classes.dialog}
      >
        <DialogContent>
          <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <div>
              {this.state.activeStep === steps.length ? (
                <div>
                  <Typography className={classes.instructions}>
                    All steps completed
                  </Typography>
                  <Button onClick={this.handleReset}>Reset</Button>
                </div>
              ) : (
                <div>
                  <div className={classes.instructions}>
                    {this.getStepContent(activeStep, this.props)}
                  </div>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className={classes.backButton}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
}

UploadComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UploadComponent);
