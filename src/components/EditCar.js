import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";

function EditCar(props) {
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState({
         brand : ''
        ,model : ''
        ,color : ''
        ,year  : ''
        ,fuel  : ''
        ,price : ''
    });
    // open amd save modal form
    const handleClickOpen = () => {
        setCar({
             brand: props.data.row.brand
            ,model: props.data.row.model
            ,color: props.data.row.color
            ,year: props.data.row.year
            ,fuel: props.data.row.fuel
            ,price: props.data.row.price
        })
        setOpen(true);
    };
    // close modal form
    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = (event) => {
        setCar({...car, [event.target.name]:event.target.value});
    };
    // update and close modal form
    const handleSave = () => {
        props.editCar(car, props.data.id)
        handleClose();
    }

    return (
        <div>
            <button onClick={handleClickOpen}>수정</button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>EDIT CAR</DialogTitle>
                <DialogContent>
                    <input placeholder="Brand" name="brand" value={car.brand} onChange={handleChange}/><br/>
                    <input placeholder="Model" name="model" value={car.model} onChange={handleChange}/><br/>
                    <input placeholder="Color" name="color" value={car.color} onChange={handleChange}/><br/>
                    <input placeholder="Year"  name="year"  value={car.year}  onChange={handleChange}/><br/>
                    <input placeholder="Price" name="price" value={car.price} onChange={handleChange}/><br/>
                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose}>변경취소</button>
                    <button onClick={handleSave} >수정완료</button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default EditCar;