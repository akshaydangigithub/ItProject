"use client";

import React, { useState, useEffect } from "react";
import "../../css/componentcss/adminLogin.css";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const FormHandler = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    const res = await axios.post("http://localhost:8080/user/signin", data);
    if (res) {
      alert("login successfully");
      setEmail("");
      setPassword("");
      localStorage.setItem("token", res.data.token);
      router.push("/adminPanel/superAdminDashboardView");
    } else {
      alert("login failed");
    }
  };
  return (
    <>
      <div
        className="smooth-scroll-gsap"
        style={{ backgroundColor: "#191a1c" }}
      >
        <div className="loginPage_main">
          <div className="container">
            <div className="card">
              <form>
                <h1>Login Page</h1>
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Link onClick={FormHandler} className="button" href="#">
                  Login
                </Link>
                <p>
                  <input className="check" type="checkbox" />
                  Remember me
                  <Link className="forget" href="#">
                    Forgot account?
                  </Link>
                </p>
                <h5>
                  create account?<Link href="/signUp"> Create</Link>
                </h5>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
