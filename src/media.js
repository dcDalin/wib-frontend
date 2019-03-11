import { css } from 'styled-components';
const sizes = {
  large: 1008,
  medium: 1007,
  small: 640
};
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
