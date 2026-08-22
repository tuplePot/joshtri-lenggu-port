"use client";

import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  window.addEventListener("storage", onChange);
  return () => {
    observer.disconnect();
    window.removeEventListener("storage", onChange);
  };
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}

const getServerSnapshot = () => false;

export function useDarkMode() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function setDarkMode(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark);
  try {
    localStorage.setItem("theme", dark ? "dark" : "light");
  } catch {
    // Private mode — ignore.
  }
}
