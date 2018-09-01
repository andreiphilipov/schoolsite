/* eslint-disable */
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import CustomInput from "components/CustomInput/CustomInput.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

class AddSchool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tl: false,
      tc: false,
      tr: false,
      bl: false,
      bc: false,
      br: false
    };
    this.lertTimeout = null;
  }
  componentWillUnmount() {
    this.clearAlertTimeout();
  }
  clearAlertTimeout() {
    if (this.alertTimeout !== null) {
      clearTimeout(this.alertTimeout);
    }
  }
  showNotification(place) {
    var x = [];
    x[place] = true;
    this.setState(x);
    this.clearAlertTimeout();
    this.alertTimeout = setTimeout(
      function () {
        x[place] = false;
        this.setState(x);
      }.bind(this),
      1000
    );
  }
  handleSubmit() {
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:3000/api/name";
    var name = document.getElementById('add_school').value
    
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var json = JSON.parse(xhr.responseText);  
    }
    };
    var data = JSON.stringify({"name": name});
    xhr.send(data);
  }
  render() {
    const { classes } = this.props;
    return (
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Add school</h4>
          <p className={classes.cardCategoryWhite}>
            You can write here and find them on left side.{" "}
          </p>
        </CardHeader>
        <CardBody>
          <form onSubmit={this.handleSubmit}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={9} style={{ textAlign: "center" }}>
              <CustomInput
                labelText="Add schoolname"
                id="add_school"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2} style={{ textAlign: "center" }}>
              <Button
                fullWidth
                color="primary"
                type="Submit"
                onClick={() => this.showNotification("bl")}
              >
                Add
              </Button>
              <Snackbar
                place="bl"
                color="info"
                icon={AddAlert}
                message="Successfully added."
                open={this.state.bl}
                closeNotification={() => this.setState({ bl: false })}
                close
              />
              <Button
                fullWidth
                color="danger"
                type="submit"
                onClick={() => this.showNotification("tr")}
                type="reset"
              >
                Refresh
                  </Button>
              <Snackbar
                place="tr"
                color="info"
                icon={AddAlert}
                message="Loding. Please wait a few minutes."
                open={this.state.tr}
                closeNotification={() => this.setState({ tr: false })}
                close
              />
            </GridItem>

          </GridContainer>
          </form>
        </CardBody>

      </Card>

    );
  }
}

export default withStyles(styles)(AddSchool);
