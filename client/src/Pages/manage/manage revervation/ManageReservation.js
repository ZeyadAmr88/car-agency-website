import react from "react"
import Table from "react-bootstrap/Table"
import "../../css/ManageReservation.css"
import {Link} from "react-router-dom"
import Alert from "react-bootstrap/Alert"
const ManageReservation =() => {
    return (
        <div className="manage-reseRvation">
            <div className="">
            <h3 className="text-center">ManageReservation</h3>
            <link to={"add"} className="">
                Add New reseRvation +
            </link>
            </div>
            <alert variant="danger" className="p-2">
        this is simple alert
    </alert><alert variant="success" className="p-2">
        this is simple alert
    </alert>

            <table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
            
            <tbody>
                <tr>

                </tr>
                <tr>
                    <td>1</td>
                    <td>
                        <img
                        src=""
                        alt=""
                        className="image-avatar"
                        />
                        </td>
                    <td>hu</td>
                    <td>Description</td>
                    <td>
                        <button className="btn btn-sm btn-danger">Delete</button>
                        <link to={"5"} className="btn btn-sm btn-primary mx-2">Update</link>
                        <link to={"5"} className="btn btn-sm btn-info">Show</link>

                    </td>

                </tr>
                </tbody>
                </table>

        </div>


    );
};
export default ManageReservation