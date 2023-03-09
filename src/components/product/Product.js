import React, {useState} from "react";
import classes from './Product.module.css'
import {Button, Card, CardActions, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Image} from "@mui/icons-material";

const Product = ({images, name, description, link, brand, category}) => {

    const handleOpenLink = () => {
        window.open(link)
    }

    return (
        <Grid2 xs={1} >
            <Card>
                <CardMedia image={images} component={"img"} alt={`${name} product image`} height={"140"} />
                <CardContent>
                    <Typography align={'center'} variant={'subtitle1'} >{name}</Typography>
                    <Typography align={'right'} variant={'subtitle2'}>{brand}</Typography>
                    <Typography paragraph={true} variant={'body2'}>{description}</Typography>

                </CardContent>
                <CardActions>
                    <Button component={'div'} className={classes.amazon_button} onClick={handleOpenLink}>
                    </Button>
                </CardActions>
            </Card>
        </Grid2>
    )
}

export default Product;