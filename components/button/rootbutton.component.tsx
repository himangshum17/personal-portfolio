import { ReactNode } from 'react';
import SolidButton from './buttonsolid.component';
import OutlineButton from './outlinebutton.component';

type RootButtonProps = {
  variant?: 'solid' | 'outline';
  children: ReactNode;
  href?: string;
  target?: boolean;
};
const RootButton = ({ variant, children, href, target }: RootButtonProps) => {
  switch (variant) {
    case 'solid':
      return (
        <SolidButton href={href} target={target}>
          {children}
        </SolidButton>
      );
    case 'outline':
      return (
        <OutlineButton href={href} target={target}>
          {children}
        </OutlineButton>
      );
    default:
      return (
        <SolidButton href={href} target={target}>
          {children}
        </SolidButton>
      );
  }
};
export default RootButton;
