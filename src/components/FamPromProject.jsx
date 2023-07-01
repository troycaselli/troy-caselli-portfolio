import React from 'react';
import Divider from './Divider';
import '../styling/projectDetails.css';
import confirmationEmail from '../images/projects/famPromIntake/confirmationEmail.png';
import intakeForm from '../images/projects/famPromIntake/intakeForm.png';
import intakePageCompleted from '../images/projects/famPromIntake/intakePageCompleted.png';
import intakePageIncomplete from '../images/projects/famPromIntake/intakePageIncomplete.png';
import landingPage from '../images/projects/famPromIntake/landingPage.png';
import lastPage from '../images/projects/famPromIntake/lastPage.png';
import loginPage from '../images/projects/famPromIntake/loginPage.png';
import profilePage from '../images/projects/famPromIntake/profilePage.png';
import welcomePage from '../images/projects/famPromIntake/welcomePage.png';

function FamPromProject() {

  return (
    <section className='project-wrapper'>

      <div className='project-section'>
        <h1 className='project__title'>FAMILY PROMISE SMS</h1>
        <h3 className='project__role'>Front-End Developer</h3>
        <p className='project__about'>
            This application enables homeless individuals to digitally fill out and submit an intake form for admittance to a local shelter.
        </p>
        <a 
          className='project__link'
          href='https://shelter-management-system.vercel.app/'
          target='_blank'
          rel='noopener noreferrer'
        >Website</a>
        {/* <p className='project__contributions'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ab ratione error. Commodi placeat, ex eius harum atque eum porro dolorem cumque eligendi quisquam modi. Possimus doloremque fugiat reiciendis sapiente!
        </p> */}
      </div>

      <Divider />

      <div className='project-section'>
        <h2 className='project__subtitle'>User Overview</h2>
        <div className='users-container'>
          <div className='project__users-circle'>
            <p className='project__circle-text'><b></b></p>
          </div>
        </div>
      </div>

      <Divider />

      <div className='project-section'>
        <h2 className='project__subtitle'>User Flow</h2>
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

      <div className='project-section'>
        <h2 className='project__subtitle'>Wireframes</h2>
        <p className='project__text'>The stakeholder wanted the digital intake form to match the style of the current app and include the information in the sixteen-page paper intake form (excerpt below).</p>
        <img src={intakeForm} alt='intake form sample'className='design__img'></img>
      </div>

      <Divider />

      <div className='project-section'>
        <h2 className='project__subtitle'>UX / Design</h2>
        <div className='design-container'>
          <img src={welcomePage} alt='welcome page'className='design__img'></img>
          <img src={loginPage} alt='login page'className='design__img'></img>
          <img src={confirmationEmail} alt='confirmation email'className='design__img'></img>
          <img src={landingPage} alt='landing page'className='design__img'></img>
          <img src={profilePage} alt='profile page'className='design__img'></img>
          <img src={lastPage} alt='last pge'className='design__img'></img>
          <div className='design-container__full-images'>
            <img src={intakePageIncomplete} alt='intake page: incomplete'className='design__img'></img>
            <img src={intakePageCompleted} alt='intake page: completed'className='design__img'></img>
          </div>
        </div>
      </div>

    </section>
  );
}

export default FamPromProject;
