"use client";
import Navbar from "../../components/Navbar";
import AdminLogin from "../../components/admin/AdminLogin";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();

  // // get the token from the local storage
  // const token = localStorage.getItem("token");

  // // if token is present then redirect to the admin dashboard
  // if (token) {
  //   router.push("/adminPanel/superAdminDashboardView");
  // }

  return (
    <>
      <Navbar />
      <AdminLogin />
    </>
  );
};

export default page;
