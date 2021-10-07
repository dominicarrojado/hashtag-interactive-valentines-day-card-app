import { render, screen } from '@testing-library/react';
import type { AppProps } from 'next/app';
import { getFakeSentences } from '../../lib/test-helpers';
import App from '../_app.page';

describe('<App />', () => {
  it('should render children', () => {
    const children = getFakeSentences();
    const appProps = {} as AppProps;

    appProps.Component = jest.fn(() => <>{children}</>);

    render(<App {...appProps} />);

    const childrenEl = screen.queryByText(children);

    expect(childrenEl).toBeInTheDocument();
  });
});
