import * as React from 'react';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import styles from './table.module.scss'

const columns: GridColDef[] = [
    {field: 'imageURL', headerName: 'imageURL', width: 200, sortable: false, filterable: false, renderCell: (el) => <img src={el.value} alt={''} className={styles.img} />},
    {field: 'name', headerName: 'Name', width: 200,editable: true},
    {field: 'color', headerName: 'Color', width: 200, editable: true},
    {field: 'price', headerName: 'Price', type: 'number', width: 100, editable: true},
    {field: 'discount', headerName: 'discount', type: 'number', width: 100, editable: true},
    {field: 'type', headerName: 'type', type: 'string', width: 100, editable: true},
];


export default function DataTable({rows}: { rows: any }) {
    return (
        <div className={styles.table}>
            <DataGrid
                autoHeight={true}
                rowHeight={180}
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}