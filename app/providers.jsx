"use client";

import ScrollToTop from "./components/helper/scroll-to-top";

export default function Providers({ children }) {
  return (
    <>
      {children}
      <ScrollToTop />
    </>
  );
}


