import React, {useEffect} from "react";
import classes from './Dogs.module.css'
import Page from "./Page";
import {Chip, Divider} from "@mui/material";
import {useLoaderData} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {DogsActions} from "../store/dogs-slice";
import Product from "../components/product/Product";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2";


const DogCategoriesChips = () => {
    const data = useLoaderData()
    const {categories, activeCategories} = useSelector(state => state.dogs);
    const dispatch = useDispatch();

    const handleChipToggle = (chipName) => {
        console.log(chipName)
        if (activeCategories.includes(chipName)){
            dispatch(DogsActions.categoryDeactivated(chipName))
        }else{
            dispatch(DogsActions.categoryActivated(chipName))
        }
    }

    return(
        categories
            .map((chipName) => {
                let variant = activeCategories.includes(chipName) ? 'filled' : 'outlined';

                return (
                    <Chip onClick={(event) => handleChipToggle(chipName) }
                        variant={variant}
                        color={'primary'}
                        key={chipName}
                        label={chipName}
                    />
                )
            })
    )
}
// temporary, terrible way to do it
const ProductsList = ({activeCategory}) => {
    const {products} = useSelector(state => state.dogs);

    const productsList = products.filter((product) => {
        return product.category === activeCategory;
    }).map((product) => {
        return (
            <Product images={product.imageURL} name={product.name} brand={product.brand}
                     description={"desc"} link={product.link} category={product.category} key={`${activeCategory}-${product.name}`} />
        )
    })

    return (
        <React.Fragment>
            <Typography variant={'h6'}>{activeCategory}</Typography>
            <Divider variant={"subheader"} />
            <Grid2 container >
                {productsList}
            </Grid2>
        </React.Fragment>
    )
}

const Dogs = () => {
    const {categories, activeCategories} = useSelector(state => state.dogs);

    const activeCategoriesProductList = categories.filter((category) => {
        return !!(activeCategories.length === 0 || activeCategories.includes(category));
    }).map((category) => {
        return <ProductsList activeCategory={category} key={`${category}-list`} />
    })

    return (
        <Page>
            <DogCategoriesChips />
            {activeCategoriesProductList}
        </Page>
    )
}

export default Dogs;