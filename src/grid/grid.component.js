import React from 'react';

import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const GridComponent = (props) => {
    const {
        rowData,
        checkboxSelection,
        headerCheckboxSelection,
        onGridReady,
        onBtnExport
    } = props;

    return (
        <div className="ag-theme-alpine aggrid">
            <button onClick={() => onBtnExport()}>
                Download CSV export file
            </button>
            <AgGridReact
                autoGroupColumnDef={{
                    headerName: 'Authors',
                    minWidth: 170,
                    field: 'Authors',
                    valueGetter: function (params) {
                        if (params.node.group) {
                            return params.node.key;
                        } else {
                            return params.data[params.colDef.field];
                        }
                    },
                    headerCheckboxSelection: true,
                    cellRenderer: 'agGroupCellRenderer',
                    cellRendererParams: { checkbox: true }
                }}
                defaultColDef={{
                    editable: true,
                    sortable: true,
                    resizable: true,
                    // floatingFilter: true,
                    // filter: true
                    // flex: 1,
                    minWidth: 100
                }}
                // suppressRowClickSelection={true}
                // groupSelectsChildren={true}
                suppressColumnsToolPanel={true}
                // debug={true}
                pagination={true}
                onGridReady={onGridReady}
                rowData={rowData}
                enableRangeSelection={true}
                allowContextMenuWithControlKey={true}
            >

                <AgGridColumn field="Authors"
                    headerName="Authors"
                    checkboxSelection={checkboxSelection}
                    headerCheckboxSelection={headerCheckboxSelection}
                ></AgGridColumn>
                <AgGridColumn
                    field="coll_name"
                    headerName="Coll Name">
                </AgGridColumn>
                <AgGridColumn
                    field="dataset_name"
                    headerName="DataSet Name"></AgGridColumn>
                <AgGridColumn field="ds_short_name" headerName="DS Short Name"></AgGridColumn>
                <AgGridColumn field="format" headerName="format"></AgGridColumn>
                <AgGridColumn field="platform" headerName="Platform"></AgGridColumn>
                <AgGridColumn field="proj_name" headerName="Project Name"></AgGridColumn>
                <AgGridColumn field="project_home_page" headerName="Project Home Page"></AgGridColumn>
                <AgGridColumn field="start_date" headerName="Start Date"></AgGridColumn>
                <AgGridColumn field="stop_date" headerName="End Date"></AgGridColumn>

            </AgGridReact>
        </div>
    )
}

export default GridComponent;