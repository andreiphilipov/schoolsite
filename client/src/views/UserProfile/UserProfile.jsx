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
    var url = "http://localhost:3000/api/signup";
    var user_job  = document.getElementById('user_job').value
    var first_name = document.getElementById('first_name').value
    var last_name = document.getElementById('last_name').value
    var u_name = document.getElementById('u_pass').value
    var e_mail = document.getElementById('e_mail').value
    var u_pass = document.getElementById('u_pass').value
    var v_pass = document.getElementById('v_pass').value
    var about_user = document.getElementById('about_user').value
    // var user_photo = document.getElementById('user_photo').value

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var json = JSON.parse(xhr.responseText);
      }
    };
    var data = JSON.stringify({"user_job": user_job, "first_name":first_name, "last_name":last_name, "u_name":u_name, "e_mail":e_mail, "u_pass":u_pass, "v_pass":v_pass, "about_user":about_user});
    xhr.send(data);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={8} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>{"SignUp"}</h4>
                <p className={classes.cardCategoryWhite}>
                  Write down User Information{" "}           
                </p>
              </CardHeader>
              <CardBody>          
                <form onSubmit={this.controllSubmit}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="User Job"
                      id="user_job"
                      formControlProps={{
                      fullWidth: true
                      }}
                    />
                  </GridItem>    
                </GridContainer>
                <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="First name"
                    id="first_name"
                    formControlProps={{
                    fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Last name"
                    id="last_name"
                    formControlProps={{
                    fullWidth: true
                    }}
                  />
                </GridItem>                        
                </GridContainer>
                <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="User name"
                    id="u_name"
                    formControlProps={{
                    fullWidth: true
                  }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="E-mail"
                    id="e_mail"
                    formControlProps={{
                    fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Password"
                    id="u_pass"
                    formControlProps={{
                    fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Verify Password"
                    id="v_pass"
                    formControlProps={{
                    fullWidth: true
                    }}
                  />
                  </GridItem>         
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={8}>
                    <CustomInput
                      labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                      id="about_user"
                      formControlProps={{
                      fullWidth: true
                      }}
                      inputProps={{
                      multiline: true,
                      rows: 5
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                  
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                  <Button
                    fullWidth
                    color="primary"
                    type="Submit"
                  >
                    Register
                  </Button>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                  <Button
                    fullWidth
                    color="primary"
                    type="Reset"                
                  >
                    Reset
                  </Button>              
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                  <Card profile>
                    <CardAvatar profile>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        {/* <img src={avatar} alt="..." /> */}
                      </a>
                    </CardAvatar>
                    <CardBody profile>
                      <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
                      <h4 className={classes.cardTitle}>Alec Thompson</h4>
                      <p className={classes.description}>
                        Do not be scared of the truth because we need to restart the
                        human foundation in truth And I love you like Kanye loves Kanye
                        I love Rick Owens’ bed design but the back is...
                      </p>
                        <Button color="primary" round>
                          Follow
                        </Button>
                      </CardBody>
                    </Card>
                  </GridItem>            
                  </GridContainer>
                </form>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>      
    );
  }
}

export default withStyles(styles)(InputSchool);
