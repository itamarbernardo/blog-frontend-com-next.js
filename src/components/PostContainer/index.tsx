import styled, { css } from 'styled-components';

export type PostContainerProps = {
  size: 'max' | 'content';
};

const postContainerStyles = {
  max: (theme) => css`
    max-width: ${theme.sizes.max};
  `,
  content: (theme) => css`
    max-width: ${theme.sizes.content};
  `,
};

export const PostContainer = styled.div<PostContainerProps>`
  ${({ theme, size }) => css`
    width: 100%;
    margin: 0 auto;
    padding: 0 ${theme.spacings.large};
    ${postContainerStyles[size](theme)}
    @media ${theme.media.lteMedium} {
      padding: 0 calc(${theme.spacings.large} / 2);
    }
  `}
`;
