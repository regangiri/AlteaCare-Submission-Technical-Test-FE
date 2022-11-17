import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="mx-0 lg:mx-24">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
