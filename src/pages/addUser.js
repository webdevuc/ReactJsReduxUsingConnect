import React, { useState } from "react";
import { Col, Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { adduser } from "../redux/action";
import { connect } from 'react-redux';
import { useDispatch } from "react-redux";
export const AddPage = (props) => {
    let history = useHistory();
    const [data, setData] = useState({
        name: "",
        email: "",
    });
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        const FinalData = {
            name: data.name,
            email: data.email,
        };
        props.adduser(FinalData)
        history.push("./");
    };
    return (
        <center>
            <center>
                <Col sm={12} lg={6} md={12} className="mt-5">
                    <Form onSubmit={handleSubmit}>
                        <Form.Label style={{ float: "left" }}>Name</Form.Label>
                        <br />
                        <input className="form-control mb-1" type="text" name="name" onChange={handleChange} />
                        <br />
                        <Form.Label style={{ float: "left" }}>Email</Form.Label>
                        <br />
                        <input className="form-control mb-1" type="email" name="email" onChange={handleChange} />{" "}
                        <br />
                        <br />
                        <Button variant="success" type="submit"> Add </Button> &nbsp;
                        <Link to="/">
                            <Button variant="primary" type="button"> Cancel</Button>
                        </Link>
                    </Form>
                </Col>
            </center>
        </center>
    );
};

export default connect(null,{adduser})(AddPage); 