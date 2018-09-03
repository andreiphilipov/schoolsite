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

class InputSchool extends React.Component {
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

  controllSubmit() {

    var xhr = new XMLHttpRequest();
    var url = "http://localhost:3000/api/contact";
    var school_name = document.getElementById('school_name').value
    var date_year = document.getElementById('date_year').value
    var date_month = document.getElementById('date_month').value
    var date_week = document.getElementById('date_week').value
    var euro_ele = document.getElementById('euro_ele').value
    var euro_heat = document.getElementById('euro_heat').value
    var euro_water = document.getElementById('euro_water').value
    var kwh_heat = document.getElementById('kwh_heat').value
    var kwh_water = document.getElementById('kwh_water').value
    var liter_water = document.getElementById('liter_water').value

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var json = JSON.parse(xhr.responseText);
      }
    };
    var data = JSON.stringify({"school_name": school_name, "date_year":date_year, "date_month":date_month, "date_week":date_week, "euro_ele":euro_ele, "euro_heat":euro_heat, "euro_water":euro_water, "kwh_heat":kwh_heat, "kwh_water":kwh_water, "liter_water":liter_water});
    xhr.send(data);
  }

  render() {
    const { classes } = this.props;
    return (
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>{"Input School Data"}</h4>
          <p className={classes.cardCategoryWhite}>
            Input here School static data{" "}           
          </p>
        </CardHeader>
        <CardBody>
          <form onSubmit={this.controllSubmit}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8}>
              <CustomInput
                labelText="Schoolname"
                id="school_name"
                formControlProps={{
                fullWidth: true
                }}
              />
            </GridItem>    
          </GridContainer>
          <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Year"
              id="date_year"
              formControlProps={{
              fullWidth: true
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Month"
              id="date_month"
              formControlProps={{
              fullWidth: true
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Week"
              id="date_week"
              formControlProps={{
              fullWidth: true
              }}
            />
          </GridItem>               
          </GridContainer>
          <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Electricity ($)"
              id="euro_ele"
              formControlProps={{
              fullWidth: true
            }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Heating ($)"
              id="euro_heat"
              formControlProps={{
              fullWidth: true
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="water ($)"
              id="euro_water"
              formControlProps={{
              fullWidth: true
              }}
            />
          </GridItem>               
          </GridContainer>
          <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Heating (kwh)"
              id="kwh_heat"
              formControlProps={{
              fullWidth: true
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="water (kwh)"
              id="kwh_water"
              formControlProps={{
              fullWidth: true
            }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="water (L)"
              id="liter_water"
              formControlProps={{
              fullWidth: true
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>

          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
          <Button
                fullWidth
                color="primary"
                type="Submit"
                onClick={() => this.showNotification("bl")}
              >
                Input
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
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
          <Button
                fullWidth
                color="primary"
                type="Reset"
                onClick={() => this.showNotification("tr")}
                type="reset"
              >
                Reset
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

export default withStyles(styles)(InputSchool);
