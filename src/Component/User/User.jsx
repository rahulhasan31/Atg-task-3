import { useState, useEffect } from "react";
import axios from "axios";

import Header from "../../page/Header";
import { Col, Container, Row } from "react-bootstrap";
import UserCard from "../UserCard/UserCard";
import "./user.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(selectedUser);
  useEffect(() => {
    axios
      .get("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };
  const displayLimit = 25;
  return (
    <div className="container">
      <Header />
      <Container>
        <Row>
          <Col lg="6">
            <div className="col-md-8">
              <h1 className="bg-primary bg-opacity-25  text-center fw-medium  p-2">
                USERS LIST
              </h1>
              {loading ? (
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                <ul className="list-group gap-3 rounded-2">
                  {users.length === 0 ? (
                    <p>No data to show</p>
                  ) : (
                    users?.slice(20, displayLimit).map((user) => (
                      <li
                        key={user.id}
                        className={`bg-secondary bg-opacity-25
                        list-group-item  ${
                          selectedUser === user ? "active" : ""
                        }`}
                        onClick={() => handleUserClick(user)}
                      >
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="avatar"
                        />
                        <span className="ml-3 ms-5 fs-4 fw-bold">
                          {user?.profile?.firstName}
                        </span>
                      </li>
                    ))
                  )}
                </ul>
              )}
            </div>
          </Col>
          <Col lg="6">
            {" "}
            <div className="row">
              <div className="">
                {selectedUser ? (
                  <UserCard user={selectedUser} />
                ) : (
                  <p>Select a user to view details</p>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserList;
