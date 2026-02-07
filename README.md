# Next.js Rendering Lab

A simple demonstration repository showcasing the four core rendering strategies in Next.js:

- **CSR** (Client-Side Rendering)
- **SSR** (Server-Side Rendering)
- **SSG** (Static Site Generation)
- **ISR** (Incremental Static Regeneration)

Each rendering technique is demonstrated with the same UI (Pokémon cards) to help you understand the differences in how and when pages are rendered.

## Running Locally

To run this project locally, follow these steps:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Start the production server:**
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to explore the different rendering strategies.

## What You'll Learn

- **CSR**: Data fetched in the browser after page load
- **SSR**: Page rendered on the server on each request
- **SSG**: Page generated once at build time
- **ISR**: Page cached and regenerated in the background after a set time

Click on each button to see the same UI implemented with different rendering strategies!

## Live Demo

Check out the live demo: [nextjs-rendering-lab.vercel.app](https://nextjs-rendering-lab-six.vercel.app)
