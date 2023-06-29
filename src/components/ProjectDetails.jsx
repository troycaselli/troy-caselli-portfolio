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

      <div className='project-intro'>
        <h1 className='project-title'>Faith in Five</h1>
        <p className='project-about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas reprehenderit cupiditate, illum sed delectus ipsa eligendi? Ipsa blanditiis praesentium, sapiente voluptates delectus adipisci nemo nulla, obcaecati modi exercitationem quo nobis!</p>
        <p className='project-contributions'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ab ratione error. Commodi placeat, ex eius harum atque eum porro dolorem cumque eligendi quisquam modi. Possimus doloremque fugiat reiciendis sapiente!</p>
      </div>

      <Divider />

      <div className='project-wireframes'>

      </div>
      
      <Divider />

      <div className='project-user-flow'>
        
      </div>
      
    </section>
  );
}

export default ProjectDetails;
