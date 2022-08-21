import styled from 'styled-components';
import { colors, screens, textSizes } from '../../tailwind';

export const Title = styled.h1`
  font-size: ${textSizes['4xl']};
  font-weight: 600;
  line-height: 56px;
  margin-bottom: 24px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  @media (max-width: ${screens.lg}px) {
    font-size: ${textSizes['2xl']};
    line-height: 42px;
  }
  @media (max-width: ${screens.md}px) {
    font-size: 32px;
    line-height: 38px;
  }
  @media (max-width: ${screens.sm}px) {
    font-size: ${textSizes['xl']};
    line-height: 32px;
  }
`;

export const Greeting = styled.h1`
  color: ${colors['grey']};
  margin-bottom: 32px;
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;

export const Name = styled.span`
  color: ${colors['indigo']};
  margin-bottom: 32px;
  text-5xl lg:text-6xl mb-6 tracking-wide;
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;

export const Subtitle = styled.p`
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;
