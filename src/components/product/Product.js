import React, {useState} from "react";
import classes from './Product.module.css'
import {Button, Card, CardActions, CardContent, CardHeader, CardMedia, css, styled} from "@mui/material";
// import {makeStyles} from "@mui/material/StyledEngineProvider"
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Image, Style} from "@mui/icons-material";


const StyledProductMedia = styled(CardMedia)(({ theme }) => ({
    // 'height': '150px',
    // '& .MuiCardMedia-root & .MuiCardMedia-media & .MuiCardMedia-img': {
        [theme.breakpoints.down('md')]: {
            height: 'auto',
            maxHeight: '100px',
            width: '100%',
        }

    // }
}))

const StyledProductHeader = styled(CardHeader)(({ theme }) => ({
    '& .MuiTypography-root': {
        [theme.breakpoints.down('md')]: {
          fontSize: '1rem'
        },
    }


}))

const StyledProduct = styled(Grid2)(({ theme }) => ({
    '& .MuiCard-root': {
        [theme.breakpoints.down('md')]: {
            height: '250px',
            width: '100%'
        },
    }


}))

const Product = ({images, name, description, link, brand, category}) => {

    const handleOpenLink = () => {
        window.open(link)
    }

    return (
        <StyledProduct xs={6} item={true} >
            <Card>
                <StyledProductMedia image={images} component={"img"}
                           alt={`${name} product image`}

                />
                <StyledProductHeader title={name} subheader={brand} titleTypographyProps={{noWrap: true}} />
                <CardActions>
                    <Button component={'div'} className={classes.amazon_button} onClick={handleOpenLink}>
                    </Button>
                </CardActions>
            </Card>
        </StyledProduct>
    )
}

export default Product;