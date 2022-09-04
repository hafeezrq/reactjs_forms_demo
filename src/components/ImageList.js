import React from 'react';

const ImageList = props => {
  const images = props.images.map(({ id, description, urls }) => (
    <img src={urls.regular} alt={description} key={id} />
  ));
  return <div>{images}</div>;
};

export default ImageList;
