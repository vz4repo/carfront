import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";

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
            <button onClick={handleClickOpen}>New Car</button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>NEW CAR</DialogTitle>
                <DialogContent>
                    <input placeholder="Brand" name="brand" value={car.brand} onChange={handleChange} /><br/>
                    <input placeholder="Model" name="model" value={car.model} onChange={handleChange} /><br/>
                    <input placeholder="Color" name="color" value={car.color} onChange={handleChange} /><br/>
                    <input placeholder="Year"  name="year"  value={car.year}  onChange={handleChange} /><br/>
                    <input placeholder="Price" name="price" value={car.price} onChange={handleChange} /><br/>
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