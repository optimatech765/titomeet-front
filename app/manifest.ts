import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        id: "/",
        name: 'Titomeet',
        short_name: 'Titomeet',
        description: 'Une plateforme développée par Optima Services au Bénin pour promouvoir des évènements et créer des connexions lors d’after‑works, rencontres entre collègues, etc.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#28B0E6',
        icons: [
            {
                "src": "/icons/icon-48x48.png",
                "sizes": "48x48",
                "type": "image/png"
            },
            {
                "src": "/icons/icon-72x72.png",
                "sizes": "72x72",
                "type": "image/png"
            },
            {
                "src": "/icons/icon-96x96.png",
                "sizes": "96x96",
                "type": "image/png"
            },
            {
                "src": "/icons/icon-128x128.png",
                "sizes": "128x128",
                "type": "image/png"
            },
            {
                "src": "/icons/icon-144x144.png",
                "sizes": "144x144",
                "type": "image/png"
            },
            {
                "src": "/icons/icon-152x152.png",
                "sizes": "152x152",
                "type": "image/png"
            },
            {
                "src": "/icons/icon-192x192.png",
                "sizes": "192x192",
                "type": "image/png"
            }
        ],
        display_override: [
            "window-controls-overlay",
            "fullscreen",
            "standalone",
            "minimal-ui",
            "browser"
        ],
        related_applications: [],
        prefer_related_applications: false
    }
}