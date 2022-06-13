import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Table, Col, Button, Modal } from "react-bootstrap";
import { loadusers, deleteUsers, updateUser } from "../redux/action";
import "./Home.css";
import { connect } from "react-redux";
const Home = (props) => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  useEffect(() => {
    props.loadusers();
  }, []);

  const toDone = () => {
    history.push("./addUser");
  };

  const deleteUser = (id) => {
    props.deleteUsers(id);
  };

  const editModal = (item) => {
    console.log("item", item);
    setUser(item);
    setShow(true);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const update = () => {
    props.updateUser(user);

    setShow(false);
  };

  return (
    <center>
      <br />
      <h1> Home Page</h1>
      <Col sm={12} lg={6}>
        <Table bordered sm={12} lg={6} className="mt-5">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.userData?.map((item, id) => (
              <tr key={id}>
                <td>{id + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <Button
                    className="button12"
                    onClick={() => {
                      editModal(item);
                    }}
                  >
                    {" "}
                    Edit
                  </Button>
                  &nbsp;
                  <Button
                    className="button12"
                    onClick={() => {
                      deleteUser(item.id);
                    }}
                  >
                    {" "}
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button className="button1" onClick={toDone}>
          {" "}
          Create User
        </Button>
        <center>
          <Modal show={show} onHide={() => handleClose()} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title> Edit Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h6> Name</h6>
            </Modal.Body>
            <input
              style={{ margin: "20px" }}
              onChange={handleChange}
              value={user.name}
              name="name"
            />
            <Modal.Body>
              {" "}
              <h6>Email </h6>{" "}
            </Modal.Body>
            <input
              style={{ margin: "20px" }}
              onChange={handleChange}
              value={user.email}
              name="email"
            />
            <Modal.Footer>
              <Button onClick={update}> Submit</Button>
            </Modal.Footer>
          </Modal>
        </center>
      </Col>
    </center>
  );
};
const mapStateToProps = (state) => ({
  userData: state.data1.users.data,
});
const mapDispatchToProps = {
  loadusers,
  deleteUsers,
  updateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
