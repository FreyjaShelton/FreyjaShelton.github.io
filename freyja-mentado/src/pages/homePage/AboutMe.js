import Typography from '@mui/material/Typography';

import { Box } from '@mui/material';

export default function AboutMe() {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center', // Align image and text vertically
                justifyContent: 'center',
                gap: 2, // Adds spacing between the image and text
                padding: 2,
				maxWidth: 700,
            }}
        >
            <Typography variant="h6">
                I am a software engineer with 6 years of experience building web applications. 
                My work focuses on developing technological solutions to address 
                industry-specific needs in ways that enhance efficiency, accessibility 
                and usability. I’ve helped provide solutions in industries including trucking, 
                medical, and insurance.
            </Typography>
        </Box>
    );
}