import React from 'react';
import styles from './CoursesLanding.module.css';
import Image from 'next/image';
import LandingImage1 from '../assets/CourseLanding1.png';
import LandingImage2 from '../assets/CourseLanding2.png';

const CoursesLanding: React.FC = () => {
    return (
        <div className={styles.coursesLanding}>
            <div className='mb-11'>
            <h1 className={styles.heading}>Unlock Your Mind</h1>
            </div>
            {/* <h2 className={styles.subHeading}>Psychic and Transformation Courses</h2> */}
            {/* <button className={styles.servicesButton}>See All Services</button> */}

            <div className={styles.coursesContainer}>
                
          

                <div className={styles.courseRowReverse}>
                    
                    <div className={styles.courseContent}>
                        <h3 className={styles.courseTitle}>Scientific Validation of ESP Abilities</h3>
                        <p className={styles.courseDescription}>
                            Brain activation and connectivity are studied during ESP tasks. brainwave patterns are monitored to detect ESP activity.
                        </p>
                        <button className={styles.courseButton}>Find Course</button>
                    </div>
                    <div className={styles.courseImageWrapperMind}>
                        <Image
                            src={LandingImage2}
                            alt="Mind Change Courses"
                            className={styles.courseImage}
                        />
                    </div>
                </div>
                <div className={styles.courseRow}>
                    <div className={styles.courseContent}>
                        <h3 className={styles.courseTitle}>Power and Use of ESP</h3>
                        <p className={styles.courseDescription}>
                           Medical research and ESP&apos;s role in understanding health conditions. Include a call-to-action inviting 
                           visitors to explore how ESP can benefit their own lives.
                        </p>
                        <button className={styles.courseButton}>Find Advisor</button>
                    </div>
                    <div className={styles.courseImageWrapper}>
                        <Image
                            src={LandingImage1}
                            alt="Psychic Readings"
                            className={styles.courseImage}
                        />
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default CoursesLanding;
