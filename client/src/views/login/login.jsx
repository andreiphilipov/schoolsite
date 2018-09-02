/* eslint-disable */
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import dashboardStyle from "../../assets/jss/material-dashboard-react/views/dashboardStyle";
import { Checkbox } from "@material-ui/core";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.super = {
            title:"",
            act: 0,
            index: '',
            datas:[]
        };
    }
    componentDidmount(){
        this.refs.name.focus();
    } 
    controllSubmit() {
        var xhr = new XMLHttpRequest();
        var url = "http://localhost:3000/api/login";
        var user_name = document.getElementById('user_name').value
        var user_pass = document.getElementById('user_pass').value
    
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          var json = JSON.parse(xhr.responseText);
          }
        };
        var data = JSON.stringify({"user_name": user_name, "user_pass": user_pass});
        xhr.send(data);
      }
    render() {
        const { classes } = this.props;
        return (
            <GridItem xs={12} sm={12} md={6}>
            <Card>
                <CardHeader color="primary">
                    <h4 className={classes.cardTitleWhite}>{"Login"}</h4>
                    <p className={classes.cardCategoryWhite}>
                        Welcome to visit our schoolsite{" "}
                    </p>
                </CardHeader>
                <CardBody>
                    <form>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                                <CustomInput
                                    labelText="Username"
                                    id="user_name"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12}>
                                <CustomInput
                                    labelText="Password"
                                    id="user_pass"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                />
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <Checkbox></Checkbox>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3}>
                                <Button
                                    fullWidth
                                    color="primary">
                                    Login
                                </Button>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3}>
                                <Button
                                    fullWidth
                                    color="danger"
                                    onClick={this.controllSubmit}
                                >
                                    Signup
                                </Button>
                            </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={10} lg={8}>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={4}>
                                        <Snackbar
                                            place="br"
                                            color="info"
                                            icon={AddAlert}
                                            message="loading..."
                                            closeNotification={() => this.setState({ br: true })}
                                            close
                                        />
                                    </GridItem>
                                </GridContainer>
                            </GridItem>
                        </GridContainer>
                    </form>
                </CardBody>
            </Card>
            </GridItem>
        );
    }
}
export default withStyles(dashboardStyle)(Login);
