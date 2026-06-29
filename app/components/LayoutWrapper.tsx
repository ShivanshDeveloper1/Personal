"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Hide navbar on specific page
  const hideNavbar = pathname === "/neet-result-predictor";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <main className={!hideNavbar ? "" : ""}>
        {children}
      </main>
    </>
  );
}