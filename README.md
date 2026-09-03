# La Maison des Lallas

A Sanctuary of Moroccan Elegance. This project is a modern, interactive web application built to showcase the luxurious experience of La Maison des Lallas.

## Features

- **Immersive User Interface**: Smooth scroll animations, sticky sections, and parallax effects powered by [Motion](https://motion.dev/).
- **Rich Media**: High-quality background videos and image galleries.
- **Responsive Design**: Fully responsive layout tailored for mobile, tablet, and desktop viewing.
- **Sections**:
  - Hero with Video Background
  - About
  - Rooms Exploration
  - Photo Gallery
  - Activities (Hammam, Masterclasses, Tours)
  - Guest Reviews
  - Amenities
  - Booking & Location

## Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Motion (Framer Motion)](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/theg0-0done/la-maison-des-pallas.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`.

### Building for Production

To create a production build:
```bash
npm run build
```
The output will be generated in the `dist/` directory, ready to be deployed to platforms like Vercel, Netlify, or GitHub Pages.

## Deployment Notes

- **Video Assets**: Background `.mp4` videos are committed directly to standard Git (not Git LFS) to ensure out-of-the-box compatibility with standard hosting platforms like Vercel and Netlify.
