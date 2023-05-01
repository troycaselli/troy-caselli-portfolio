import React from 'react';

import graduationImg from '../images/about/bloomtech-graduation.jpg';
import maternityImg from '../images/about/maternity.jpg';
import glacierImg from '../images/about/glacier-national-park.jpg';
import cherriesImg from '../images/about/picking-cherries.jpg';
import studyingImg from '../images/about/juggling-responsibilities.jpg';
import '../styling/about.css';

function About() {
    return(
        <section className='about-wrapper'>
            <div className='featured-wrapper'>
                <div className='featured-image-wrapper'>
                    <div className='featured-portrait-container'>
                        <div className='featured-portrait__image image-troy-portrait'></div>
                    </div>
                </div>
                <div className='featured-certification-wrapper'>
                    <div className='featured-certification-container'>
                        <a 
                            href='https://www.credly.com/badges/ca1eb39e-acfe-432d-9199-0ce5ed2340f3/public_url'
                            target='_blank'
                            rel='noopener noreferrer'
                            type='button'
                        >
                            <div className='featured-certification__image image-bloomtech-logo' />
                        </a>
                    </div>
                </div>
                <div className='featured-text-container'>
                    <div className='featured-text-titles'>
                        <h3 className='featured-text__title'>Follower of Christ.</h3>
                        <h3 className='featured-text__title'>Husband and Father.</h3>
                        <h3 className='featured-text__title'>Web Developer.</h3>
                    </div>
                    <div className='featured-text-paragraphs'>
                        <p className='featured-text__paragraph'>
                            The majority of my childhood was marked by the unique privilege of being a military kid. This kind of upbringing was extremely formative in my understanding of the world and my place in it; I observed, experienced, and enjoyed numerous cultures of the world, became practiced in accepting change and adapting to my surroundings, and learned to differentiate between the things that are transient from those that are most important. As I approached adulthood, my family moved to the place I call home, Spokane, Washington. It is here that I resolved to pursue ministry due to my growing love for Christ and the church. Consequently, I earned a bachelor’s degree from Moody Bible Institute, and I am currently pursuing an M.Div. from The Southern Baptist Theological Seminary.
                        </p>
                        <p className='featured-text__paragraph'>
                            Alongside this pursuit, I also cultivated a strong desire to be active and trained in another career field. For the next two and a half years, I worked for a small construction company and succeeded in my daily toil. Little did I know, however, that this work would result in a significant back injury. With a career pivot on the horizon, I was determined to enter a field that I had a passion for and could excel in, a field that I could use to serve my community and the world. After much deliberation, I chose to enter into the tech field as a Full Stack Web Developer. As a result, I spent the next year self-learning programming and earning a Full Stack certification through Bloom Institute of Technology. Currently, I am glad to be using my programming skills as a freelancer for ikTech, a company native to Spokane with a distinct focus on software development for nonprofit organizations.
                        </p>
                        <p className='featured-text__paragraph'>
                            Lastly, I am married to Teri Jo, my beloved bride of three years, and we have been astoundingly blessed with our son, Tobias. I thoroughly enjoy spending time together and with our families, serving the church, hiking and being outdoors, thinking deeply, and building my ancient and modern currency collection.
                        </p>
                    </div>
                </div>
            </div>
            <div className='gallery-wrapper'>
                <img src={graduationImg} alt='bloomtech graduation' className='gallery__image'></img>
                <img src={maternityImg} alt='maternity' className='gallery__image'></img>
                <img src={glacierImg} alt='glacier national park' className='gallery__image'></img>
                <img src={cherriesImg} alt='cherry picking' className='gallery__image'></img>
                <img src={studyingImg} alt='studying with Tobias' className='gallery__image'></img>
            </div>
        </section>
    );
}

export default About;