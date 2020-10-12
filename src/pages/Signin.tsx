import React from 'react';
import {Button, makeStyles, Typography} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutlined";
import MessageIcon from "@material-ui/icons/MessageOutlined";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        height: "100vh",
    },
    lightBulb: {
        verticalAlign: "middle",
        marginRight: theme.spacing(1),
    },
    loginBlock: {
        flex: "0 0 50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    button: {
        fontWeight: 700,
    },
    descriptionBlock: {
        background: "#1DA1F2",
        flex: "0 0 50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    descriptionBlockListInfo: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        width: 380,
        "& h6": {
            color: "white",
            fontWeight: 600,
            fontSize: 20,
            display: "flex",
            alignItems: "center",
            marginLeft: 10,
            marginBottom: 20,
        },
    },

    loginBlockIcon: {
        fontSize: 40,
    },
    loginBlockWrapper: {
        width: 380,
    },
    loginBlockTitle: {
        fontWeight: 700,
        fontSize: "32px",
        marginBottom: "40px",
        marginTop: "10px",
    },
}));

function SignIn() {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <section className={classes.descriptionBlock}>
                <ul className={classes.descriptionBlockListInfo}>
                    <li>
                        <Typography variant="h6" >
                            <SearchIcon/>
                            Follow your interests.
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="h6" >
                            <PeopleOutlineIcon/>
                            Hear what people are talking about</Typography>
                    </li>
                    <li>
                        <Typography variant="h6" >
                            <MessageIcon/>
                            Join the conversation.</Typography>
                    </li>
                </ul>
            </section>

            <section className={classes.loginBlock}>
                <div className={classes.loginBlockWrapper}>
                    <TwitterIcon color="primary" className={classes.loginBlockIcon}/>
                    <Typography variant="h4" className={classes.loginBlockTitle}  gutterBottom> See what’s happening in the world right now</Typography>
                    <Typography> <b>Join Twitter today.</b></Typography><br/>
                    <Button style={{marginBottom: 10}} variant="contained" color="primary" fullWidth>
                        Sign up
                    </Button>
                    <Button variant="outlined" color="primary" fullWidth>
                        Login
                    </Button>
                </div>
            </section>
        </div>
    );
}

export default SignIn;
