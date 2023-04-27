import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function CategoryCard() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Card sx={{ maxWidth: 345, boxShadow: 3, position: 'relative' }}>
            {/* <IconButton
                aria-label="settings"
                sx={{ position: 'absolute', right: 0, color: '#FFFFFF' }}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button'
                }}
            >
                <MenuItem onClick={handleClose}>Edit</MenuItem>
                <MenuItem onClick={handleClose}>Delete</MenuItem>
            </Menu> */}
            <CardMedia
                sx={{ height: 140 }}
                image="https://images.pexels.com/photos/5076531/pexels-photo-5076531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Reactjs Dev
                </Typography>
                {/* <Typography variant="body2" color="text.secondary" className="ellipseAfter3Line">
                    A React developer is responsible for the design and implementation of user interfaces (UIs) and UI components using
                    React, a front-end JavaScript library. They develop and maintain UIs for web and mobile apps.
                </Typography> */}
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between', paddingTop: 0 }}>
                <Button disableElevation type="submit" variant="outlined" color="secondary" size="small" sx={{ width: '45%' }}>
                    Edit
                </Button>
                <Button disableElevation type="submit" variant="contained" color="error" size="small" sx={{ width: '45%' }}>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}
