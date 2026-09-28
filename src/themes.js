'use strict';

// Colour and type presets. A client can pick one with "theme" and override
// any single value with "colors" in their JSON file.

const SERIF = "'Iowan Old Style', 'Palatino Linotype', Palatino, 'Book Antiqua', Georgia, serif";
const SANS = "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

module.exports = {
  // Dark with brass accents: barbershops, tattoo studios
  classic: {
    bg: '#121110', surface: '#1c1a18', text: '#f3eee6', muted: '#aaa296', line: '#34302b',
    accent: '#c9a25b', accentText: '#15120d', heading: SERIF, body: SANS, headingWeight: 600
  },
  // Warm cream and rose: nail, lash, brow and beauty salons
  blush: {
    bg: '#fbf6f2', surface: '#ffffff', text: '#2b2024', muted: '#76666c', line: '#eadfd9',
    accent: '#a8475f', accentText: '#ffffff', heading: SERIF, body: SANS, headingWeight: 500
  },
  // Clean and calm: massage, physio, personal trainers
  fresh: {
    bg: '#f5f9f8', surface: '#ffffff', text: '#16302a', muted: '#566e68', line: '#dde8e5',
    accent: '#17785f', accentText: '#ffffff', heading: SANS, body: SANS, headingWeight: 700
  },
  // High contrast: modern barbers, gyms, streetwear-style shops
  bold: {
    bg: '#0c0c0c', surface: '#171717', text: '#ffffff', muted: '#a3a3a3', line: '#2b2b2b',
    accent: '#e5383b', accentText: '#ffffff', heading: SANS, body: SANS, headingWeight: 800
  }
};
