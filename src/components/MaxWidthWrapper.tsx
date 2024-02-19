import React, { ReactNode } from 'react';

type MaxWidthWrapperProps = {
  children: ReactNode;
};

const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({ children }) => {
  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
