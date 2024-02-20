import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <>
    <main style={{backgroundColor: "#FFE382", padding: "7rem", borderRadius: "10px", borderTopLeftRadius: "5rem"}}>
      <Navbar />
      <Outlet />
    </main>
    </>
  )
}
