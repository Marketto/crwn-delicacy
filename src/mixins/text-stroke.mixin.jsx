import { css } from 'styled-components';

const BROWSER_PREFIX = [
  'ms',
  'o',
  'moz',
  'webkit'
];

const mixer = (property, value) => value ? css`
  ${property}: ${value};
  ${BROWSER_PREFIX.map(prefix => `-${prefix}-${property}: ${value};`).join('\n')}
` : '';

export const textStroke = (width = '1px', strokeColor = 'black', fillColor = null) => css`
  paint-order: stroke fill;

  ${mixer('text-fill-color', fillColor)}
  ${mixer('text-stroke-color', strokeColor)}
  ${mixer('text-stroke-width', width)}
`;