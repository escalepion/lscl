import React from 'react';

const ContentListHeader = (props) => {
  const { title = '' } = props;

  return (
    <p className="content-list-header">{title}</p>
  );
};

export default ContentListHeader;
