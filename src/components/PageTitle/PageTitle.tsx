import React from 'react';

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return <h1 className="text-3xl font-bold mb-4">{title}</h1>;
};

export default PageTitle;