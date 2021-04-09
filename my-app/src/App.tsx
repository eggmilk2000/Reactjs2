import React from 'react';
import './App.css';
import './Components/Noti.css'
import { Noti } from './Components/Notification';
import RatingBar from './Components/RatingBar';


function App() {
  const notificationList = ["Email Notification", "Push Notification", "Monthly Reports", "Quarter Reports"];
  return(
    <div className="myApp">
      <div id="rating_bar"> <RatingBar /></div>
      <br />
      <div><Noti Notifications={notificationList}/></div>
    </div>
  )
}

export default App;
