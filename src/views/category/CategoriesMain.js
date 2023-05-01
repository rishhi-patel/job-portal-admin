import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Box } from '@mui/system';
import CategoryCard from './CategoryCard';
import { Button, Grid } from '@mui/material';
import CreateCategoryModal from './CreateCategoryModal';
import { connect } from 'react-redux';
import { getCategories } from 'store/actions/categoryActions';
import { useEffect } from 'react';
import Loading from 'layout/loader/Loading';

const CategoriesMain = ({ loading, categoryList, fetchCategotires }) => {
    useEffect(() => {
        fetchCategotires();
    }, [fetchCategotires]);

    const [open, setOpen] = React.useState(false);
    return (
        <MainCard title="Categories" btnText="+ Add Category" btnEvent={() => setOpen(true)} sx={{ minHeight: '82vh' }}>
            {loading ? (
                <Loading />
            ) : (
                <Grid container spacing={6}>
                    {categoryList.map((category) => (
                        <Grid item lg={3} md={4} sm={6} xs={12} key={category._id}>
                            <CategoryCard category={category} />
                        </Grid>
                    ))}
                </Grid>
            )}
            <CreateCategoryModal open={open} setOpen={setOpen} />
        </MainCard>
    );
};

const mapStateToProps = ({ categories }) => {
    const { loading, categories: categoryList } = categories;
    return { loading, categoryList };
};
const mapDispatchToProps = (dispatch) => ({
    fetchCategotires: () => dispatch(getCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesMain);
