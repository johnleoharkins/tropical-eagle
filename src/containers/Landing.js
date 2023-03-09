import React from "react";
import classes from './Landing.module.css'
import Grid2 from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import TwitterTimeline from "../components/twitter/TwitterTimeline";
import Page from "./Page";
const Landing = () => {
    return (
        <Page>
            <Grid2 container>
                <Grid2 xs={7}>
                    <div >
                        <Typography>
                            Hello,
                        </Typography>
                        <span className={classes.name_typography}>John Harkins</span>
                    </div>

                </Grid2>
                <Grid2 xs={2}>

                </Grid2>
                <Grid2 xs={3}>
                    <TwitterTimeline screenName={"johnleoharkins"} listId={"1633478381579714561"} />
                </Grid2>
            </Grid2>
        </Page>
    )
}

export default Landing;