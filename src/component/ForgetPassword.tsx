'use client';
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import styles from './ForgotPassword.module.css';
import logo from '../assets/logo-north-node.png';
import emailIcon from '../assets/email.icon.png';
import lockImage from '../assets/lock-image.png';
import Link from 'next/link';


const ForgotPassword: React.FC = () => {
  // Validation schema for Formik
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('This field is required'),
  });

  return (
    <div className={styles.forgetPasswordContainer}>
      {/* Header Section */}
      <header className={styles.forgetPasswordHeader}>
        <Image src={logo} alt="North Node Logo" className={styles.forgetPasswordLogo} width={200} height={100} />
      </header>

      {/* Main Content */}
      <div className={styles.forgetPasswordMainContent}>
        {/* Left Side - Form */}
        <div className={styles.forgetPasswordFormSection}>
          <h2 className={styles.forgetPasswordFormTitle}>Forgot Password</h2>
          <p className={styles.forgetPasswordFormSubtitle}>
            Please enter your email to receive a verification code
          </p>

          <Formik
            initialValues={{ email: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className={styles.forgetPasswordInputContainer}>
                  <div className={styles.forgetPasswordIconWrapper}>
                    <Image src={emailIcon} alt="Email Icon" className={styles.forgetPasswordInputIcon} />
                  </div>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className={`${styles.forgetPasswordFormInput} ${errors.email && touched.email ? styles.errorInput : ''}`}
                  />
                  <ErrorMessage name="email" component="div" className={styles.errorText} />
                </div>

                <button type="submit" className={styles.forgetPasswordSubmitButton}>
                  SUBMIT
                </button>
              </Form>
            )}
          </Formik>

          <p className={styles.forgetPasswordLoginLink}>
            Already signed up? <Link href="/Login-page" className={styles.forgetPasswordLoginLinkText}>Login</Link>
          </p>
        </div>

        {/* Right Side - Image */}
        <div className={styles.forgetPasswordImageSection}>
          <Image src={lockImage} alt="Lock" className={styles.forgetPasswordImage} />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
