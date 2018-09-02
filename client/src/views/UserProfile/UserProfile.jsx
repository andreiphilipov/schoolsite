/* eslint-disable */
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
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
      data:[]
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
  componentDidMount() {
    fetch('http://localhost:3000/api/signups')
      .then(res => res.json())
      .then(res => {
        let data = res;
        this.setState({ data })
      });
  } 
  
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridItem xs={12} sm={12} md={12}>
      <Card>
        <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>{"SignUp"}</h4>
        <p className={classes.cardCategoryWhite}>
            Here are our site users{" "}           
        </p>
        </CardHeader>
        <CardBody> 
        <GridContainer>
        {this.state.data.map((item, i) =>(
          <GridItem xs={12} sm={12} md={3}>
          if ({item.img == ""}) {
            item.img = "no photo"
          }
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src="{item.img}" alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>{item.user_job}</h6>
              <h4 className={classes.cardTitle}>{item.first_name}{item.last_name}</h4>
              <p className={classes.description}>
                {item.about_user}
              </p>

              {/* <Button color="primary" round>
                Follow
              </Button> */}
            </CardBody>
            </Card>
          </GridItem>
        ))}
        </GridContainer>
        </CardBody>
        </Card>
        </GridItem>
      </div>      
    );
  }
}

export default withStyles(styles)(InputSchool);
