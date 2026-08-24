"use client";

import { useEffect } from "react";

export function RedirectSplash({ destination }: { destination: string }) {
  useEffect(() => {
    window.location.replace(destination);
  }, [destination]);

  return null;
}
