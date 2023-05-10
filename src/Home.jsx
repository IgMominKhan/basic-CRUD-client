import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import InputForm from "./InputForm.jsx";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const usersData = useLoaderData();
  const [users, setUsers] = useState(usersData);

  const handleDelete = (_id) => {
    fetch(`https://9wcw9z-8080.csb.app/user/${_id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((status) => {
        console.log(status);
        if (status.deletedCount) {
          const currentUsers = users.filter((user) => user._id !== _id);

          setUsers(currentUsers);
        }
      })
      .catch(console.dir);
  };

  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100">
      <div>
        <InputForm users={users} setUsers={setUsers}></InputForm>
        <div className="mt-5">
          {users.map((user) => (
            <Row key={user._id}>
              <p>
                {user.name} {user.email}{"     "}
                <Link to={`/update/${user._id}`}>update</Link>
                <button onClick={() => handleDelete(user._id)}>x</button>
              </p>
            </Row>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Home;
