import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";

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

class TableList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  render() {
    const { classes } = this.props;
    return (
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Static Table</h4>
          <p className={classes.cardCategoryWhite}>
            It shows every school's supplyment and lock.{" "}
          </p>
        </CardHeader>
        <CardBody>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="danger">
                <h4 className={classes.cardTitleWhite}>Supplyment</h4>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="danger"
                  tableHead={["Schoolname", "Year", "Month", "Week", "Electricity($)", "Heat($)", "Water($)", "Heat(kwh)", "Water(kwh)", "Water(L)"]}
                  tableData={[
                    ["Dakota Rice", "12", "78", "25", "34", "77", "17", "22", "77", "66"]                    
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </CardBody>

      </Card>

    );
  }
}

export default withStyles(styles)(TableList);
