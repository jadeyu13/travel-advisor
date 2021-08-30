import React from 'react';
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Box, Input, InputBase, Toolbar, Typography} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from './styles'


function Header() {

    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                
                    <Typography variant="h5" className="classes.title">
                        Travel Advisor
                    </Typography>

                    <Box display="flex">
                    <Typography variant="h6" className="classes.title">
                        Explore new places
                    </Typography>
                    {/* <Autocomplete>*/}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase classes={{ root: classes.inputRoot, input: classes.inputInput}} />
                        </div>
                    {/*</Autocomplete> */}
                    </Box>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header