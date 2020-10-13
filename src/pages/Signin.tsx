import React from 'react';
import {
    Button, FormControl, FormGroup,
    makeStyles, TextField,
    Typography
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutlined";
import MessageIcon from "@material-ui/icons/MessageOutlined";
import {ModalBlock} from "../components/modalBlock";
import theme from "../theme";


export const useStylesSignIn = makeStyles(() => ({
    wrapper: {
        display: "flex",
        height: '100vh',
    },
    blueSide: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#71c9f8",
        flex: "0 0 50%",
        overflow: 'hidden',
        position: 'relative'
    },
    blueSideBigIcon: {
        position: 'absolute',
        left: '60%',
        top: '47%',
        transform: 'translate(-50%,-50%)',
        width: '250%',
        height: '250%',
    },
    blueSideListInfo: {
        position: 'relative',
        listStyle: 'none',
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
        fontSize: 32,
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
    loginSideField: {
        marginBottom: "18px",

    },
    registerField: {
        marginBottom: theme.spacing(3),
    },
    loginFormControl: {
        marginBottom:  theme.spacing(2),
    },
}));

function SignIn() {
    const classes = useStylesSignIn();
    const [visibleModal, setVisibleModal] = React.useState<'login' | 'signUp'>();

    const handleClickOpenSignIn = (): void => {
        setVisibleModal('login');
    };

    const handleClickOpenSignUp = (): void => {
        setVisibleModal("signUp");
    };

    const handleCloseModal = (): void => {
        setVisibleModal(undefined);
    };


    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <TwitterIcon color="primary" className={classes.blueSideBigIcon}/>
                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <SearchIcon className={classes.blueSideListInfoIcon}/>
                            Follow your interests.
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <PeopleOutlineIcon className={classes.blueSideListInfoIcon}/>
                            Hear what people are talking about.</Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <MessageIcon className={classes.blueSideListInfoIcon}/>
                            Join the conversation.</Typography>
                    </li>
                </ul>
            </section>

            <section className={classes.loginBlock}>
                <div className={classes.loginBlockWrapper}>
                    <TwitterIcon color="primary" className={classes.loginBlockIcon}/>
                    <Typography variant="h4" className={classes.loginBlockTitle} gutterBottom> See what’s happening in
                        the world right now</Typography>
                    <Typography> <b>Join Twitter today.</b></Typography><br/>
                    <Button onClick={handleClickOpenSignUp} style={{marginBottom: 10}} variant="contained" color="primary" fullWidth>
                        Sign up
                    </Button>
                    <Button onClick={handleClickOpenSignIn} variant="outlined" color="primary" fullWidth>
                        Login
                    </Button>

                    <ModalBlock
                        visible={visibleModal === 'login'}
                        onClose={handleCloseModal}
                        title="Log in to Twitter"
                        classes={classes}
                    >
                        <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                            <FormGroup aria-label="position" row>
                                <TextField
                                    autoFocus
                                    className={classes.loginSideField}
                                    margin='dense'
                                    id="email"
                                    label="E-mail"
                                    type="email"
                                    fullWidth
                                />
                                <TextField
                                    className={classes.loginSideField}
                                    margin='dense'
                                    id="password"
                                    label="Password"
                                    type="password"
                                    fullWidth
                                />
                            </FormGroup>
                            <Button color="primary" variant="contained" fullWidth>Login</Button>
                        </FormControl>
                    </ModalBlock>


                    <ModalBlock
                        visible={visibleModal === 'signUp'}
                        onClose={handleCloseModal}
                        title="Create your account"
                        classes={classes}
                    >
                        <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                            <FormGroup aria-label="position" row>
                                <TextField
                                    autoFocus
                                    className={classes.registerField}
                                    margin='dense'
                                    id="name"
                                    label="Name"
                                    type="text"
                                    fullWidth
                                />
                                <TextField
                                    className={classes.registerField}
                                    margin='dense'
                                    id="email"
                                    label="E-mail"
                                    type="email"
                                    fullWidth
                                />

                                <TextField
                                    margin="dense"
                                    id="password"
                                    label="Password"
                                    type="password"
                                    variant="filled"
                                    className={classes.registerField}
                                    fullWidth
                                />
                            </FormGroup>
                            <Button color="primary" variant="contained" fullWidth>Next</Button>
                        </FormControl>
                    </ModalBlock>

                </div>
            </section>
        </div>
    );
}

export default SignIn;
