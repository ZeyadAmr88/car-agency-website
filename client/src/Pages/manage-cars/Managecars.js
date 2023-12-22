        import React from "react";
        import Table from "react-bootstrap/Table";
        const Managecars=()=>
        {
            return (
            <div className="manage-car p-5">
                <h3 className="text-center mb-3">Manage Car</h3>
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Car Name</th>
                    <th>Description</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>
                        <img src="https://picsum.photos/200/300" alt="" className="image-avatar"/>
                    </td>
                    <td>bmw</td>
                    <td>description </td>
                    <td>
                        <button className="btn btn-sm btn-danger">Delete</button>
                        <button className="btn btn-sm btn-primary">update</button>
                        
                    </td>
                    </tr>
                </tbody>
                </Table>
            </div>
            );
        };
        export default Managecars;