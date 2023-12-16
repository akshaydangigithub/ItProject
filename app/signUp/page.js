"use client";
import React, { useState } from "react";
import "../../css/signUp.css";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import axios from "axios";

const page = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const FormHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/user/signup", { username, email, password })
      .then((res) => {
        console.log(res);
        alert("User Created");
        setUsername("");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.log(err);
        alert("User not Created");
      });
  };
  return (
    <>
      <div
        className="smooth-scroll-gsap"
        style={{ backgroundColor: "#191a1c" }}
      >
        <Navbar />
        <div className="signup_main ">
          <div className="card">
            <div className="card_title">
              <h1>Create Account</h1>
              <span>
                Already have an account?{" "}
                <Link href="/dashboard/adminLogin">Sign In</Link>
              </span>
            </div>
            <div className="form">
              <form onSubmit={FormHandler}>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="UserName"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button>Sign Up</button>
              </form>
            </div>
            <div className="card_terms">
              <input type="checkbox" name id="terms" />{" "}
              <span>
                I have read and agree to the <a href>Terms of Service</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
