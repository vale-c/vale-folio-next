import { css } from 'styled-components';
import { screens } from '../tailwind';

export const hidden = css`
  display: none;
  @media (min-width: ${screens.xl}px) {
    display: block;
  }
`;
