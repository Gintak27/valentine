
import React, { useState } from 'react';
import { Container, Box, Card, Button, Grid } from '@mui/material';
import './Valentine.css';




const Valentine = () => {
    const [buttonStyle] = useState({});
    const [buttonText, setButtonText] = useState('No thank you.');
    const [texts, setTexts] = useState(['You sure?', 'Reconsider?', 'Okay but fr?', 'Stop playing', 'Wrong', 'Try again', 'so yes?', 'Keep going', 'Nice try', 'Nope', 'Once more', 'Try harder', 'Keep trying', 'Not yet', 'Guess again', 'Not this time', 'Really?', 'Keep at it', 'Go on man', 'Nah', 'Incorrect', 'Not right', 'No luck', 'Missed it']);
    const [buttonClicked, setButtonClicked] = useState(false);


    const handleTouchStart = () => {
        if (texts.length === 0) setButtonClicked('no');
        const randomIndex = Math.floor(Math.random() * texts.length);
        setButtonText(texts[randomIndex]);
        setTexts(texts.filter((_, index) => index !== randomIndex));
    };

    const handleButtonClick = () => {
        setButtonClicked('yes');
    };


    let content;
    if (buttonClicked === 'yes') {
        content =       <img src="https://media.tenor.com/u8FqYvg4dxIAAAAi/transparent-milk-and-mocha.gif" alt="Milk and Mocha gif" />;
    } else if (buttonClicked === 'no') {
        content = <img src="https://media.tenor.com/i6_HLFu7kRgAAAAi/milk-and-mocha.gif" alt="mad" />; // Replace with your actual image URL
    } else {
        content = (
            <>
            <img src="https://media.tenor.com/cWyonpnv_psAAAAi/mocha.gif" alt="Mocha gif" />
            <h1 style={{ fontFamily: 'cursive', color: 'black' }}>Will you be my Valentine?</h1>
            <Grid container spacing={3} justify="center">
                <Grid item>
                    <Button variant="contained" color="primary" onClick={handleButtonClick}>
                        I would love to be
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="secondary" style={buttonStyle} onTouchStart={handleTouchStart}>
                        {buttonText}
                    </Button>
                </Grid>
            </Grid>
        </>
        );
    }

    return (
        <Container style={{
            height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: 'url(https://png.pngtree.com/png-vector/20220812/ourmid/pngtree-falling-purple-petals-vector-png-image_6108491.png)',
            backgroundSize: 'cover'
        }}>
            <Card style={{
                backdropFilter: 'blur(4px)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '20px',
                borderRadius: '10px',
            }}>
                <Box textAlign="center">
                    {content}
                </Box>

            </Card>
        </Container>
    );
};

export default Valentine;