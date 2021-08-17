/**
 * Continer and Component Structure to make code more readble and understable
 * Using ag-grid for table grid using React JS
 */

import React, { useState, useEffect } from 'react';
import GridComponent from './grid.component';

const GridContainer = () => {

    const [rowData, setRowData] = useState([]);
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    useEffect(() => {}, []);

    const onGridReady = (params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);

        const updateData = (data) => {
            setRowData(data);
        };

        fetch('./response/projectResponse.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(result => result.json())
            .then(rowData => updateData(rowData))
    };

    const checkboxSelection = function (params) {
        return params.columnApi.getRowGroupColumns().length === 0;
    };
    const headerCheckboxSelection = function (params) {
        return params.columnApi.getRowGroupColumns().length === 0;
    };

    const onBtnExport = () => {
        gridApi.exportDataAsCsv();
    }

    return (
        <GridComponent
            rowData={rowData}
            checkboxSelection={checkboxSelection}
            headerCheckboxSelection={headerCheckboxSelection}
            onGridReady={onGridReady}
            onBtnExport={onBtnExport}
        />
    )
}

export default GridContainer;