import React, {useState} from "react";
import classes from './WeatherWidget.module.css'
import {useSelector} from "react-redux";
import * as WEATHER_DATA from '../../data/weatherData.json'
import {Box, styled} from "@mui/material";
import Leaf from "./Leaf";
import {ReactSVG} from "react-svg";
import Grid2 from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";


const LocationName = styled('div')(({ theme }) => ({
    ...theme.typography.h2,
    fontSize: '1.2em',
    display: 'flex',
    boxSizing: 'border-box',

}));

const WeatherWidget = () => {
    console.log("weather resopnse: ", WEATHER_DATA)
    const {location, current, wind} = useSelector(state => state.weather)

    return(
        <React.Fragment>

            <Grid2 container columns={6} direction={'row'} columnSpacing={2} rowSpacing={1}>


                <Grid2 xs={3}>
                    <Grid2 direction={'row'} xs={6}>
                        <LocationName>{location.name}</LocationName>
                    </Grid2>
                    <Grid2 direction={'row'} xs={6}>
                        <span className={classes.current_temp}>{current.temp}{'\u2109'}</span>
                    </Grid2>


                </Grid2>

                <Grid2 xs={2}>
                    <div className={classes.minmax}>
                        <span>L:{current.temp_min}{'\u2109'}</span>
                        <span>H:{current.temp_max}{'\u2109'}</span>
                    </div>

                </Grid2>

            </Grid2>
        </React.Fragment>
    )
}

export default WeatherWidget;