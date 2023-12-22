import react from"react";

const UpdateReservation =() =>{
    return <div className="Update">;
    <h2>Update UpdateReservation</h2>
    <alert variant="danger" className="p-2">
        this is simple alert
    </alert>
    <alert variant="success" className="p-2">
        this is simple alert
    </alert>
    <Form>
    <Form.Group className="mb-1" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="car name" />
       
      </Form.Group>
      <Form.Group className="mb-1" >
        <textarea
        className="form-control"
        placeholder="Description"
        rows={5}></textarea>
      </Form.Group>
      <Button variant="primary" type="submit">
        UpdateReservation
      </Button>
    </Form>
    </div>
};
  export default UpdateReservation;