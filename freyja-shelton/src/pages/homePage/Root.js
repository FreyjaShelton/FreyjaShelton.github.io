import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import profilePic from './pfp.jpg';
import UserInput from './UserInput';
import ContactForm from './ContactForm'; // Inline ContactForm
import Portfolio from '../portfolio/Portfolio';

export default function Root() {
    const [typingIndex, setTypingIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [typedText, setTypedText] = useState('freyja@shelton:~$ ');

    const [showContactForm, setShowContactForm] = useState(false);
    const [showPortfolio, setShowPortfolio] = useState(false);

    // Full text for the typing effect
    const typeText = `
Welcome to my site! 
My name is Freyja Shelton. I am a software engineer with 6 years of experience building web applications. My work focuses on developing technological solutions to address industry-specific needs in ways that enhance efficiency, accessibility and usability. I have helped provide solutions in industries including trucking, medical, and insurance.`.trim();

    useEffect(() => {
        // Simulate typing effect
        if (typingIndex < typeText.length && isTyping) {
            const timeout = setTimeout(() => {
                setTypedText((prev) => prev + typeText[typingIndex]);
                setTypingIndex((prev) => prev + 1);
            }, .9);
            return () => clearTimeout(timeout);
        } else if (typingIndex >= typeText.length) {
            setIsTyping(false);
        }
    }, [typingIndex, isTyping, typeText]);

    // Input handler
    const handleCommand = (command) => {
        const trimmedCommand = command.trim().toLowerCase();
        if (trimmedCommand === 'contact') {
            setShowContactForm(true);
            setShowPortfolio(false);
        } else if (trimmedCommand === 'portfolio') {
            setShowPortfolio(true);
            setShowContactForm(false);
        } else if (trimmedCommand === 'clear') {
            setShowPortfolio(false);
            setShowContactForm(false);
        } else {
            console.log(`Unknown command: ${command}`);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: '100vh',
                color: '#00ff00',
                fontFamily: 'monospace',
				marginRight: 1,
				marginLeft: 1,
            }}
        >
            {/* Profile Picture */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: 2,
                    marginTop: 5,
                }}
            >
                <img
                    src={profilePic}
                    alt="Profile"
                    style={{
                        width: 128,
                        height: 128,
                        borderRadius: '50%',
                        objectFit: 'cover',
                    }}
                />
            </Box>

            {/* Typing Effect */}
            <Box sx={{ width: '100%', maxWidth: 600, textAlign: 'left' }}>
                <Typography
                    variant="h6"
                    sx={{
                        whiteSpace: 'pre-wrap', // Preserve line breaks
                        textAlign: 'left',
                    }}
                >
                    {typedText}
                </Typography>

                {!isTyping && (
                    <Box>
                        {/* Command Line Input */}
						{!showContactForm &&
                        	<UserInput onCommand={handleCommand} />
						}

                        {/* Inline Contact Form */}
                        {showContactForm && (
                            <ContactForm onClose={() => setShowContactForm(false)} />
                        )}

                        {/* Portfolio */}
                        {showPortfolio && <Portfolio />}
                    </Box>
                )}
            </Box>
        </Box>
    );
}
