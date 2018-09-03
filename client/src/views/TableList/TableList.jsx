import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Table from "components/Table/Table.jsx";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

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
        alert("successfully deleted")
        this.props.history.push("/table");
      }
      )

  };

  onEdit(id) {

      // const { dispatch } = this.props;
      // const school_name = this.state.school_name
      // const date_year = this.state.date_year
      // const date_month = this.state.date_month
      // const date_week = this.state.date_week
      // const euro_ele = this.state.euro_ele
      // const euro_heat = this.state.euro_heat
      // const euro_water = this.state.euro_water
      // const kwh_heat = this.state.kwh_heat
      // const kwh_water = this.state.kwh_water
      // const liter_water = this.state.liter_water
    console.log(id)
      // if (school_name && date_year && date_month && date_week && euro_ele && euro_heat && euro_water && kwh_heat && kwh_water && liter_water) 
      // {
      //   this.edit(school_name,date_year,date_month,date_week,euro_ele,euro_heat,euro_water,kwh_heat,kwh_water,liter_water);
      // }
    };
  
    // edit() {
    //   console.log('=1231231131=====')
    //   console.log(avatar);
  
    //   const requestOptions = {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ username, email, avatar })
    //   };
    //   return fetch('http://127.0.0.1:3003/user/' + this.props.match.params.id, requestOptions)
    //     .then(response => {
    //       console.log('===response')
    //       this.props.history.push("/tables");
    //     })
    // };

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
                  tableHead={[
                    "Schoolname",
                    "Year",
                    "Month",
                    "Week",
                    "Electricity($)",
                    "Hear($)",
                    "Water($)",
                    "Heat(kwh)",
                    "Water(kwh)",
                    "Water(L)",
                    "Action"
                    ]}
                  tableData={this.state.data.map((item)=>(
                    [
                      item.school_name,
                      item.date_year,
                      item.date_month,
                      item.date_week,
                      item.euro_ele,
                      item.euro_heat, 
                      item.euro_water, 
                      item.kwh_heat, 
                      item.kwh_water, 
                      item.liter_water,
                      <div>
                      <IconButton
                        className={classes.tableActionButton}
                      >  
                      <Link to={`/edit/${item._id}`}><Edit className={classes.tableActionButtonIcon + " " + classes.edit}/></Link>                                                
                      </IconButton>
                      ,                      
                      <IconButton
                        className={classes.tableActionButton}
                      >
                        <Link><Close className={classes.tableActionButtonIcon + " " + classes.close} onClick = {this.onDelete.bind(this, item._id)}
                        /></Link>
                      </IconButton>
                      </div>
                    ]
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
