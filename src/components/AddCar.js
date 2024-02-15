import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from '@mui/material/Stack';

function AddCar(props){
const [open, setOpen] = useState(false);
const [car, setCar] = useState({
    brand: ''
    ,model: ''
    ,color: ''
    ,year: ''
    ,fuel: ''
    ,price: ''
});
// modal form
const handleClickOpen = () => {
    setOpen(true);
}
const handleClose = () => {
    setOpen(false);
}
const handleChange = (event) => {
    setCar({...car, [event.target.name]: event.target.value});
}
// save and close modal form
const handleSave = () => {
    props.addCar(car);
    handleClose();
}
    return(
        <div>
            {/* <button onClick={handleClickOpen}>New Car</button> */}
            <Button variant="contained" onClick={handleClickOpen}>New Car</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>NEW CAR</DialogTitle>
                <DialogContent>
                    {/* <input placeholder="Brand" name="brand" value={car.brand} onChange={handleChange} /><br/>
                    <input placeholder="Model" name="model" value={car.model} onChange={handleChange} /><br/>
                    <input placeholder="Color" name="color" value={car.color} onChange={handleChange} /><br/>
                    <input placeholder="Year"  name="year"  value={car.year}  onChange={handleChange} /><br/>
                    <input placeholder="Price" name="price" value={car.price} onChange={handleChange} /><br/> */}
                    <Stack spacing={2} mt={1}>
                        <TextField label="Brand" name="brand" autoFocus variant="standard" value={car.brand} onChange={handleChange}/>
                        <TextField label="Model" name="model" autoFocus variant="standard" value={car.model} onChange={handleChange}/>
                        <TextField label="Color" name="color" autoFocus variant="standard" value={car.color} onChange={handleChange}/>
                        <TextField label="Year"  name="year"  autoFocus variant="standard" value={car.year}  onChange={handleChange}/>
                        <TextField label="Price" name="price" autoFocus variant="standard" value={car.price} onChange={handleChange}/>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose}>취소</button>
                    <button onClick={handleSave}>저장</button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddCar;