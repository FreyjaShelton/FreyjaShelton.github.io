import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import emailjs from 'emailjs-com'; // Import the EmailJS SDK

export default function ContactForm({ onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);

        // Sending email via EmailJS
        emailjs
            .send(
                'service_ulzbwvt',
                'template_nlds43a', // Replace with your template ID
                formData, // Send the form data as template parameters
                '6HMKztXU7MB6HlsiN' // Replace with your user ID
            )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    onClose(); // Close the modal after successful submission
                },
                (error) => {
                    console.log('FAILED...', error);
                }
            );
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                maxWidth: 700,
                width: '100%',
                bgcolor: 'transparent',
                borderRadius: 2,
                marginTop: 2,
            }}
        >
            <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
            />
            <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                fullWidth
                required
            />
            <TextField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={4}
                fullWidth
                required
            />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                <Button
                    onClick={onClose}
                    sx={{
                        color: '#ff0000', // Red color for "Cancel" button text
                        backgroundColor: 'transparent', // Transparent background
                        textTransform: 'none', // Remove uppercase transformation
                        '&:hover': {
                            backgroundColor: 'rgba(255, 0, 0, 0.1)', // Slight hover effect
                        },
                        fontFamily: 'monospace', // Monospace font
                    }}
                >
                    Cancel
                </Button>
                <Button
                    type="submit"
                    sx={{
                        color: '#00ff00', // Green color for "Send" button text
                        backgroundColor: 'transparent', // Transparent background
                        textTransform: 'none', // Remove uppercase transformation
                        '&:hover': {
                            backgroundColor: 'rgba(0, 255, 0, 0.1)', // Slight hover effect
                        },
                        fontFamily: 'monospace', // Monospace font
                    }}
                >
                    Send
                </Button>
            </Box>

        </Box>
    );
}
