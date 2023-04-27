import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CustomInput from 'views/candidateDetails/CustomInput';
import { CardMedia, IconButton } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '400px',
    width: '90%',
    bgcolor: 'background.paper',
    borderRadius: '12px',
    boxShadow: 24,
    p: 4
};

export default function CreateCategoryModal({ open, setOpen }) {
    const [image, setImage] = useState(null);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography variant="h3">Create Category</Typography>
                    {image ? (
                        <CardMedia sx={{ height: 200, borderRadius: '12px', marginTop: '13px' }} image={image} title="green iguana" />
                    ) : (
                        <IconButton
                            color="primary"
                            aria-label="upload picture"
                            component="label"
                            style={{ margin: '0 auto', display: 'block', borderRadius: 0 }}
                        >
                            <input hidden accept="image/*" type="file" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />
                            <img
                                src={'https://assets.upload.io/website/blog_assets/icons/material/icons/add_photo_alternate_outlined.svg'}
                                alt=""
                                style={{ height: 200, width: 200 }}
                            />
                        </IconButton>
                    )}

                    <CustomInput placeholder="title" />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '13px' }}>
                        <Button variant="outlined" color="secondary" sx={{ width: '45%' }}>
                            Save
                        </Button>
                        {image ? (
                            <Button variant="contained" color="error" sx={{ width: '45%' }} onClick={() => setImage(null)}>
                                Clear
                            </Button>
                        ) : (
                            <Button variant="contained" color="error" sx={{ width: '45%' }} onClick={handleClose}>
                                Cancel
                            </Button>
                        )}
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
