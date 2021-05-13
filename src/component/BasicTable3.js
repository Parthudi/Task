import React,{useState, useEffect} from "react"
import MaterialTabel from "material-table"
import {Link} from "react-router-dom"
import "../App.css"
// class Table extends Component

const TableData3 = () => {
    const [data, setData] = useState([])

    const columns = [
        {title: "ID", field:"id"},
        {title: "Name", field:"name"},
        {title: "Type", field:"cargo[0].type"},
        {title: "Description", field:"cargo[0].description"},
        {title: "Volume", field:"cargo[0].volume"},
        {title: "Mode", field:"mode"},
        {title: "Type", field:"type"},
        {title: "Destination", field:"destination"},
        {title: "Origin", field:"origin"},
        {title: "Type", field:"services[0].type"},
        {title: "Total", field:"total"},
        {title: "Status", field:"status"},
        {title: "userId", field:"userId"},
    ];

useEffect(() => { 
    const dataToStore = fetch("http://localhost:3000/shipments?_start=20&_end=30").then(res => res.json())
                            .then(resp => setData(resp))
         }, []);

return(
    <div className="App sizing">
        <Link to="/user"> Want to Post Data </Link>

            <MaterialTabel
                title="Data"
                data = {data}
                columns= {columns}
                onChangeRowsPerPage={() => console.log("row changed")}
                options={{
                    pageSize: 10,
                    pageSizeOptions: [10, 15],
                }}
               
            />
    </div>
)}

export default TableData3