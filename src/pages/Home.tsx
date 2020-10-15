import React from 'react';
import {Grid, IconButton, makeStyles, Paper, Typography} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/NotificationsNone";
import MessageIcon from "@material-ui/icons/EmailOutlined";
import BookmarkIcon from "@material-ui/icons/BookmarkBorder";
import ListIcon from "@material-ui/icons/ListAlt";
import UserIcon from "@material-ui/icons/PermIdentity";

export const useHomeStyles = makeStyles(() => ({
        sideMenuList: {
            listStyle: 'none',
            padding: 0,
            margin: 0,
        },
        sideMenuListItem: {
            display: 'flex',
            alignItems: 'center',
        },
        sideMenuListItemLabel: {
            fontWeight:700,
            fontSize: 20,
            marginLeft: 15,
        },
        sideMenuListItemIcon: {
            fontSize: 28
        }
    })
);

export const Home = () => {
    const classes = useHomeStyles();

    return (
        <section>
            <Grid container spacing={3}>
                <Grid item xs={1}>
                    <ul className={classes.sideMenuList}>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="" color="primary">
                                <TwitterIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="" >
                                <SearchIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel}>
                                Search
                            </Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="" >
                                <NotificationIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel}>
                                Notifications
                            </Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="" >
                                <MessageIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel}>
                                Messages
                            </Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="" >
                                <BookmarkIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel}>
                                Bookmarks
                            </Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="" >
                                <ListIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel}>
                                List
                            </Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="" >
                                <UserIcon className={classes.sideMenuListItemIcon} />
                            </IconButton>
                            <Typography className={classes.sideMenuListItemLabel}>
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