import { useEffect } from 'react';

export default function AdScript({ scriptUrl, containerId, options = null }) {
  useEffect(() => {
    const existing = document.getElementById(containerId);

    // Optional config object
    if (options && typeof window !== 'undefined') {
      window.atOptions = options;
    }

    const script = document.createElement('script');
    script.src = scriptUrl;
    script.async = true;
    script.setAttribute('data-cfasync', 'false');

    if (existing) {
      existing.innerHTML = '';
      existing.appendChild(script);
    }

    return () => {
      // Cleanup on unmount
      if (existing) {
        existing.innerHTML = '';
      }
    };
  }, [scriptUrl, containerId, options]);

  return <div id={containerId} />;
}
