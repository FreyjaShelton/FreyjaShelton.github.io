import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ContactForm from './ContactForm';

export default function ContactModal({ open, onClose }) {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="contact-modal"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box sx={{ bgcolor: 'background.paper', borderRadius: 2, boxShadow: 24 }}>
                <ContactForm onClose={onClose} />
            </Box>
        </Modal>
    );
}
