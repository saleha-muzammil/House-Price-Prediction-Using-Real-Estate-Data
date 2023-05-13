import React, { useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import './App.css';
import image from './assets/bg2.avif';
import { TextField, Button, Stack} from '@mui/material';

function App() {


    const handleSubmit = async (event)=> 
    {
        event.preventDefault();

        try {
          console.log(city);
          const response = await fetch('http://localhost:5000/predict', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
body: JSON.stringify({
  data: {
    bedrooms: bedrooms,
    sqft_living: living,
    sqft_lot: lot,
    floors: floors,
    condition: condition,
    sqft_above: above,
    sqft_basement: basement,
    yr_built: built,
    yr_renovated: renovated,
    city: city
  }
})
,
          });
    
          if (response.status === 200) {
            const data = await response.json();
  console.log(data);
            console.log('yay');
          } else {
            console.log('nay') ;
            console.log(response);
          }
        } catch (error) {
        console.log('welp');
          console.log(error);
        }

    } ;

  const [bedrooms, setBedrooms] = useState('')
  const [living, setLiving] = useState('')
  const [lot, setLot] = useState('')
  const [floors, setFloors] = useState('')
  const [basement, setBasement] = useState('')
  const [built, setBuilt] = useState('')
  const [above, setAbove] = useState('')
  const [condition, setCondition] = useState('')
  const [city, setCity] = useState('')
  const [renovated, setRenovated] = useState('')

  const TEXTS = ['Unlock the future of Real Estate!', 'Predict your Home\'s price with confidence!'];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000,
    );
    return () => clearTimeout(intervalId);
  }, []);

  const myStyle = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize : 'cover',
    backgroundPosition: 'center',
    textAlign: 'center',
    height: '100vh',
    width: '100vw',
    margin: 0,
    padding: 0 
  };

  return (

      <div className="App" style={myStyle}>
        <h1 className= "mainheader">
          <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>      
        </h1>
        <button>Start here </button>

        <React.Fragment>

<nav className="nav">
<section class="nav_top">
<h3 className="logoheader"> Admin View</h3>
</section>
</nav>

<h2 className = "productformheader">Enter</h2>
<form className= "infoform" onSubmit={handleSubmit} >
<Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
        <TextField
            type="text"
            variant='outlined'
            color='secondary'
            label="Number of bedrooms"
            onChange={e => setBedrooms(e.target.value)}
            value={bedrooms}
            fullWidth
            required
        />
        <TextField
            type="text"
            variant='outlined'
            color='secondary'
            label="sqft_living"
            onChange={e => setLiving(e.target.value)}
            value={living}
            fullWidth
            required
        />
        <TextField
            type="text"
            variant='outlined'
            color='secondary'
            label="sqft_lot"
            onChange={e => setLot(e.target.value)}
            value={lot}
            fullWidth
            required
        />
        <TextField
            type="text"
            variant='outlined'
            color='secondary'
            label="floors"
            onChange={e => setFloors(e.target.value)}
            value={floors}
            fullWidth
            required
        />
    </Stack>  
    <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>         
    <TextField
        type="text"
        variant='outlined'
        color='secondary'
        label="condition"
        onChange={e => setCondition(e.target.value)}
        value={condition}
        fullWidth
        required
        sx={{mb: 4}}
    />
    <TextField
        type="text"
        variant='outlined'
        color='secondary'
        label="sqft_above"
        onChange={e => setAbove(e.target.value)}
        value={above}
        required
        fullWidth
        sx={{mb: 4}}
    />
    <TextField
        type="text"
        variant='outlined'
        color='secondary'
        label="sqft_basement"
        onChange={e => setBasement(e.target.value)}
        value={basement}
        required
        fullWidth
        sx={{mb: 4}}
    />
    <TextField
        type="text"
        variant='outlined'
        color='secondary'
        label="yr_built"
        onChange={e => setBuilt(e.target.value)}
        value={built}
        required
        fullWidth
        sx={{mb: 4}}
    />
    </Stack> 
    <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>         
    <TextField
        type="text"
        variant='outlined'
        color='secondary'
        label="yr_renovated"
        onChange={e => setRenovated(e.target.value)}
        value={renovated}
        required
        fullWidth
        sx={{mb: 4}}
    />
    <TextField
        type="text"
        variant='outlined'
        color='secondary'
        label="city"
        onChange={e => setCity(e.target.value)}
        value={city}
        required
        fullWidth
        sx={{mb: 4}}
    />
    </Stack> 

    <Button style={{ marginTop: "10px" }} variant="outlined" color="secondary" type="submit" >Update</Button>
    </form>

</React.Fragment>
      </div>
  );
}

export default App;
