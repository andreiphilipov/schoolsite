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
// import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
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
    fSubmt = (e) => {
        e.preventDefault();
        console.log('try');

        let datas = this.state.datas;
        let name = this.refs.name.value;
        let address = this.refs.address.value;

        let data = {
            name, address
        }
    }
    render() {
        const { classes } = this.props;
        return (
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
                            <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    labelText="User name"
                                    id="user_name"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
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
                                    onClick={""}
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
        );
    }
}
export default withStyles(dashboardStyle)(Login);
