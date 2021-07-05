import "./styles.css";
import Modal from "./Modal";
import { useState } from "react";
import Button from "./Button";

export default function App() {
  const [isActive, setActive] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState("");

  const handleModal = (e) => {
    isActive ? setActive(false) : setActive(true);
  };

  const handleUserName = (e) => {
    e.preventDefault();
    const target = e.target.value;
    setUserName(target);
  };

  const handlePassword = (e) => {
    e.preventDefault();
    const target = e.target.value;
    setPassword(target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({
      ...userData,
      userName:
        userName !== "" ? userName : userData.userName ? userData.userName : "",
      userPassword:
        password !== ""
          ? password
          : userData.userPassword
          ? userData.userPassword
          : ""
    });
    setUserName("");
    setPassword("");
    setActive(!isActive);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setPassword("");
    setUserName("");
    setActive(!isActive);
  };

  const handleClearData = (e) => {
    e.preventDefault();
    setUserData("");
  };

  return (
    <div className="App">
      <h1>@LearnMern</h1>
      <h2>Styled Components Modal</h2>
      {userData !== "" ? (
        <>
          <p>UserData</p>
          <p>userName: {userData.userName}</p>
          <p>userPassword: {userData.userPassword}</p>
          <Button onClick={handleClearData}>Clear UserData</Button>
        </>
      ) : null}

      <Button onClick={handleModal}>
        {isActive ? "Close Modal" : "Open Modal"}
      </Button>
      {isActive ? (
        <Modal
          onChangeUserName={handleUserName}
          onChangePassword={handlePassword}
          onClickSubmit={handleSubmit}
          onClickClose={handleCancel}
          password={password}
          username={userName}
        ></Modal>
      ) : null}
    </div>
  );
}
