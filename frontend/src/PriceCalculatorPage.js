import React, { useState } from 'react';
import { TextField, Button, Stack} from '@mui/material';
import image from './assets/bg2.avif';


const cities = [
    {
      value: 'Non',
      label: '',
    },
    {
      value: 'Shoreline',
      label: 'Shoreline',
    },
    {
      value: 'Seattle',
      label: 'Seattle',
    },
    {
      value: 'Kent',
      label: 'Kent',
    },
    {
        value: 'Bellevue',
        label: 'Bellevue',
    },
    {
        value: 'Redmond',
        label: 'Redmond',
    },
    {
        value: 'Maple Valley',
        label: 'Maple Valley',
    },
    {
        value: 'North Bend',
        label: 'North Bend',
    },
    {
        value: 'Lake Forest Park',
        label: 'Lake Forest Park',
    },
    {
        value: 'Sammamish',
        label: 'Sammamish',
    },
    {
        value: 'Auburn',
        label: 'Auburn',
    },
    {
        value: 'Des Moines',
        label: 'Des Moines',
    },
    {
        value: 'Bothell',
        label: 'Bothell',
    },
    {
        value: 'Federal Way',
        label: 'Federal Way',
    },
    {
        value: 'Kirkland',
        label: 'Kirkland',
    },
    {
        value: 'Issaquah',
        label: 'Issaquah',
    },
    {
        value: 'Woodinville',
        label: 'Woodinville',
    },
    {
        value: 'Normandy Park',
        label: 'Normandy Park',
    },
    {
        value: 'Fall City',
        label: 'Fall City',
    },
    {
        value: 'Renton',
        label: 'Renton',
    },
    {
        value: 'Carnation',
        label: 'Carnation',
    },
    {
        value: 'Snoqualmie',
        label: 'Snoqualmie',
    },
    {
        value: 'Duvall',
        label: 'Duvall',
    },
    {
        value: 'Burien',
        label: 'Burien',
    },
    {
        value: 'Covington',
        label: 'Covington',
    },
    {
        value: 'Inglewood-Finn Hill',
        label: 'Inglewood-Finn Hill',
    },
    {
        value: 'Kenmore',
        label: 'Kenmore',
    },
    {
        value: 'Newcastle',
        label: 'Newcastle',
    },
    {
        value: 'Mercer Island',
        label: 'Mercer Island',
    },
    {
        value: 'Black Diamond',
        label: 'Black Diamond',
    },
    {
        value: 'Ravensdale',
        label: 'Ravensdale',
    },
    {
        value: 'Clyde Hill',
        label: 'Clyde Hill',
    },
    {
        value: 'Algona',
        label: 'Algona',
    },
    {
        value: 'Skykomish',
        label: 'Skykomish',
    },
    {
        value: 'Tukwila',
        label: 'Tukwila',
    },
    {
        value: 'Vashon',
        label: 'Vashon',
    },
    {
        value: 'Yarrow Point',
        label: 'Yarrow Point',
    },
    {
        value: 'SeaTac',
        label: 'SeaTac',
    },
    {
        value: 'Medina',
        label: 'Medina',
    },
    {
        value: 'Enumclaw',
        label: 'Enumclaw',
    },
    {
        value: 'Snoqualmie Pass',
        label: 'Snoqualmie Pass',
    },
    {
        value: 'Pacific',
        label: 'Pacific',
    },
    {
        value: 'Beaux Arts Village',
        label: 'Beaux Arts Village',
    },
    {
        value: 'Preston',
        label: 'Preston',
    },
    {
        value: 'Milton',
        label: 'Milton',
    },
  ];

function PriceCalculatorPage() {

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
  
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
  };



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
  const [price, setPrice] = useState(0.00);

  const handleSubmit = async (event)=> {
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
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        setPrice(data)
        console.log('yay');
      } else {
        console.log('nay') ;
        console.log(response);
      }
    } catch (error) {
      console.log('welp');
      console.log(error);
    }
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
    <div className="price-calculator-page" style={myStyle}>
      <div style={overlayStyle}>
      <h2>House Price Prediction calculator</h2>
      <form onSubmit={handleSubmit}>
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
              fullWidth
              required
              sx={{mb: 4}}
          />
          <TextField
              type="text"
              variant='outlined'
              color='secondary'
              label="sqft_basement"
              onChange={e => setBasement(e.target.value)}
              value={basement}
              fullWidth
              required
              sx={{mb: 4}}
          />
          <TextField
              type="text"
              variant='outlined'
              color='secondary'
              label="yr_built"
              onChange={e => setBuilt(e.target.value)}
              value={built}
              fullWidth
              required
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
              fullWidth
              required
              sx={{mb: 4}}
          />
          <TextField
              id="outlined-select-currency-native"
              select
              variant='outlined'
              color='secondary'
              label="City"
              defaultValue="Non"
              SelectProps={{
                native: true,
              }}
              helperText="Please select your City"
              onChange={e => setCity(e.target.value)}
              value={city}
              fullWidth
              required
              sx={{mb: 4}}
          >
            {cities.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
          </TextField>
        </Stack>
        <Button style={ButtonStyle}
          variant="contained"
          color="primary"
          type="submit"
          sx={{ mb: 2 }}
        >
          Calculate
        </Button>
      </form>
      <h2>Total Cost: {price}</h2>
    </div>
    </div>
  );
}

export default PriceCalculatorPage;