/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/react" />

// Augment React's img element to support fetchpriority attribute
declare namespace React {
  interface ImgHTMLAttributes<T> {
    fetchpriority?: 'high' | 'low' | 'auto';
  }
}
