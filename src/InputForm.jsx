import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function InputForm({ users, setUsers }) {
  // submit user information to the server
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const data = { name, email };

    console.log(name, email);

    fetch("https://9wcw9z-8080.csb.app/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          setUsers([...users, {
            _id: result.insertedId,
            name: name,
            email: email,
          }]);
e.target.reset();
        }
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="mb-3">Add your information</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name :</Form.Label>
        <Form.Control name="name" type="text" placeholder="Enter Name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicemail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default InputForm;
