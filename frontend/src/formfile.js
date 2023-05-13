import { TextField, Button, Stack } from '@mui/material';
import React, {useState} from 'react';

const Infoform = () => {
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



return (
    <React.Fragment>

        <nav className="nav">
        <section class="nav_top">
        <h3 className="logoheader"> Admin View</h3>
        </section>
        </nav>

        <h2 className = "productformheader">Enter</h2>
        <form className= "productform" >
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
)
}


export default Infoform ;