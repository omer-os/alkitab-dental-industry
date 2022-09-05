import "../styles/globals.css";

function MyApp({ Component, pageProps, AllSubjects }) {
  // this is for pages other than defaullt layouts
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return <Component {...pageProps} AllSubjects={AllSubjects} />;
}

export default MyApp;
