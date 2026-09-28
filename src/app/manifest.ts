import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bayu | Software Engineering Portfolio',
    short_name: 'Bayu Portfolio',
    description: 'Personal portfolio of Bayu — Software Engineering student building resilient networks, POS systems, and public transit apps.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAFAF6',
    theme_color: '#FDE68A',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
