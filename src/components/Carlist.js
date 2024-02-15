import React, { useEffect, useState } from 'react';
import { SERVER_URL } from '../constants';
import { DataGrid, GridToolbarContainer, GridToolbarExport, gridClasses } from '@mui/x-data-grid';
import Snackbar from '@mui/material/Snackbar';
import AddCar from './AddCar';
import EditCar from './EditCar';
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
 
function Carlist() {
    const [cars, setCars] = useState([]);
    const [open, setOpen] = useState(false);

    const columns = [
        {field:'brand', headerName: 'Brand', width: 200}, 
        {field:'model', headerName: 'Model', width: 200}, 
        {field:'color', headerName: 'Color', width: 200}, 
        {field:'year' , headerName: 'Year' , width: 150}, 
        {field:'price', headerName: 'Price', width: 150}, 
        // Edit Button
        {
            field: '_links.car.href'
            ,headerName: ''
            ,sortable: false
            ,filterable: false
            ,renderCell: row => 
                <EditCar
                    data={row}
                    editCar={editCar} />
        },
        // Del Button
        {
            field: '_links.self.href'
            ,headerName: ''
            ,sortable: false
            ,filterable: false
            ,renderCell: row => 
                // <button onClick={ () => onDelClick(row.id)}>Delete</button>
                <IconButton onClick={ () => onDelClick(row.id)}>
                    <DeleteIcon color="error" />
                </IconButton>
        }
    ];

    const fetchCars = () =>{
        fetch(SERVER_URL + 'api/cars')
        .then(response => response.json())
        .then(data => setCars(data._embedded.cars))
        .then(console.log("yes"))
        .catch(err => console.error(err));
    }

    const onDelClick = (url) => {
        if(window.confirm("지우시겠습니까?")){
            fetch(url, {method: 'DELETE'})
            .then(response => {
                if(response.ok){                    
                    fetchCars();
                    setOpen(true);
                }else{
                    alert(' SOMETHING WENT WRONG :: onDelClick');
                }
            })
            .then(console.log("Delete Done"))
            .catch(err => console.error(err))        
        }        
    }

    // 새로운 자동차 추가 (AddCar.js)
    const addCar = (car) => {
        fetch(SERVER_URL + 'api/cars',
        {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(car)
        })
        .then(response => {
            if(response.ok){
                fetchCars();
            }
            else{
                alert(' SOMETHING WENT WRONG :: addCar');
            }
        })
        .catch(err => console.error(err))
    }
    
    // 기존 자동차 수정 (EditCar.js)
    const editCar = (car, link) => {
        fetch(link,
            {
                method:'PUT',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(car)
            })
            .then(response => {
                if(response.ok){
                    fetchCars();
                }
                else{
                    alert(' SOMETHING WENT WRONG :: editCar');
                }
            })
            .catch(err => console.error(err));
    };

    useEffect( ()=>{
        fetchCars();
    }, []);

    return(
        <React.Fragment>
            <Stack mt={2} mb={2}>
<AddCar addCar={addCar} />
            </Stack>
            

        <div style={{ height:500, width: '100%'}}>
            {/* <table>
                <tbody>
                {
                    cars.map( (car, index) =>
                    <tr key={index}>
                    <td>{car.brand}</td>
                    <td>{car.model}</td>
                    <td>{car.color}</td>
                    <td>{car.year}</td>
                    <td>{car.price}</td>
                    </tr>)
                }
                </tbody>
            </table> */}
            <DataGrid 
                rows={cars} 
                columns={columns} 
                // 아무 행이나 클릭하면 선택되는 동작 비활성화
                disableRowSelectionOnClick={true}
                getRowId={row => row._links.self.href}
                components={{Toolbar:CustomToolbar}}
            />
            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={()=>setOpen(false)}
                message="List Deleted"
                />
        </div>
                </React.Fragment>
    );
}

function CustomToolbar(){
    return(
        <GridToolbarContainer className={gridClasses.toolbarContainer}>
            <GridToolbarExport/>
        </GridToolbarContainer>
    );
}

export default Carlist;