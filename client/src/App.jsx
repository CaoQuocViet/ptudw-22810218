import { useEffect } from 'react'
import Layout from './components/Layout';
import RoutesDef from './RoutesDef';

function App() {
  useEffect(() => {
    // Load main.js after React has created virtual DOM
    const script = document.createElement('script');
    script.src = '/js/main.js';
    script.async = false; // Ensure main.js is loaded after, preserving execution order
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      try {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      } catch (err) {
        console.warn("Script cleanup error:", err);
      }
    };
  }, []); // Add empty dependency array

  return (
    <Layout>
      <RoutesDef />
    </Layout>
  );
}

export default App;
