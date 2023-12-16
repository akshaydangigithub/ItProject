"use client";

import Link from "next/link";
import {
  AiOutlineLogout,
  AiOutlineUserAdd,
  AiOutlineHome,
} from "react-icons/ai";
import { TbDeviceAnalytics } from "react-icons/tb";
import { MdOutlineNoteAlt } from "react-icons/md";
import { FaChevronDown, FaBars } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { Container, Row, Col } from "react-bootstrap";

import "../../css/componentcss/SuperAdminDashboard.css";
import "../../css/componentcss/AdminDashboard.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const RootLayout2 = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    var dropdown = document.querySelectorAll(".dropdown");
    var flag = 1;
    dropdown.forEach((item) => {
      item.addEventListener("click", function () {
        if (flag === 1) {
          item.classList.add("active");
          flag = 0;
        } else {
          item.classList.remove("active");
          flag = 1;
        }
      });
    });
  }, []);

  useEffect(() => {
    var sidebar = document.querySelector(".sidebar");
    var flag2 = 0;
    const menu = document.querySelector(".bx-menu");
    menu.addEventListener("click", function () {
      if (flag2 === 0) {
        sidebar.classList.add("close");
        flag2 = 1;
      } else {
        sidebar.classList.remove("close");
        flag2 = 0;
      }
    });
  }, []);

  // // get the token from the local storage
  // const token = localStorage.getItem("token");

  // // if token is not available then redirect to login page
  // if (!token) {
  //   router.push("/adminLogin");
  // }

  // logout function
  const logoutHandel = () => {
    localStorage.removeItem("token");
    router.push("/adminLogin");
  };

  return (
    <>
      <div className={"sidebar"}>
        <Link href="/" className="logo-box" style={{ textDecoration: "none" }}>
          <div className="logo-name">
            <h6
              style={{
                color: "#fff",
                fontFamily: "poppins",
                fontWeight: "bold",
                fontSize: 25,
                textAlign: "center",
                marginTop: 30,
              }}
            >
              Super Admin Dashboard
            </h6>
          </div>
        </Link>
        <ul className="sidebar-list">
          <li>
            <div className="title">
              <Link
                href="/"
                className="link"
                style={{ textDecoration: "none" }}
              >
                <i className="bx bx-grid-alt">
                  <AiOutlineHome />
                </i>
                <span className="name">Home</span>
              </Link>
            </div>
            <div className="submenu">
              <Link
                href="/"
                className="link submenu-title"
                style={{ textDecoration: "none" }}
              >
                Home
              </Link>
            </div>
          </li>

          <li>
            <div className="title">
              <Link
                href="/adminPanel/superAdminDashboardView"
                className="link"
                style={{ textDecoration: "none" }}
              >
                <i className="bx bx-grid-alt">
                  <TbDeviceAnalytics />
                </i>
                <span className="name">Dashboard</span>
              </Link>
            </div>
            <div className="submenu">
              <Link
                href="/adminPanel/superAdminDashboardView"
                className="link submenu-title"
                style={{ textDecoration: "none" }}
              >
                Dashboard
              </Link>
            </div>
          </li>

          <li className="dropdown" style={{ overflow: "hidden" }}>
            <div className="title">
              <Link
                className="link"
                href="#"
                style={{ textDecoration: "none" }}
              >
                <i className="bx bx-book-alt">
                  <MdOutlineNoteAlt />
                </i>
                <span className="name">Requests</span>
              </Link>
              <i className="bx bxs-chevron-down">
                <FaChevronDown />
              </i>
            </div>
            <div className="submenu">
              <Link
                href="/adminPanel/AllRequests"
                className="link"
                style={{ textDecoration: "none" }}
              >
                All Requests
              </Link>
            </div>
          </li>

          <li className="dropdown">
            <div className="title">
              <Link
                href="#"
                className="link"
                style={{ textDecoration: "none" }}
              >
                <i className="bx bx-book-alt">
                  <AiOutlineUserAdd />
                </i>
                <span className="name">Users</span>
              </Link>
              <i className="bx bxs-chevron-down">
                <FaChevronDown />
              </i>
            </div>
            <div className="submenu">
              <Link
                href="/adminPanel/AllUsers"
                className="link"
                style={{ textDecoration: "none" }}
              >
                All Users
              </Link>
            </div>
          </li>

          <li>
            <div className="title">
              <Link
                href="#"
                className="link"
                style={{ textDecoration: "none" }}
              >
                <i className="bx bx-grid-alt">
                  <BiSolidContact />
                </i>
                <span className="name">Contact requests</span>
              </Link>
            </div>
            <div className="submenu">
              <Link
                href="#"
                className="link submenu-title"
                style={{ textDecoration: "none" }}
              >
                Contact requests
              </Link>
            </div>
          </li>

          <li>
            <div className="title">
              <Link
                href="/"
                className="link"
                style={{ textDecoration: "none" }}
                onClick={() => logoutHandel()}
              >
                <i className="bx bx-grid-alt">
                  <AiOutlineLogout />
                </i>
                <span className="name">Log out</span>
              </Link>
            </div>
            <div className="submenu">
              <Link
                href="/"
                className="link submenu-title"
                style={{ textDecoration: "none" }}
                onClick={() => logoutHandel()}
              >
                Log out
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <section className="home">
        <div className="toggle-sidebar">
          <FaBars
            className={"bx bx-menu"}
            style={{
              width: 30,
              height: 30,
              marginLeft: 10,
              marginTop: "-100px",
              color: "#FD7D72",
            }}
          />
        </div>
        <Container style={{ padding: "20px" }} fluid>
          <Row>
            <Col md={12}>{children}</Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default RootLayout2;
