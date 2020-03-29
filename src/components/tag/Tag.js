import React from 'react';
import PropTypes from 'prop-types';
import './tag.scss';

class Tag extends React.Component {
  render() {
    const { children, handleClick, handleClose } = this.props;
    return (
      <span className="tag">
        <span onClick={() => handleClick(children)}>{children}</span>
        <ion-icon name="close-outline" onClick={() => handleClose(children)}></ion-icon>
      </span>
    );
  }
}

Tag.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Tag;
