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
            <p></p>
          </div>
          <div className='project__users-circle'>
            <p></p>
          </div>
        </div>
      </div>

      <Divider />

      <div className='project-section'>
        <h2 className='project__subtitle'>User Flow</h2>
        <div className='project-card'>
          <h3>Frontliner Flow</h3>
          <div className='circles-container'>
            <div className='project__circle'>
              <p></p>
            </div>
            <div className='project__circle'>
              <p>I <br></br> information</p>
            </div>
            <div className='project__circle'>
              <p></p>
            </div>
            </div>
          </div>
        <div className='project-card'>
          <h3>Administrator Flow</h3>
          <div className='circles-container'>
            <div className='project__circle'>
              <p></p>
            </div>

            <div className='project__circle'>
              <p></p>
            </div>
            <div className='project__circle'>
              <p></p>
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
        <div className='design-card'>
          {/* <img src={} alt=''></img>
          <img src={} alt=''></img>
          <img src={} alt=''></img>
          <img src={} alt=''></img>
          <img src={} alt=''></img>
          <img src={} alt=''></img> */}
        </div>
      </div>

    </section>
  );
}

export default ProjectDetails;
