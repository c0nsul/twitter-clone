import React from 'react';
import {Grid, IconButton, Paper, Typography} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/Notifications";
import MessageIcon from "@material-ui/icons/EmailOutlined";
import BookmarkIcon from "@material-ui/icons/BookmarkBorder";
import ListIcon from "@material-ui/icons/ListAlt";
import UserIcon from "@material-ui/icons/PermIdentity";


export const Home = () => {
    return (
        <section>
            <Grid container spacing={3}>
                <Grid item xs={1}>
                    <ul>
                        <li>
                            <IconButton aria-label="delete" color="primary">
                                <TwitterIcon/>
                            </IconButton>
                        </li>
                        <li>
                            <IconButton aria-label="delete" color="primary">
                                <SearchIcon/>
                            </IconButton>
                            <Typography>
                                Search
                            </Typography>
                        </li>
                        <li>
                            <IconButton aria-label="delete" color="primary">
                                <NotificationIcon/>
                            </IconButton>
                            <Typography>
                                Notificataions
                            </Typography>
                        </li>
                        <li>
                            <IconButton aria-label="delete" color="primary">
                                <MessageIcon/>
                            </IconButton>
                            <Typography>
                                Messages
                            </Typography>
                        </li>
                        <li>
                            <IconButton aria-label="delete" color="primary">
                                <BookmarkIcon/>
                            </IconButton>
                            <Typography>
                                Booksmarks
                            </Typography>
                        </li>
                        <li>
                            <IconButton aria-label="delete" color="primary">
                                <ListIcon/>
                            </IconButton>
                            <Typography>
                                List
                            </Typography>
                        </li>
                        <li>
                            <IconButton aria-label="delete" color="primary">
                                <UserIcon/>
                            </IconButton>
                            <Typography>
                                Profile
                            </Typography>
                        </li>
                    </ul>

                </Grid>
                <Grid item xs={7}>
                    <Paper >xs</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper >xs</Paper>
                </Grid>
            </Grid>


        </section>
    );
};