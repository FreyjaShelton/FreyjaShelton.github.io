import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import profilePic from './pfp.jpg';
import UserInput from './UserInput';
import ContactModal from './ContactModal';
import Portfolio from '../portfolio/Portfolio';

export default function Root() {
	const [typingIndex, setTypingIndex] = useState(0);
	const [isTyping, setIsTyping] = useState(true);
	const [typedText, setTypedText] = useState('freyja@mentado:~$ ');

	// Full text for the typing effect
	const typeText = `
Welcome to my site! 
Loading About Me...
I am a software engineer with 6 years of experience building web applications. My work focuses on developing technological solutions to address industry-specific needs in ways that enhance efficiency, accessibility and usability. I have helped provide solutions in industries including trucking, medical, and insurance.`.trim();

	useEffect(() => {
		// Simulate typing effect
		if (typingIndex < typeText.length && isTyping) {
			const timeout = setTimeout(() => {
				setTypedText((prev) => prev + typeText[typingIndex]);
				setTypingIndex((prev) => prev + 1);
			}, 1);
			return () => clearTimeout(timeout);
		} else if (typingIndex >= typeText.length) {
			setIsTyping(false);
		}
	}, [typingIndex, isTyping, typeText]);

	const [isContactModalOpen, setIsContactModalOpen] = useState(false);
	const [showPortfolio, setShowPortfolio] = useState(false);

	// Input handler
	const handleCommand = (command) => {
		if (command.trim().toLowerCase() === 'contact') {
			setIsContactModalOpen(true);
		} else if (command.trim().toLowerCase() === 'portfolio') {
			setShowPortfolio(true);
		} else if (command.trim().toLowerCase() === 'clear') {
			setShowPortfolio(false);
		} else {
			console.log(`Unknown command: ${command}`);
		}
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				minHeight: '100vh',
				color: '#00ff00',
				fontFamily: 'monospace',
			}}
		>
			<Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
				<img
					src={profilePic}
					alt="Profile"
					style={{
						width: 128,
						height: 128,
						borderRadius: '50%', // Circular styling
						objectFit: 'cover',
					}}
				/>
			</Box>

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
				// change contact form to be inline how it would be in a real terminal
					<Box>
						<UserInput onCommand={handleCommand} />

						<ContactModal
							open={isContactModalOpen}
							onClose={() => setIsContactModalOpen(false)}
						/>

						{showPortfolio && <Portfolio />}
					</Box>
				)}
			</Box>
		</Box>
	);
}
