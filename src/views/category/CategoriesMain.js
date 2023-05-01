import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Box } from '@mui/system';
import CategoryCard from './CategoryCard';
import { Button, Grid } from '@mui/material';
import CreateCategoryModal from './CreateCategoryModal';
import { connect } from 'react-redux';
import { changeModalState, createCategory, getCategories } from 'store/actions/categoryActions';
import { useEffect } from 'react';
import Loading from 'layout/loader/Loading';

const CategoriesMain = ({ loading, categoryList, fetchCategotires, createNewCategory, categoryModalState, updateModalState }) => {
    useEffect(() => {
        fetchCategotires();
    }, [fetchCategotires]);

    return (
        <MainCard title="Categories" btnText="+ Add Category" btnEvent={() => updateModalState(true)} sx={{ minHeight: '82vh' }}>
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
            <CreateCategoryModal open={categoryModalState} setOpen={updateModalState} saveCategory={createNewCategory} />
        </MainCard>
    );
};

const mapStateToProps = ({ categories }) => {
    const { loading, categories: categoryList, categoryModalState } = categories;
    return { loading, categoryList, categoryModalState };
};
const mapDispatchToProps = (dispatch) => ({
    fetchCategotires: () => dispatch(getCategories()),
    createNewCategory: (data) => dispatch(createCategory(data)),
    updateModalState: (status) => dispatch(changeModalState(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesMain);
