import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'script-defer',
      includeAssets: [
        'JEGS_FAVICON_NEGRO.svg',
        'jegs-pwa-icon-192.png',
        'jegs-pwa-icon-512.png',
        'offline.html',
        'Imagenes/og-image-v1.png',
      ],
      manifest: {
        name: 'JEGS Digital',
        short_name: 'JEGS',
        description: 'Web Development, Video Editing & AI Content services',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        background_color: '#050816',
        theme_color: '#050816',
        icons: [
          {
            src: '/jegs-pwa-icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/jegs-pwa-icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
        ],
      },
      workbox: {
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
        navigateFallback: null,
        globPatterns: ['**/*.{js,css,html,webp,woff2}'],
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.mode === 'navigate',
            handler: 'NetworkFirst',
            options: {
              cacheName: 'jegs-pages',
              networkTimeoutSeconds: 3,
              precacheFallback: {
                fallbackURL: '/offline.html',
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'jegs-google-fonts-stylesheets',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'jegs-google-fonts-webfonts',
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /\/Imagenes\/Portfolio\/Cards_Home\/.*\.png$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'jegs-portfolio-card-images',
              expiration: {
                maxEntries: 12,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /\/(JEGS_FAVICON_NEGRO\.svg|jegs-pwa-icon-(192|512)\.png|Imagenes\/og-image-v1\.png)$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'jegs-brand-assets',
              expiration: {
                maxEntries: 8,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
})
