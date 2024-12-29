import React from "react";
import { List, ListItem, ListItemText, Avatar } from "@mui/material";
import "../styles/sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Avatar src="/user.jpg" alt="User" className="avatar" />
      <h3 className="user-name">Abhishek Kumar</h3>
      <List>
        <Link to="/overview">
          <ListItem button className="list-item">
            <ListItemText primary="Overview" />
          </ListItem>
        </Link>
        <Link to="/admin">
          <ListItem button className="list-item">
            <ListItemText primary="Admin" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
};

export default Sidebar;
