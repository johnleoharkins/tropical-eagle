import React from "react";
import classes from './Landing.module.css'
import Grid2 from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import TwitterTimeline from "../components/twitter/TwitterTimeline";
import Page from "./Page";
import StyledGrid from "../components/utils/StyledGrid";
import {styled} from "@mui/material";


const StyledParagraph = styled(Typography)(({theme}) => {
    return ({
        [theme.breakpoints.down('sm')]: {
            animation: 'showParagraph 10s linear infinite',
        }
    })
})





const Landing = () => {
    return (
        <Page>
            <StyledGrid container direction={"column"}>
                <Grid2 sm={12}>

                    {/*<div className={`${classes.name__container} ${classes.name_typography}`}>*/}
                    {/*    John Harkins*/}
                        <span className={classes.name_typography}>John Harkins</span>
                    {/*</div>*/}
                </Grid2>
                    <StyledGrid container direction={"row"} rowSpacing={2} columnSpacing={2} xs={12} noWrap={false}>
                        <Grid2 sm={12} md={8} className={classes.paragraph__container}>
                            <Grid2>
                                <div className={classes.paragraph}>
                                    I am a web developer from Madison, Wisconsin. I’ve always followed my passions and let them guide me throughout life. A few things have remained constant: a love for technology, the brain, the environment, relationships and stories, history, comparative theology and philosophy, science and design. I’ve never been afraid of a challenge; I’ve learned from every outcome, whether glorious, tragic or otherwise, through rigorous, honest self-reflection and contemplation. I appreciate the good and the bad experiences because they have shaped me to be who I am today.
                                </div>
                            </Grid2>
                            <Grid2>
                                <div className={classes.paragraph}>
                                    I am a very active individual and love to spend time outside. I love to be in nature, in my youth I found much enjoyment while camping, hunting, fishing and hiking. I enjoy living a healthy and active lifestyle – being active has always made me feel the best no matter what else life is throwing at me! I like to do anything that will get my blood pumping and get my adrenaline going such as snowboarding, riding motorcycles, getting a little risky and going fast.
                                </div>
                            </Grid2>
                            <Grid2>
                                <div className={classes.paragraph}>
                                    If I had to give some major characteristics about myself it would be: deep thinker, problem solver, inclusive, curious, compassionate, outgoing, authentic and honest. I am dedicated and committed to whatever I apply myself to. I’m inspired and fascinated by ideas. It is exciting and sometimes daunting how there’s always more to learn that can help in one way or another in the future. I believe it is very valuable to know a little bit about a lot, this helps me to see new relationships and connections in all of what I do.
                                </div>
                            </Grid2>
                        </Grid2>

                    </StyledGrid>
                <Grid2 sm={12}>
                    <TwitterTimeline screenName={"johnleoharkins"} listId={"1633478381579714561"} />
                </Grid2>



            </StyledGrid>
        </Page>
    )
}

export default Landing;