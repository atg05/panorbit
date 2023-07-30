import React, { ReactNode } from 'react';

type ContentOrComingSoonProps = {
  children: ReactNode | null;
};

const Tab: React.FC<ContentOrComingSoonProps> = ({ children }) => {
  if (children !== null) {
    return <main>{children}</main>;
  }

  return <main>Coming Soon</main>;
};

export default Tab;
