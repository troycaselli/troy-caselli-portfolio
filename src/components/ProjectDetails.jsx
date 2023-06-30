import React from 'react';
import Divider from '../components/Divider';
import '../styling/projectDetails.css';
import confirmationEmail from '../images/projects/faithInFive/confirmationEmail.png';
import dashboardPage from '../images/projects/faithInFive/dashboardPage.png';
import groupsPage from '../images/projects/faithInFive/groupsPage.png';
import listViewPage from '../images/projects/faithInFive/listViewPage.png';
import loginPage from '../images/projects/faithInFive/loginPage.png';
import mapViewPage from '../images/projects/faithInFive/mapViewPage.png';
import restrictedPage1 from '../images/projects/faithInFive/restrictedPage1.png';
import restrictedPage2 from '../images/projects/faithInFive/restrictedPage2.png';
import restrictedPage3 from '../images/projects/faithInFive/restrictedPage3.png';
import usersPage from '../images/projects/faithInFive/usersPage.png';
import welcomePage from '../images/projects/faithInFive/welcomePage.png';

function ProjectDetails() {

  return (
    <section className='project-wrapper'>

      <div className='project-section'>
        <h1 className='project__title'>FAITH IN FIVE</h1>
        <p className='project__about'>
          This web app helps Faith Bible Church serve its neighbors better through interactive addresses display and visit log feature
        </p>
        {/* <p className='project__contributions'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ab ratione error. Commodi placeat, ex eius harum atque eum porro dolorem cumque eligendi quisquam modi. Possimus doloremque fugiat reiciendis sapiente!
        </p> */}
      </div>

      <Divider />

      <div className='project-section'>
        <h2 className='project__subtitle'>User Overview</h2>
        <div className='users-container'>
          <div className='project__users-circle'>
            <p className='project__circle-text'>Enables Faith Bible Church Members <b>(Frontliners)</b> to track their hospitality and service visits to neighbors more effectively</p>
          </div>
          <div className='project__users-circle'>
            <p className='project__circle-text'>Simplifies the tasks of <b>administrators</b> who manage users, groups, and addresses</p>
          </div>
        </div>
      </div>

      <Divider />

      <div className='project-section'>
        <h2 className='project__subtitle'>User Flow</h2>
        <div className='project-card'>
          <h3 className='project-card__user-title'>Frontliner Flow</h3>
          <div className='circles-container'>
            <div className='project__circle'>
              <p className='project__circle-bold'><b>I</b></p>
              <p className='project__circle-text'>
                Login to the FI5 App with a valid, whitelisted email address
              </p>
            </div>
            <div className='project__circle'>
              <p className='project__circle-bold'><b>II</b></p>
              <p className='project__circle-text'>
                Check the addresses (including location, status, and previous visits log) assigned for your group to visit
              </p>
            </div>
            <div className='project__circle'>
              <p className='project__circle-bold'><b>III</b></p>
              <p className='project__circle-text'>
                After meeting with a neighbor, submit a visit log with information such as name, interest in church, prayer requests, and needs
              </p>
            </div>
            </div>
          </div>
        <div className='project-card'>
          <h3 className='project-card__user-title'>Administrator Flow</h3>
          <div className='circles-container'>
            <div className='project__circle'>
            <p className='project__circle-bold'><b>I</b></p>
              <p className='project__circle-text'>
                Login to the FI5 App with a valid, admin email address
              </p>
            </div>
            <div className='project__circle'>
            <p className='project__circle-bold'><b>II</b></p>
              <p className='project__circle-text'>
                Add, edit, or remove users, groups, and addresses in order to ensure the best service for everyone who lives near the church 
              </p>
            </div>
          </div>
        </div>
      </div>

      <Divider />

      {/* <div className='project-section'>
        <h2 className='project__subtitle'>Wireframes</h2>
      </div>

      <Divider /> */}

      <div className='project-section'>
        <h2 className='project__subtitle'>UX / Design</h2>
        <div className='design-container'>
          <img src={welcomePage} alt='welcome page'className='design__img'></img>
          <img src={loginPage} alt='login page'className='design__img'></img>
          <img src={confirmationEmail} alt='confirmation email'className='design__img'></img>
          <img src={dashboardPage} alt='dashboard page'className='design__img'></img>
          <img src={mapViewPage} alt='map view page'className='design__img'></img>
          <img src={listViewPage} alt='list view pge'className='design__img'></img>
          <img src={groupsPage} alt='groups page'className='design__img'></img>
          <img src={usersPage} alt='users page'className='design__img'></img>
          <img src={restrictedPage1} alt='restricted page'className='design__img'></img>
        </div>
      </div>

    </section>
  );
}

export default ProjectDetails;
