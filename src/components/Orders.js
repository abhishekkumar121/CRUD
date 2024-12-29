import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { orders } from "../data";
import "../styles/orders.css";

const Orders = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 100);
  }, []);

  return (
    <TableContainer component={Paper} className="orders-section">
      <Table>
        <TableHead className="orders-header">
          <TableRow>
            <TableCell>Order Number</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Date Created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order, index) => (
            <TableRow
              key={order.id}
              className={`order-row ${loaded ? "animate-row" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TableCell>{order.number}</TableCell>
              <TableCell>{order.amount}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>{order.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Orders;
