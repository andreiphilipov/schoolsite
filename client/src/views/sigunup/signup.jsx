import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  

  signupSubmit() {
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:3000/api/signup";
    var com_name = document.getElementById("com_name").value
    var user_name = document.getElementById('user_name').value
    var email_address = document.getElementById('email_address').value
    var first_name = document.getElementById('first_name').value
    var last_name = document.getElementById('last_name').value
    var user_pwd = document.getElementById('user_pwd').value
    var user_p_pwd = document.getElementById('user_p_pwd').value
    var card_num = document.getElementById('card_num').value
    var about_me = document.getElementById('about_me').value
    
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var json = JSON.parse(xhr.responseText);
      }
    };
    var data = JSON.stringify({
      "com_name":com_name,
      "user_name":user_name,
      "email_address":email_address,
      "first_name":first_name,
      "last_name":last_name,
      "user_pwd":user_pwd,
      "user_p_pwd":user_p_pwd,
      "card_num":card_num,
      "about_me":about_me
  });
    xhr.send(data);
  };

  render() {

    const classes = this.props;

    return (
      <form onClick={this.signupSubmit}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                <p className={classes.cardCategoryWhite}>Complete your profile</p>
              </CardHeader>
              <CardBody>
                  <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                      labelText="Company"
                      id="com_name"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText="Username"
                      id="user_name"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Email address"
                      id="email_address"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="First Name"
                      id="first_name"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Last Name"
                      id="last_name"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Password"
                      id="user_pwd"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Password Verify"
                      id="user_p_pwd"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Card number"
                      id="card_num"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                    <CustomInput
                      labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                      id="about_me"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5
                      }}
                    />
                   </GridItem> 
              </CardBody>
              <CardFooter>
                <Button color="primary" type="Submit">Update Profile</Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
                <h4 className={classes.cardTitle}>Alec Thompson</h4>
                <p className={classes.description}>
                  Don't be scared of the truth because we need to restart the
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
    );
  }
}

export default withStyles(styles)(SignUp);
