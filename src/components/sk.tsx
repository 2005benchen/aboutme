// aboutme/src/components/SociableKitWidget.tsx


"use client";

import React, { useEffect, useState } from "react";

const SociableKitWidget = () => {
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  useEffect(() => {
    if (window.SociableKit && typeof window.SociableKit.init === "function") {
      window.SociableKit.init();
      setWidgetLoaded(true);
    }
  }, []);

  return (
    <div className="sk-ww-linkedin-profile-post my-6 mx-auto flex justify-center">
      <div
        id="sociablekit-widget-container"
        data-embed-id="25504736"
      ></div>
      {!widgetLoaded && <p>Loading LinkedIn widget...</p>}
    </div>
  );
};

export default SociableKitWidget;