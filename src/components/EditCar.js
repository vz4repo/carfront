import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import TextField from "@mui/material/TextField";
import Stack from '@mui/material/Stack';

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
            {/* <button onClick={handleClickOpen}>수정</button> */}
            <IconButton onClick={handleClickOpen}>
                <EditIcon color="primary"/>
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>EDIT CAR</DialogTitle>
                <DialogContent>
                    {/* <input placeholder="Brand" name="brand" value={car.brand} onChange={handleChange}/><br/>
                    <input placeholder="Model" name="model" value={car.model} onChange={handleChange}/><br/>
                    <input placeholder="Color" name="color" value={car.color} onChange={handleChange}/><br/>
                    <input placeholder="Year"  name="year"  value={car.year}  onChange={handleChange}/><br/>
                    <input placeholder="Price" name="price" value={car.price} onChange={handleChange}/><br/> */}
                    <Stack spacing={2} mt={1}>
                        <TextField label="Brand" name="brand" autoFocus variant="standard" value={car.brand} onChange={handleChange}/>
                        <TextField label="Model" name="model" autoFocus variant="standard" value={car.model} onChange={handleChange}/>
                        <TextField label="Color" name="color" autoFocus variant="standard" value={car.color} onChange={handleChange}/>
                        <TextField label="Year"  name="year"  autoFocus variant="standard" value={car.year}  onChange={handleChange}/>
                        <TextField label="Price" name="price" autoFocus variant="standard" value={car.price} onChange={handleChange}/>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    {/* <button onClick={handleSave} >수정완료</button>
                    <button onClick={handleClose}>변경취소</button> */}
                    <Button onClick={handleClose}>변경취소</Button>
                    <Button onClick={handleSave} >수정완료</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default EditCar;