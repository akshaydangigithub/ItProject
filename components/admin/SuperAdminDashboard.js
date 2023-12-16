import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import { FaChevronDown, FaBars } from 'react-icons/fa';
import {
  AiOutlineLogout,
  AiOutlineUserAdd,
  AiOutlineHome,
} from 'react-icons/ai';
import { MdOutlineNoteAlt } from 'react-icons/md';
import { BiSolidContact } from 'react-icons/bi';
import { BsBookmarkStar, BsGear } from 'react-icons/bs';
import { TbDeviceAnalytics } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

import '../../assets/css/componentcss/SuperAdminDashboard.css';
import '../../assets/css/componentcss/AdminDashboard.css';

import { GET_ALL_COMPLAINTS } from '../../graphql/Query';
import { useQuery } from '@apollo/client';

export default function AdminPanel() {
  const { data, loading, error } = useQuery(GET_ALL_COMPLAINTS);
  console.log(data);

  const navigate = useNavigate();

  useEffect(() => {
    var dropdown = document.querySelectorAll('.dropdown');
    var flag = 1;
    dropdown.forEach((item) => {
      item.addEventListener('click', function () {
        if (flag == 1) {
          item.classList.add('active');
          flag = 0;
        } else {
          item.classList.remove('active');
          flag = 1;
        }
      });
    });
  }, []);

  useEffect(() => {
    var sidebar = document.querySelector('.sidebar');
    var flag2 = 0;
    const menu = document.querySelector('.bx-menu');
    menu.addEventListener('click', function () {
      if (flag2 == 0) {
        sidebar.classList.add('close');
        flag2 = 1;
      } else {
        sidebar.classList.remove('close');
        flag2 = 0;
      }
    });
  }, []);

  useEffect(() => {
    if (!localStorage.getItem('superAdminToken')) {
      navigate('/adminLogin');
    }
  }, [navigate]);

  function logoutHandel() {
    localStorage.removeItem('superAdminToken');
    localStorage.removeItem('superAdminId');
    navigate('/');
  }

  return (
    <>
      <div className={'sidebar'}>
        <Link to="/" className="logo-box" style={{ textDecoration: 'none' }}>
          <div className="logo-name">
            <h6
              style={{
                color: '#fff',
                fontFamily: 'poppins',
                fontWeight: 'bold',
                fontSize: 25,
                textAlign: 'center',
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
              <Link to="/" className="link" style={{ textDecoration: 'none' }}>
                <i className="bx bx-grid-alt">
                  <AiOutlineHome />
                </i>
                <span className="name">Home</span>
              </Link>
            </div>
            <div className="submenu">
              <Link
                to="/"
                className="link submenu-title"
                style={{ textDecoration: 'none' }}
              >
                Home
              </Link>
            </div>
          </li>

          <li>
            <div className="title">
              <Link
                to="/adminPanel/superAdminDashboardView"
                className="link"
                style={{ textDecoration: 'none' }}
              >
                <i className="bx bx-grid-alt">
                  <TbDeviceAnalytics />
                </i>
                <span className="name">Dashboard</span>
              </Link>
            </div>
            <div className="submenu">
              <Link
                to="/adminPanel/superAdminDashboardView"
                className="link submenu-title"
                style={{ textDecoration: 'none' }}
              >
                Dashboard
              </Link>
            </div>
          </li>

          <li className="dropdown" style={{ overflow: 'hidden' }}>
            <div className="title">
              <Link className="link" style={{ textDecoration: 'none' }}>
                <i className="bx bx-book-alt">
                  <MdOutlineNoteAlt />
                </i>
                <span className="name">Complaints</span>
              </Link>
              <i className="bx bxs-chevron-down">
                <FaChevronDown />
              </i>
            </div>
            <div className="submenu">
              <Link
                to="/adminPanel/pendingComplaints"
                className="link"
                style={{ textDecoration: 'none' }}
              >
                Pending complaints
              </Link>
              <Link
                to="/adminPanel/acceptedComplaints"
                className="link"
                style={{ textDecoration: 'none' }}
              >
                Accepted complaints
              </Link>
              <Link
                to="/adminPanel/declinedComplaints"
                className="link"
                style={{ textDecoration: 'none' }}
              >
                Declined complaints
              </Link>
              <Link
                to="/adminPanel/paidComplaints"
                className="link"
                style={{ textDecoration: 'none' }}
              >
                Paid complaints
              </Link>
              <Link
                to="/adminPanel/unpaidComplaints"
                className="link"
                style={{ textDecoration: 'none' }}
              >
                Unpaid complaints
              </Link>
              <Link
                to="/adminPanel/resolvedComplaints"
                className="link"
                style={{ textDecoration: 'none' }}
              >
                Resolved complaints
              </Link>
            </div>
          </li>

          <li className="dropdown">
            <div className="title">
              <Link className="link" style={{ textDecoration: 'none' }}>
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
                to="/adminPanel/membershipUser"
                className="link"
                style={{ textDecoration: 'none' }}
              >
                All Users
              </Link>
            </div>
          </li>

          <li>
            <div className="title">
              <Link
                to="/adminPanel/contact-details"
                className="link"
                style={{ textDecoration: 'none' }}
              >
                <i className="bx bx-grid-alt">
                  <BiSolidContact />
                </i>
                <span className="name">Contact requests</span>
              </Link>
            </div>
            <div className="submenu">
              <Link
                to="/adminPanel/contact-details"
                className="link submenu-title"
                style={{ textDecoration: 'none' }}
              >
                Contact requests
              </Link>
            </div>
          </li>

          <li>
            <div className="title">
              <Link
                to="/"
                className="link"
                style={{ textDecoration: 'none' }}
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
                to="/"
                className="link submenu-title"
                style={{ textDecoration: 'none' }}
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
            className={'bx bx-menu'}
            style={{
              width: 30,
              height: 30,
              marginLeft: 10,
              marginTop: '-100px',
              color: '#FD7D72',
            }}
          />
        </div>
        <Container style={{ padding: '20px' }} fluid>
          <Row>
            <Col md={12}>
              <Outlet />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
