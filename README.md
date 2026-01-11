# Meishu Biotech

![Meishu Biotech](/images/logo.jpg)

**Meishu Biotech** is a state-of-the-art pharmaceutical and biotechnology website designed to showcase innovation in healthcare. It features a premium, modern user interface with a "Monochrome & Emerald" aesthetic, ensuring a professional and scientifically credible presence.

## 🚀 Features

### Core Experience
*   **Modern Aesthetics**: Built with a "Monochrome & Emerald" theme, strictly enforcing high-contrast Black/White backgrounds with Emerald accents for a premium feel.
*   **Dark & Light Mode**: Fully adaptive theme system. Uses semantic classes (e.g., `.text-heading`, `.bg-page`) to ensure perfect visibility and contrast in any mode.
*   **Responsive Design**: Flawless experience across all devices, from mobile phones to large desktop screens.
*   **Smooth Animations**: Integrated `Framer Motion` for sophisticated reveal effects, scroll animations, and interactive elements.

### Pages & Functionality
*   **Home**: Impactful Hero section, "Why Choose Us" highlights, and interactive Vision references.
*   **Our Products**: Comprehensive catalog separating "Patent Applied Innovations" (large, prominent cards) from standard market products. Includes external links for detailed product info (e.g., Osteahenz).
*   **R&D**: Showcases the research pipeline and technology platforms (Nanotechnology, Smart Delivery) with timeline or card-based layouts.
*   **News**: Updates section with unique, context-aware summaries of company achievements.
*   **Contact**: Functional contact form and dual-office location details (India & Singapore).

## 🛠️ Tech Stack

*   **Framework**: [React](https://react.dev/) (v18+)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Routing**: [React Router DOM](https://reactrouter.com/)

## 📂 Project Structure

```bash
src/
├── components/   # Reusable UI components (Header, Footer, Button, Reveal)
├── pages/        # Main route pages (Home, Products, About, etc.)
├── assets/       # Static assets and icons
└── index.css     # Global styles and Tailwind directives
public/
├── images/       # Product images and logos
└── .htaccess     # Server configuration for Apache deployment
```

## ⚡ Getting Started

### Prerequisites
*   Node.js (v16 or higher)
*   npm or yarn

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/surya5376/Meishu-Biotech.git
    cd MeishuBiotech
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run development server**:
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` to view it in the browser.

## 🚀 Deployment

### Vercel (Recommended)
1.  Push your code to GitHub.
2.  Import project in Vercel.
3.  **Important**: Ensure "Root Directory" is empty or set to `./`.
4.  Deploy! (SPA routing is handled by `vercel.json`).

### BigRock / cPanel
1.  Run `npm run build`.
2.  Zip the contents of the `dist` folder.
3.  Upload to `public_html` on your server.
4.  The included `.htaccess` file handles routing automatically.

## 📞 Contact

**India Office**
#G Block, Alipur Road
New Delhi

**Singapore Office**
Meishu Sg

Email: [meishubiotech@gmail.com](mailto:meishubiotech@gmail.com)

---
© 2026 Meishu Biotech. All rights reserved.
