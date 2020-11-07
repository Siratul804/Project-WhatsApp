import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import db from "./FireBase";

function SidebarChat({ id, name, addNewChat }) {
  const [seed, setseed] = useState("");
  const [messages, setMessages] = useState("");

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

  useEffect(() => {
    setseed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please Enter A Name For Chat!!!");

    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };
  console.log(id);
  return !addNewChat ? (
    <Link
      to={{
        pathname: `/rooms/${id}`,
      }}
    >
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat_info">
          <h2> {name} </h2>
          <p> {messages[0]?.message} </p>{" "}
        </div>{" "}
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2> Add New Chat </h2>{" "}
    </div>
  );
}

export default SidebarChat;
