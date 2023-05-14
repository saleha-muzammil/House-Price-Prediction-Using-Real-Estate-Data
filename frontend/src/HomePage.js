import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import TextTransition, { presets } from 'react-text-transition';
import image from './assets/bg2.avif';

function HomePage() {
    const TEXTS = [
        'Unlock the future of Real Estate!',
        "Predict your Home's price with confidence!",
      ];
      const [index, setIndex] = React.useState(0);
    
      React.useEffect(() => {
        const intervalId = setInterval(() => setIndex((index) => index + 1), 2000);
        return () => clearTimeout(intervalId);
      }, []);
    
      const myStyle = {
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        height: '100vh',
        width: '100vw',
        margin: 0,
        padding: 0,
        position: 'relative',
      };     

      const ButtonStyle = {
        textAlign: 'center',
        backgroundPosition: 'center',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        color: 'white', 
        width: '180px',
        height: '56px',
        borderRadius: 0,
        '&:hover': {
          backgroundColor: 'gray',
        },
        };

  return (
    <div className="App" style={myStyle}>
      <h1 className="mainheader">
        <TextTransition springConfig={presets.wobbly}>
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
      </h1>
      <Button style={ButtonStyle} variant="contained" component={Link} to="/price-calculator">
        Start here 
      </Button>
    </div>
  );
}

export default HomePage;
