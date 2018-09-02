import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridItem from "components/Grid/GridItem.jsx";
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
    render() 
    {
      const { classes } = this.props;
      const api = this.state.data.map((item, key)=>{
        return
       <tr key={key}>
          <td>{key+1}</td>
          <td>{item.school_name}</td>
          <td>{item.date_year}</td>
          <td>{item.date_month}</td>
          <td>{item.date_week}</td>
          <td>{item.euro_ele}</td>
          <td>{item.euro_heat}</td>
          <td>{item.euro_water}</td>
          <td>{item.kwh_heat}</td>
          <td>{item.kwh_water}</td>
          <td>{item.liter_water}</td>
        </tr>
      })
      
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
                  <div>                
                  <table>
                    <thead>
                      <th>No</th>
                      <th>Schoolname</th>
                      <th>Year</th>
                      <th>Month</th>
                      <th>Week</th>
                      <th>Electricity($)</th>
                      <th>Heat($)</th>
                      <th>Water($)</th>
                      <th>Heat(kwh)</th>
                      <th>Water(kwh)</th>
                      <th>Water(L)</th>
                      <th>Action</th>
                    </thead>
                    <tbody>
                      {this.state.data.map((item, i) =>(
                        <tr>
                          <td>{i+1}</td>
                          <td>{item.school_name}</td>
                          <td>{item.date_year}</td>
                          <td>{item.date_month}</td>
                          <td>{item.date_week}</td>
                          <td>{item.euro_ele}</td>
                          <td>{item.euro_heat}</td>
                          <td>{item.euro_water}</td>
                          <td>{item.kwh_heat}</td>
                          <td>{item.kwh_water}</td>
                          <td>{item.liter_water}</td>
                          <td></td>
                        </tr>                        
                      ))}                      
                    </tbody>
                  </table>
                  </div>
                </CardBody>
              </Card>
            </GridItem>
          </CardBody>
        </Card>
      );
    }
  }

  export default withStyles(styles)(TableList);
