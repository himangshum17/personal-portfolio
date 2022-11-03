import { ReactNode } from 'react';
import SolidButton from './buttonsolid.component';
import OutlineButton from './outlinebutton.component';

type RootButtonProps = {
  variant?: 'solid' | 'outline';
  children: ReactNode;
};
const RootButton = ({ variant, children }: RootButtonProps) => {
  switch (variant) {
    case 'solid':
      return <SolidButton>{children}</SolidButton>;
    case 'outline':
      return <OutlineButton>{children}</OutlineButton>;
    default:
      return <SolidButton>{children}</SolidButton>;
  }
};
export default RootButton;
