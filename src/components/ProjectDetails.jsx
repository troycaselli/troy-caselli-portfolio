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

      <div className='project__intro'>
        <h1 className='project__title'>Faith in Five</h1>
        <p className='project__about'>
          This web app helps Faith Bible Church serve its neighbors better through interactive addresses display and visit log feature.
        </p>
        {/* <p className='project__contributions'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ab ratione error. Commodi placeat, ex eius harum atque eum porro dolorem cumque eligendi quisquam modi. Possimus doloremque fugiat reiciendis sapiente!
        </p> */}
      </div>

      <Divider />

      <div className='project__overview'>
        <h2 className='project__title'>Overview</h2>
      </div>

      <Divider />

      <div className='project__user-flow'>
        <h2 className='project__title'>User Flows</h2>
        <div className='flow-card'>
          <h3>Frontliner Flow</h3>
          {/* make circles with info */}
          <div className='flow__step'>
            <p></p>
          </div>
          {/* arrow */}
          <div className='flow__step'>
            <p></p>
          </div>
          {/* arrow */}
          <div className='flow__step'>
            <p></p>
          </div>
          {/* arrow */}
        </div>
        <div className='flow-card'>
          <h3>Administrator Flow</h3>
          {/* make circles with info */}
          <div className='flow__step'>
            <p></p>
          </div>
          {/* arrow */}
          <div className='flow__step'>
            <p></p>
          </div>
          {/* arrow */}
          <div className='flow__step'>
            <p></p>
          </div>
          {/* arrow */}
        </div>
      </div>

      <Divider />

      {/* <div className='project__wireframes'>
        <h2 className='project__title'>Wireframes</h2>
      </div>

      <Divider /> */}

      <div className='project__design'>
        <h2 className='project__title'>UX / Design</h2>
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
