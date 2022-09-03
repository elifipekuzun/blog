import React, { FormEvent, useState, useEffect } from 'react';
import styles from './contact-form.module.css';
import { ResData } from '../../pages/api/contact';
import { Notification, Status } from '../ui/notification';

export const ContactForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [requestStatus, setRequestStatus] = useState<Status>();
  const [notificationMessage, setNotificationMessage] = useState<{
    title: string;
    message: string;
  }>();

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    setRequestStatus(Status.pending);
    setNotificationMessage({
      title: 'Loading...',
      message: 'Your message is sending...',
    });

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, name, message }),
    })
      .then((res) => res.json())
      .then((data: ResData) => {
        if (data.message !== 'Success!') {
          setRequestStatus(Status.error);
          setNotificationMessage({ title: 'Error', message: data.message });
          return;
        }
        setRequestStatus(Status.success);
        setNotificationMessage({
          title: 'Success!',
          message: 'Your message is sent successfully!',
        });
        setEmail('');
        setMessage('');
        setName('');
      })
      .catch(console.log);
  };

  useEffect(() => {
    if (requestStatus === Status.error || requestStatus === Status.success) {
      const timer = setTimeout(() => {
        setRequestStatus(undefined);
        setNotificationMessage(undefined);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [requestStatus]);

  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type={'email'}
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type={'text'}
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {requestStatus && (
        <Notification
          title={notificationMessage!.title}
          message={notificationMessage!.message}
          status={requestStatus}
        />
      )}
    </section>
  );
};
