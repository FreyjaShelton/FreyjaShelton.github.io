import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function UserInput({ onCommand }) {
    const [input, setInput] = useState('');
    const suggestions = ['portfolio', 'contact', 'clear'];

    // Handle input change
    const handleInputChange = (event, newValue) => {
        setInput(newValue || '');
    };

    // Handle "Enter" key press
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            console.log('User input:', input);
            if (onCommand) {
                onCommand(input); // Trigger command callback
            }
            setInput(''); // Clear the input field after submission
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                color: '#00ff00',
                fontFamily: 'monospace',
            }}
        >
            {/* Static prompt */}
            <Typography 
                variant="h6"
                sx={{
                    flexBasis: { xs: '100%', sm: 'inherit' }, // Ensures the prompt takes the full width on small screens
                    textAlign: { xs: 'left', sm: 'inherit' },
                }}
            >
                freyja@shelton:~$
            </Typography>

            {/* Inline Autocomplete Input */}
            <Autocomplete
                options={suggestions}
                inputValue={input}
                onInputChange={handleInputChange}
                disablePortal
                sx={{
                    marginLeft: { xs: 0, sm: 1 },
                    flexGrow: 1, // Ensures the input field grows to fill available space
                    maxWidth: { xs: '100%', sm: 600 },
                    listStyle: 'none',
                    '& + .MuiAutocomplete-popper .MuiAutocomplete-option ': {
                        backgroundColor: '#001a00',
                    }
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        placeholder="Type here..."
                        onKeyDown={handleKeyDown}
                        InputProps={{
                            ...params.InputProps,
                            disableUnderline: true,
                        }}
                    />
                )}
            />
        </Box>
    );
}
