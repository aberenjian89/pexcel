import React from "react";
import PropTypes from "prop-types";
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
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";
import { debug } from "util";

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
    marginLeft: theme.spacing.unit
  },
  form_content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  upload_area_wrapper: {
    width: "100%",
    display: "flex",
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
  upload_content_wrapper: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
    // marginRight: theme.spacing.unit,
    // marginLeft: theme.spacing.unit,
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
  },
  images_container: {
    height: "400px",
    overflow: "scroll",
    padding: "8px",
    "& img": {
      padding: theme.spacing.unit
    }
  },
  image_form_wrapper: {
    width: "60%",
    height: "400px",
    overflow: "scroll"
  },
  general_container: {
    display: "flex",
    flexFlow: "column wrap",
    width: "100%"
  },
  camera_container: {
    display: "flex",
    flexFlow: "column wrap",
    width: "100%"
  },
  description_container: {
    display: "flex",
    flexFlow: "column wrap",
    width: "100%",
    "& textfield": {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    }
  },
  tags_container: {
    display: "flex",
    flexFlow: "column wrap",
    width: "100%"
  }
});

function getSteps() {
  return ["Select photos", "Edit Information", "Review"];
}

const Licenses = [
  {
    value: "public_domain",
    label: "Public Domain"
  },
  {
    value: "creative_common",
    label: "Creative Common"
  },
  {
    value: "gnu_public_license",
    label: "GNU Public License"
  }
];

class UploadComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      activeStep: 0,
      completed: {},
      images: [],
      expanded: "general",
      image_selected: {},
      index_selected: null
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
    this.activePanel = this.activePanel.bind(this);
    this.handleImageSelection = this.handleImageSelection.bind(this);
    this.handleImageFormChange = this.handleImageFormChange.bind(this);
  }

  totalSteps() {
    getSteps().length;
  }

  imageHandleReader(img) {
    let url = URL.createObjectURL(img);
    return url;
  }

  handleImageFormChange(e, name, subname) {
    let newstate = JSON.parse(JSON.stringify(this.state));
    switch (name) {
      case "general":
        newstate.image_selected.general[subname] = e.currentTarget.value;
        this.setState({
          image_selected: newstate.image_selected
        });
        break;
      case "camera":
        newstate.image_selected.camera[subname] = e.currentTarget.value;
        this.setState({
          image_selected: newstate.image_selected
        });
        break;
      case "description":
        newstate.image_selected.description = e.currentTarget.value;
        this.setState({
          image_selected: newstate.image_selected
        });
      default:
        break;
    }
  }

  activePanel(e, panel) {
    this.setState({
      expanded: panel
    });
  }

  handleImageSelection(e, key, img) {
    if (this.state.index_selected != null) {
      let arr = [];
      arr = this.state.images.slice();
      let file = new File(
        [arr[this.state.index_selected].file],
        this.state.image_selected.general.name
      );
      arr[this.state.index_selected] = this.state.image_selected;
      arr[this.state.index_selected].file = file;
      this.setState({
        images: [...arr],
        image_selected: img,
        index_selected: key
      });
    } else {
      this.setState({
        image_selected: img,
        index_selected: key
      });
    }
  }

  handleFiles(e) {
    e.preventDefault();
    if (e.currentTarget.files) {
      let files = Object.values(e.currentTarget.files);
      let arr = [];
      for (let i = 0; i < files.length; i++) {
        let img = {
          file: files[i],
          general: {
            name: files[i].name,
            owner: this.props.CurrentUser.username,
            license: Licenses[0].value
          },
          camera: {
            make: "",
            model: "",
            focal_length: "",
            dimension: ""
          },
          description: "",
          tags: []
        };
        arr.push(img);
      }
      this.setState({
        images: [...arr],
        image_selected: arr[0],
        index_selected: 0
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
          <div className={classes.upload_area_wrapper}>
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
          </div>
        );
      case 1:
        return (
          <div className={classes.upload_content_wrapper}>
            <div className={classes.images_container}>
              {this.state.images.map((img, key) => {
                return (
                  <div key={key}>
                    <img
                      src={this.imageHandleReader(img.file)}
                      width="150"
                      height="150"
                      onClick={e => this.handleImageSelection(e, key, img)}
                    />
                  </div>
                );
              })}
            </div>
            <div className={classes.image_form_wrapper}>
              <div className={classes.root}>
                <ExpansionPanel
                  expanded={this.state.expanded === "general"}
                  onChange={e => this.activePanel(e, "general")}
                >
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subtitle1">General</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <div className={classes.general_container}>
                      <TextField
                        label="Name"
                        type="text"
                        name="name"
                        value={this.state.image_selected.general.name}
                        margin="dense"
                        varient="outlined"
                        onChange={e =>
                          this.handleImageFormChange(e, "general", "name")
                        }
                      />
                      <TextField
                        label="Owner"
                        type="text"
                        name="owner"
                        value={this.state.image_selected.general.owner}
                        margin="dense"
                        disabled
                        varient="outlined"
                        onChange={e =>
                          this.handleImageFormChange(e, "general", "owner")
                        }
                      />
                      <TextField
                        label="License"
                        select
                        type="text"
                        name="License"
                        margin="dense"
                        varient="outlined"
                        value={this.state.image_selected.general.license}
                        helperText="Type of Licenses"
                        onChange={e =>
                          this.handleImageFormChange(e, "general", "license")
                        }
                      >
                        {Licenses.map((license, key) => (
                          <MenuItem key={key} value={license.value}>
                            {license.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                  expanded={this.state.expanded === "camera"}
                  onChange={e => this.activePanel(e, "camera")}
                >
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subtitle1">Camera</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <div className={classes.camera_container}>
                      <TextField
                        label="Make"
                        type="text"
                        name="make"
                        value={this.state.image_selected.camera.make}
                        margin="dense"
                        varient="outlined"
                        onChange={e =>
                          this.handleImageFormChange(e, "camera", "make")
                        }
                      />
                      <TextField
                        label="Model"
                        type="text"
                        name="model"
                        value={this.state.image_selected.camera.model}
                        margin="dense"
                        varient="outlined"
                        onChange={e =>
                          this.handleImageFormChange(e, "camera", "model")
                        }
                      />
                      <TextField
                        label="Focal Length"
                        type="text"
                        name="focal_length"
                        value={this.state.image_selected.camera.focal_length}
                        margin="dense"
                        varient="outlined"
                        onChange={e =>
                          this.handleImageFormChange(
                            e,
                            "camera",
                            "focal_length"
                          )
                        }
                      />
                      <TextField
                        label="Dimension"
                        type="text"
                        name="dimension"
                        value={this.state.image_selected.camera.dimension}
                        margin="dense"
                        varient="outlined"
                        onChange={e =>
                          this.handleImageFormChange(e, "camera", "dimension")
                        }
                      />
                    </div>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                  expanded={this.state.expanded === "description"}
                  onChange={e => this.activePanel(e, "description")}
                >
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subtitle1">Description</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <div className={classes.description_container}>
                      <TextField
                        label="Description"
                        multiline
                        rows="2"
                        rowsMax="4"
                        value={this.state.image_selected.description}
                        className={classes.description_container.textField}
                        margin="normal"
                        helperText=""
                        variant="outlined"
                        onChange={e =>
                          this.handleImageFormChange(
                            e,
                            "description",
                            "description"
                          )
                        }
                      />
                    </div>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                  expanded={this.state.expanded === "tags"}
                  onChange={e => this.activePanel(e, "tags")}
                >
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subtitle1">Tags</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <div className={classes.tags_container}>
                      <TextField
                        label="Tags"
                        type="text"
                        name="dimension"
                        helperText="Add a Tag"
                        margin="dense"
                        varient="outlined"
                      />
                    </div>
                    <div />
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
            </div>
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
