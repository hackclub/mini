// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
    site: 'https://mini.hackclub.com',
    fonts: [
        {
            provider: fontProviders.google(),
            name: 'Nunito Sans',
            cssVariable: '--font-nunito-sans',
            weights: [400, 700, 800, 900],
            styles: ['normal'],
            subsets: ['latin'],
            formats: ['woff2'],
            fallbacks: ['sans-serif'],
        },
        {
            provider: fontProviders.google(),
            name: 'Darumadrop One',
            cssVariable: '--font-darumadrop-one',
            weights: [400],
            styles: ['normal'],
            subsets: ['latin'],
            formats: ['woff2'],
            fallbacks: ['serif'],
        },
        {
            provider: fontProviders.google(),
            name: 'Pixelify Sans',
            cssVariable: '--font-pixelify-sans',
            weights: [400],
            styles: ['normal'],
            subsets: ['latin'],
            formats: ['woff2'],
            fallbacks: ['monospace'],
        },
    ],
    vite: {
        plugins: [tailwindcss()],
        server: {
            allowedHosts: ['.ngrok-free.dev', '.trycloudflare.com'],
        },
    },
});
