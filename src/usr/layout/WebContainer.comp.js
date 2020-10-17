import React from 'react';
import PropTypes from 'prop-types';
import s from './WebContainer.module.css';

const placeholderStyle = {
  padding: '1em',
  border: '1px dashed #cccccc',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const Placeholder = ({ title }) => {
  return (
    <div style={placeholderStyle}>
      <code>{title}</code>
    </div>
  );
};

const WebContainer = props => {
  const { header, sidebarLeft, sidebarRight, content, footer } = props;
  return (
    <div className={s.wrapper}>
      <div className={s.header}>{header}</div>
      <div className={s.sidebar}>{sidebarLeft}</div>
      <div className={s.sidebar2}>{sidebarRight}</div>
      <div className={s.content}>{content}</div>
      <div className={s.footer}>{footer}</div>
    </div>
  );
};

WebContainer.propTypes = {
  header: PropTypes.element,
  sidebarLeft: PropTypes.element,
  sidebarRight: PropTypes.element,
  content: PropTypes.element,
  footer: PropTypes.element
};

WebContainer.defaultProps = {
  header: <Placeholder title="header" />,
  sidebarLeft: <Placeholder title="sidebarLeft" />,
  sidebarRight: <Placeholder title="sidebarRight" />,
  content: <Placeholder title="content" />,
  footer: <Placeholder title="footer" />
};

export default WebContainer;
