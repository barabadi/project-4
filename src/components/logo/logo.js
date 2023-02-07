import React from 'react';

const Logo = (props) => {
  const { type = 'default' } = props;
  return (
    <img src={`/images/logo-${type}.svg`} alt="Logo" />
  );
};

export default Logo;
