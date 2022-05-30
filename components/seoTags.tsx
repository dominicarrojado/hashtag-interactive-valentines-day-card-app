import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import {
  MAIN_DESC,
  MAIN_ORIGIN,
  MAIN_TITLE,
  MAIN_URL,
  META_IMAGE,
  META_IMAGE_ALT,
  META_IMAGE_HEIGHT,
  META_IMAGE_TYPE,
  META_IMAGE_WIDTH,
  SITE_NAME,
} from '../lib/constants';

export default function SeoTags() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href={`${MAIN_ORIGIN}/favicon.ico`} />
        <link rel="manifest" href={`${MAIN_ORIGIN}/manifest.json`} />
      </Head>
      <DefaultSeo
        title={MAIN_TITLE}
        description={MAIN_DESC}
        canonical={MAIN_URL}
        openGraph={{
          url: MAIN_URL,
          title: MAIN_TITLE,
          description: MAIN_DESC,
          type: 'website',
          images: [
            {
              url: META_IMAGE,
              width: META_IMAGE_WIDTH,
              height: META_IMAGE_HEIGHT,
              alt: META_IMAGE_ALT,
              type: META_IMAGE_TYPE,
            },
          ],
          site_name: SITE_NAME,
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
    </>
  );
}
