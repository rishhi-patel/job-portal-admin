import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Box } from '@mui/system';
import CategoryCard from './CategoryCard';
import { Button, Grid } from '@mui/material';

const CategoriesMain = () => {
    return (
        <MainCard title="Categories" btnText="+ Add Category" btnEvent={() => console.log('hello')}>
            <Grid container spacing={6}>
                {new Array(12).fill(1).map((elem) => (
                    <Grid item md={4} xs={12} key={elem}>
                        <CategoryCard />
                    </Grid>
                ))}
            </Grid>
        </MainCard>
    );
};

export default CategoriesMain;
