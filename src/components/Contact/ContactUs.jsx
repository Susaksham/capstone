import React from 'react'
import NavigationBelt from '../NavigationHeader/NavigationBelt'
import SecondBelt from '../NavigationHeader/SecondBelt'
import classes from './Contact.module.css'
function ContactUs() {
  return (
    <>
      <NavigationBelt></NavigationBelt>
      <SecondBelt></SecondBelt>
      <div classNameName={classes.container}>
        <div className={classes['formbold-main-wrapper']}>
          <div className={classes['formbold-form-wrapper']}>
            <form>
              <div className={classes['formbold-mb-5']}>
                <label for="name" className={classes['formbold-form-label']}>
                  {' '}
                  Full Name{' '}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className={classes['formbold-form-input']}
                />
              </div>

              <div className={classes['formbold-mb-5']}>
                <label for="email" className={classes['formbold-form-label']}>
                  {' '}
                  Email Address{' '}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className={classes['formbold-form-input']}
                />
              </div>

              <div className={classes['formbold-mb-5']}>
                <label for="subject" className={classes['formbold-form-label']}>
                  {' '}
                  Subject{' '}
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter your subject"
                  className={classes['formbold-form-input']}
                />
              </div>

              <div className={classes['formbold-mb-5']}>
                <label for="message" className={classes['formbold-form-label']}>
                  {' '}
                  Message{' '}
                </label>
                <textarea
                  rows="6"
                  name="message"
                  id="message"
                  placeholder="Type your message"
                  className={classes['formbold-form-input']}
                ></textarea>
              </div>

              <div>
                <button className={classes['formbold-btn']}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs
