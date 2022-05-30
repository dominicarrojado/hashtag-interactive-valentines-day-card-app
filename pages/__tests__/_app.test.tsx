import { render, screen } from '@testing-library/react';
import type { AppProps } from 'next/app';
import { getFakeSentences } from '../../lib/test-helpers';
import * as SeoTags from '../../components/seoTags';
import * as TagManager from '../../components/tagManager';
import App from '../_app.page';

describe('<App />', () => {
  it('should render expected components', () => {
    const seoTagsSpy = jest.spyOn(SeoTags, 'default');
    const tagManagerSpy = jest.spyOn(TagManager, 'default');

    const children = getFakeSentences();
    const appProps = {} as AppProps;

    appProps.Component = jest.fn(() => <>{children}</>);

    render(<App {...appProps} />);

    const childrenEl = screen.queryByText(children);

    expect(childrenEl).toBeInTheDocument();

    expect(seoTagsSpy).toBeCalledTimes(1);
    expect(tagManagerSpy).toBeCalledTimes(1);
  });
});
