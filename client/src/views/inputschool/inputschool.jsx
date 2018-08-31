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

class Notifications extends React.Component {
  constructor(props) {
    super(props);
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
          <GridContainer>
            <GridItem xs={12} sm={12} md={8}>
              <CustomInput
                labelText="schoolname"
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
              labelText="2018"
              id="date_year"
              formControlProps={{
              fullWidth: true
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="month"
              id="date_month"
              formControlProps={{
              fullWidth: true
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="week"
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
              id="euro_heating"
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
          <GridItem xs={12} sm={12} md={4}>
            
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            
            
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
          <Button color="primary" round onclick="submit()">
                Input
          </Button>         
          </GridItem>  
          </GridContainer>
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(styles)(Notifications);
