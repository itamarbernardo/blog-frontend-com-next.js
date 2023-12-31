import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Post, PostProps } from '.';

import mock from './mock';
// import { formatDate } from '../../utils/format-date';

const props: PostProps = mock;

describe('<Post />', () => {
  it('should render header, excerpt, cover, metadata and post', () => {
    const { container } = renderTheme(<Post {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument();
    expect(
      screen.getAllByText(/^Previsão de Preço de Ações na B3/i)[0],
    ).toHaveStyle({ 'font-size': '6.4rem' });
    // expect(screen.getByText(formatDate(props.createdAt))).toBeInTheDocument();
    // expect(
    //   screen.getByText(/^O trabalho abaixo faz uso de Machine Learn/i),
    // ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
