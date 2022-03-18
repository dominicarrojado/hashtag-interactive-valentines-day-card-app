import { render } from '@testing-library/react';
import * as Head from 'next/head';
import {
  MAIN_AUTHOR,
  MAIN_DESC,
  MAIN_TITLE,
  MAIN_URL,
  META_IMAGE,
  META_IMAGE_HEIGHT,
  META_IMAGE_WIDTH,
  SITE_NAME,
} from '../../lib/constants';
import SeoTags from '../seoTags';

describe('<SeoTags />', () => {
  beforeEach(() => {
    jest
      .spyOn(Head, 'default')
      .mockImplementation(({ children }) => <>{children}</>);

    render(<SeoTags />);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render author tag', () => {
    const metaAuthor = document.querySelector('meta[name="author"]');

    expect(metaAuthor).toHaveAttribute('content', MAIN_AUTHOR);
  });

  it('should render url tags', () => {
    const linkCanonical = document.querySelector('link[rel="canonical"]');
    const metaOgUrl = document.querySelector('meta[property="og:url"]');

    expect(linkCanonical).toHaveAttribute('href', MAIN_URL);
    expect(metaOgUrl).toHaveAttribute('content', MAIN_URL);
  });

  it('should render title tags', () => {
    const metaOgTitle = document.querySelector('meta[property="og:title"]');
    const metaTwitterTitle = document.querySelector(
      'meta[name="twitter:title"]'
    );
    const titleEl = document.querySelector('title');

    expect(metaOgTitle).toHaveAttribute('content', MAIN_TITLE);
    expect(metaTwitterTitle).toHaveAttribute('content', MAIN_TITLE);
    expect(titleEl).toHaveTextContent(MAIN_TITLE);
  });

  it('should render site name tag', () => {
    const metaSiteName = document.querySelector(
      'meta[property="og:site_name"]'
    );

    expect(metaSiteName).toHaveAttribute('content', SITE_NAME);
  });

  it('should render description tags', () => {
    const metaDesc = document.querySelector('meta[name="description"]');
    const metaOgDesc = document.querySelector(
      'meta[property="og:description"]'
    );
    const metaTwitterDesc = document.querySelector(
      'meta[name="twitter:description"]'
    );

    expect(metaDesc).toHaveAttribute('content', MAIN_DESC);
    expect(metaOgDesc).toHaveAttribute('content', MAIN_DESC);
    expect(metaTwitterDesc).toHaveAttribute('content', MAIN_DESC);
  });

  it('should render image url tags', () => {
    const metaOgImg = document.querySelector('meta[property="og:image"]');
    const metaOgSecureImg = document.querySelector(
      'meta[property="og:image:secure_url"]'
    );
    const metaTwitterImg = document.querySelector('meta[name="twitter:image"]');

    expect(metaOgImg).toHaveAttribute('content', META_IMAGE);
    expect(metaOgSecureImg).toHaveAttribute('content', META_IMAGE);
    expect(metaTwitterImg).toHaveAttribute('content', META_IMAGE);
  });

  it('should render image width tags', () => {
    const metaOgImgWidth = document.querySelector(
      'meta[property="og:image:width"]'
    );

    expect(metaOgImgWidth).toHaveAttribute(
      'content',
      META_IMAGE_WIDTH.toString()
    );
  });

  it('should render image height tags', () => {
    const metaOgImgHeight = document.querySelector(
      'meta[property="og:image:height"]'
    );

    expect(metaOgImgHeight).toHaveAttribute(
      'content',
      META_IMAGE_HEIGHT.toString()
    );
  });
});
