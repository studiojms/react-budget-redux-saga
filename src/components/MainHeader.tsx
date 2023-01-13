import { ReactNode } from 'react';
import { Header } from 'semantic-ui-react';

interface HeaderProps {
  children?: ReactNode;
  type?: string;
}

function MainHeader({ children, type = 'h1' }: HeaderProps) {
  return <Header as={type}>{children}</Header>;
}

export default MainHeader;
