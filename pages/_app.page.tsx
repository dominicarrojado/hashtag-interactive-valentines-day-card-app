import 'normalize.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import SeoTags from '../components/seoTags';
import TagManager from '../components/tagManager';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SeoTags />
      <TagManager />
      <Component {...pageProps} />
    </>
  );
}
export default App;
