'use client';

import React, { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Login.module.css';
import logo from '../assets/logo-north-node.png'; 
import astrology from '../assets/astrology-image.png';
import facebookLogo from '../assets/facebook-iconn.png';
import googleLogo from '../assets/google-icon.png';
import emailIcon from '../assets/email.icon.png';
import passwordIcon from '../assets/password-icon.png';

const Login: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('This field is required'),
    password: Yup.string().required('This field is required'),
  });

  if (!isClient) {
    return null; 
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Image src={logo} alt="North Node Logo" width={200} height={100} />
          <div className={styles.headerButtons}>
            <Link href="/Sign-Up" passHref>
              <button className={styles.customerButton}>
                JOIN AS A CUSTOMER
              </button>
            </Link>
            <Link href="/Sign-Up-Advisor" passHref>
            <button className={styles.advisorButton}>
              JOIN AS AN ADVISOR
            </button>
            </Link>
          </div>
        </div>
      </header>

      <div className={styles.mainContent}>
        <div className={styles.formSection}>
          <h2 className={styles.formTitle}>Get Start Now</h2>
          <p className={`${styles.formSubtitle} text-center mb-6`}>
            Enter your credentials to access North Node
          </p>
          <div className={styles.socialButtonsContainer}>
            <button className={styles.socialButton}>
              <Image src={googleLogo} alt="Google" className={styles.socialIcon} />
              <div className={styles.textIcon}>
                LOGIN WITH GOOGLE
              </div>
            </button>
            <button className={styles.socialButton}>
              <Image src={facebookLogo} alt="Facebook" className={styles.socialIcon} />
              <div className={styles.textIcon}>
                LOGIN WITH FACEBOOK
              </div>
            </button>
          </div>
          <div className={styles.divider}>
            <div className={styles.dividerLine}></div>
            <span className={styles.dividerText}>OR</span>
            <div className={styles.dividerLine}></div>
          </div>

          {/* Formik Form */}
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              localStorage.setItem('isLoggedIn', 'true');
              window.location.href = '/'; 
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className={styles.inputContainer}>
                  <div className={styles.iconWrapper}>
                    <Image src={emailIcon} alt="Email Icon" className={styles.inputIcon} />
                  </div>
                  <Field
                    name="email"
                    type="email"
                    placeholder=" "
                    className={`${styles.formInput} ${errors.email && touched.email ? styles.errorInput : ''}`}
                  />
                  <label className={styles.floatingLabel}>Email</label>
                  <ErrorMessage name="email" component="div" className={styles.errorText} />
                </div>

                <div className={styles.inputContainer}>
                  <div className={styles.iconWrapper}>
                    <Image src={passwordIcon} alt="Password Icon" className={styles.inputIcon} />
                  </div>
                  <Field
                    name="password"
                    type="password"
                    placeholder=" "
                    className={`${styles.formInput} ${errors.password && touched.password ? styles.errorInput : ''}`}
                  />
                  <label className={styles.floatingLabel}>Password</label>
                  <ErrorMessage name="password" component="div" className={styles.errorText} />
                </div>

                <div className={styles.formFooter}>
                  <label className={styles.checkbox}>
                    <Field type="checkbox" name="remember" className={styles.checkboxInput} />
                    <span className={styles.checkboxLabel}>Remember Password</span>
                  </label>
                  <Link href="/forget-password" className={styles.forgotPassword}>
                    Forgot Password?
                  </Link>
                </div>
                <button type="submit" className={styles.loginButton}>
                  LOGIN
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Right Side - Image */}
        <div className={styles.imageSection}>
          <Image src={astrology} alt="Astrology Wheel" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default Login;