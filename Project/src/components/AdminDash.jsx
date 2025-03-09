import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import Admincard from './Admincard';
import style from './Admin.module.css';
import './admin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarMinus, faUser } from '@fortawesome/free-regular-svg-icons';
import { faPage4 } from '@fortawesome/free-brands-svg-icons';
import StudentTopic from './StudentTopic';
import Adminhome from './Adminhome';

function AdminDash({ onDataChange }) {
  const [users, setUsers] = useState(' ');
  const [quiz, setQuiz] = useState(' ');

  return (
    <>
      <Row className='ms-0 'id='main'>
        <Col lg={2} md={3} className='px-0 text-left bg-light'  id='layout' style={{display:"flex",flexDirection:"column"}}>
          <NavLink
            to='/admin/dash'
            className={({ isActive }) => (isActive ? `${style.adminPanel} ${style.active}` : style.adminPanel)}
          >
            Dashboard
          </NavLink>
          <NavLink
            to='/admin/viewQuiz'
            className={({ isActive }) => (isActive ? `${style.adminPanel} ${style.active}` : style.adminPanel)}
          >
            Manage Quiz
          </NavLink>
          <NavLink
            to='/admin/createQuiz'
            className={({ isActive }) => (isActive ? `${style.adminPanel} ${style.active}` : style.adminPanel)}
          >
            Create Quiz
          </NavLink>

          <NavLink
            to='/admin/student'
            className={({ isActive }) => (isActive ? `${style.adminPanel} ${style.active}` : style.adminPanel)}
          >
            Users
          </NavLink>

          <NavLink
            to='/admin/score'
            className={({ isActive }) => (isActive ? `${style.adminPanel} ${style.active}` : style.adminPanel)}
          >
            ContactUs Data
          </NavLink>
        </Col>

        <Col lg={10} sm={12} md={9} className=''>
          <Row className='d-flex justify-content-evenly me-0 pe-0 align-items-center'>
            <Row className='d-flex justify-content-center'>
              <Col sm={12}>
                <Outlet onDataChange={onDataChange} />
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default AdminDash;
