/* eslint-disable */
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
// import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
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
  

class Addschool extends React.Component {
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
  add_name(){
    console.log('add_school');
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
      6000
    );
  }
  render() {
    const { classes } = this.props;
    return (
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>{"Add New School"}</h4>
          <p className={classes.cardCategoryWhite}>
            Write here then find on sidebar{" "}
          </p>
        </CardHeader>
        <CardBody>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={9}>
                <CustomInput
                  labelText="Add school Name"
                  id="add_school"
                  formControlProps={{
                  fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <script>var add_school = document.getElementById('add_school');</script>
                <Button
                  fullWidth
                  color="primary"
                  onClick={this.add_name.bind(this)}
                >
                  Add
                </Button>
                <Button
                  fullWidth
                  color="danger"                  
                >
                  Refresh
                </Button>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={10} lg={8}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <Snackbar
                      place="br"
                      color="info"
                      icon={AddAlert}
                      message="loading..."
                      open={this.state.br}
                      closeNotification={() => this.setState({ br: true })}
                      close
                    />
                  </GridItem>
                </GridContainer>
              </GridItem>
            </GridContainer>
          </form>
        </CardBody>
      </Card>
    );
  }
}
export default withStyles(styles)(Addschool);
