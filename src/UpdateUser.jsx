import { Button, Container, Form } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
  const user = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;

    const updateData = { name, email };

    fetch(`https://9wcw9z-8080.csb.app/user/${user._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
    .then((res)=> res.json())
    .then(result => {console.log(result);
      if(result.modifiedCount){
          alert('information updated')
        }
      })
  };

  return (
    <div>
      <Container className="d-flex align-items-center justify-content-center min-vh-100">
        <div>
          <h2>Mr. {user.name} update your information</h2>
          <Form onSubmit={handleUpdate}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                defaultValue={user.name}
                placeholder="Enter Your Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                defaultValue={user.email}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default UpdateUser;
