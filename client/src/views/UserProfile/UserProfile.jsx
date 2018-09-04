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
    fetch('http://localhost:3000/api/signups')
      .then(res => res.json())
      .then(res => {
        let data = res;
        this.setState({ data })
      });
      console.log(this.state.data);
  }    
  onDelete(id) {
    console.log(id)
    const requestOptions = {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
    };
    return fetch('http://127.0.0.1:3000/api/signup/' + id, requestOptions)
      .then(response => {
        alert("successfully deleted")
        this.props.history.push("/user");
      }
    )
  };

  render() 
    {
      const { classes } = this.props;
      return (
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>User Table</h4>
            <p className={classes.cardCategoryWhite}>
              It shows all of the user's information.{" "}
            </p>
          </CardHeader>
          <CardBody>
            <GridItem xs={12} sm={12} md={12}>
              <Card>                
                <CardBody> 
                <Table
                  tableHeaderColor="warning"
                  tableHead={[
                    "No",
                    "Company",
                    "Username",
                    "Email-address",
                    "First name",
                    "Last name",
                    "Password",
                    "Credit Card",
                    "Edit",   
                    "Remove"                 
                    ]}
                  tableData={this.state.data.map((item,i)=>(
                  [
                    i+1,
                    item.com_name,
                    item.user_name,
                    item.email_address,
                    item.first_name,
                    item.last_name,
                    item.user_pwd,
                    item.card_num,                    
                    <IconButton
                      className={classes.tableActionButton}
                    >  
                    <Link to={`/edit/${item._id}`}><Edit className={classes.tableActionButtonIcon + " " + classes.edit}/></Link>                                                
                    </IconButton>
                    ,                     
                    <IconButton
                      className={classes.tableActionButton}
                    >
                      <Close className={classes.tableActionButtonIcon + " " + classes.close} onClick = {this.onDelete.bind(this, item._id)}
                      />
                    </IconButton>
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
