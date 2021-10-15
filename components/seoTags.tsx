import Head from 'next/head';
import {
  MAIN_AUTHOR,
  MAIN_DESC,
  MAIN_ORIGIN,
  MAIN_TITLE,
  MAIN_URL,
  META_IMAGE,
  META_IMAGE_HEIGHT,
  META_IMAGE_WIDTH,
} from '../lib/constants';

function SeoTags() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content={MAIN_DESC} />
      <meta name="author" content={MAIN_AUTHOR} />
      <link rel="canonical" href={MAIN_URL} />
      <link rel="icon" href={`${MAIN_ORIGIN}/favicon.ico`} />
      <link rel="manifest" href={`${MAIN_ORIGIN}/manifest.json`} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={MAIN_TITLE} />
      <meta property="og:description" content={MAIN_DESC} />
      <meta property="og:url" content={MAIN_URL} />
      <meta property="og:site_name" content={MAIN_TITLE} />
      <meta property="og:image" content={META_IMAGE} />
      <meta property="og:image:secure_url" content={META_IMAGE} />
      <meta property="og:image:width" content={`${META_IMAGE_WIDTH}`} />
      <meta property="og:image:height" content={`${META_IMAGE_HEIGHT}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={MAIN_DESC} />
      <meta name="twitter:title" content={MAIN_TITLE} />
      <meta name="twitter:image" content={META_IMAGE} />
      <title>{MAIN_TITLE}</title>
    </Head>
  );
}

export default SeoTags;
