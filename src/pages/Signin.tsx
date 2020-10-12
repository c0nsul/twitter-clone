import React from 'react';
import {Button, makeStyles, Typography} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutlined";
import MessageIcon from "@material-ui/icons/MessageOutlined";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        height: '100vh',
    },
    blueSide:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#71c9f8",
        flex: "0 0 50%",
        overflow: 'hidden',
        position: 'relative'
    },
    blueSideBigIcon:{
        position: 'absolute',
        left:'60%',
        top:'47%',
        transform: 'translate(-50%,-50%)',
        width: '250%',
        height: '250%',
    },
    blueSideListInfo: {
        position: 'relative',
        listStyle:'none',
        margin: 0,
        padding: 0,
        width: 380,
        '& h6': {
            display: "flex",
            alignItems: "center",
            color: "white",
            fontWeight: 700,
            fontSize: 20,
        },
    },
    blueSideListInfoItem: {
        marginBottom: 40,
    },
    blueSideListInfoIcon: {
        marginRight: 15,
        fontSize:32,
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
        background: "#71c9f8",
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
            <section className={classes.blueSide}>
                <TwitterIcon color="primary" className={classes.blueSideBigIcon}/>
                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6" >
                            <SearchIcon className={classes.blueSideListInfoIcon} />
                            Follow your interests.
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6" >
                            <PeopleOutlineIcon className={classes.blueSideListInfoIcon} />
                            Hear what people are talking about.</Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6" >
                            <MessageIcon className={classes.blueSideListInfoIcon} />
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
