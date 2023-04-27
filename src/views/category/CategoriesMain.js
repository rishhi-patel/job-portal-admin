import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Box } from '@mui/system';
import CategoryCard from './CategoryCard';
import { Button, Grid } from '@mui/material';
import CreateCategoryModal from './CreateCategoryModal';

const CategoriesMain = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <MainCard title="Categories" btnText="+ Add Category" btnEvent={() => setOpen(true)}>
            <Grid container spacing={6}>
                {new Array(12).fill(1).map((elem) => (
                    <Grid item lg={3} md={4} sm={6} xs={12} key={elem}>
                        <CategoryCard />
                    </Grid>
                ))}
            </Grid>
            <CreateCategoryModal open={open} setOpen={setOpen} />
        </MainCard>
    );
};

export default CategoriesMain;
