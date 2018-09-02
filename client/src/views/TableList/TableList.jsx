import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "components/CustomButtons/Button.jsx";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Table from "components/Table/Table.jsx";

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
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch('http://localhost:3000/api/contacts')
      .then(res => res.json())
      .then(res => {
        let data = res;
        this.setState({ data })
      });
  }    
  onDelete(id) {
    const requestOptions = {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
    };

    return fetch('http://127.0.0.1:3000/api/contact/' + id, requestOptions)
      .then(response => {
        this.props.history.push("/");
      }
      )
  };

  onEdit() {
    
  }
    render() 
    {
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
                <CardBody> 
                <Table
                  tableHeaderColor="warning"
                  tableHead={["Schoolname", "Year", "Month", "Week", "Electricity()$", "Hear($)", "Water($)", "Heat(kwh)", "Water(kwh)", "Water(L)"]}
                  tableData={this.state.data.map((item)=>(
                    [item.school_name, item.date_year, item.date_month, item.date_week, item.euro_ele, item.euro_heat, 
                      item.euro_water, item.kwh_heat, item.kwh_water, item.liter_water]
                  )
                )}
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
