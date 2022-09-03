import React from 'react';
import ReactDOM from 'react-dom';
import styles from './notification.module.css';

export enum Status {
  success = 'success',
  pending = 'pendig',
  error = 'error',
}

export type NotificationProps = {
  title: string;
  message: string;
  status: string;
};

export const Notification: React.FC<NotificationProps> = ({
  title,
  message,
  status,
}) => {
  let statusClasses = '';

  if (status === Status.success) {
    statusClasses = styles.success;
  }

  if (status === Status.pending) {
    statusClasses = styles.pending;
  }

  if (status === Status.error) {
    statusClasses = styles.error;
  }

  const cssClasses = `${styles.notification} ${statusClasses}`;

  const reactDomContainer = document.getElementById('notification');

  if (!reactDomContainer) {
    return <div></div>;
  }

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    reactDomContainer
  );
};
