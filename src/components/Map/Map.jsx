import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, useMediaQuery } from "@material-ui/core"
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from "@material-ui/lab"

import useStyles from './styles'

function Map({ setCoordinates, setBounds, coordinates }) {
    const classes = useStyles();
    const isMobile = useMediaQuery('(mid-width: 600px)')
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key:'AIzaSyCxRwuM1go_CzH2KLJNn_dHjWlHsPgQjmg'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50 ]} 
                options={''}
                onChange={(e) => {
                    setCoordinates({ lat:e.center.lat, lng: e.center.lng});
                    setBounds({ ne: e.marginBounds.ne, sw:e.marginBounds.sw,})
                
            }} 
                onChildClick={''}
            > 
            </GoogleMapReact>
        </div>
    )
}

export default Map
