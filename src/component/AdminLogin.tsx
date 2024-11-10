'use client';

import React, { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Login.module.css';
import logo from '../assets/logo-north-node.png'; 
import astrology from '../assets/astrology-image.png';

const AdminLogin: React.FC = () => {
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
        <Image src={logo} alt="North Node Logo" width={200} height={100} />
      </header>

      <div className={styles.mainContent}>
        <div className={styles.formSection}>
          {/* Center the heading */}
          <h2 className={`${styles.formTitle} text-center`}>Admin Login</h2>
          
          {/* Formik Form */}
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              localStorage.setItem('isLoggedIn', 'true');
              window.location.href = '/admin';  // Redirect to the admin dashboard
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className={styles.inputContainer}>
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
                  <Field
                    name="password"
                    type="password"
                    placeholder=" "
                    className={`${styles.formInput} ${errors.password && touched.password ? styles.errorInput : ''}`}
                  />
                  <label className={styles.floatingLabel}>Password</label>
                  <ErrorMessage name="password" component="div" className={styles.errorText} />
                </div>

                {/* Forgot Password link */}
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

export default AdminLogin;
