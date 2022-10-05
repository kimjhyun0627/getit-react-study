import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library'
import Clock from './chapter_04/Clock'
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import Accommodate from './chapter_07/Accommodate';
import ConfirmButton from './chapter_08/ConfirmButton';
import LandingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/AttendanceBook-2';
import SignUp from './chapter_11/SignUp-2';

const root = ReactDOM.createRoot(document.getElementById('root'));

// 3챕터
/* root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
); */

// 4챕터
/* setInterval(() => {
  root.render(
  <React.StrictMode>
    <Clock />
  </React.StrictMode>
  );
}, 1000); */

// 5챕터
/* root.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>
); */

// 6챕터
/* root.render(
  <React.StrictMode>
    <NotificationList />
  </React.StrictMode>
); */

// 7챕터
/* root.render(
  <React.StrictMode>
    <Accommodate />
  </React.StrictMode>
); */

// 8챕터
/* root.render(
  <React.StrictMode>
    <ConfirmButton />
  </React.StrictMode>
) */

// 9챕터
/* root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
) */

// 10챕터
root.render(
  <React.StrictMode>
    <AttendanceBook/>
  </React.StrictMode>
)

// 11챕터
/* root.render(
  <React.StrictMode>
    <SignUp/>
  </React.StrictMode>
) */

reportWebVitals();