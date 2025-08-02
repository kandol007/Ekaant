# Ekaant Agro Tourism Retreat - Homepage Recreation

This project is a fully functional, responsive, and dynamic recreation of a homepage for the Ekaant Agro Tourism Retreat, based on a provided Figma design. The primary objective was to build a pixel-perfect, fluidly responsive website using modern frontend technologies while ensuring all content is rendered dynamically.

---

## ✨ Key Features

* **Fully Responsive Design:** The layout is optimized for all screen sizes, from large desktops and laptops to tablets and mobile devices, ensuring a seamless user experience across all breakpoints.
* **Fluid Layouts:** Implemented using `calc()`-based values and relative units for fonts, padding, and margins to ensure smooth scaling between breakpoints, avoiding fixed-pixel layouts.
* **Dynamic Content:** No hardcoded data. All text, images, and configuration details are fetched from a central `content.json` file via a local API route, making the site easily updatable.
* **Interactive UI/UX:**
    * **Navbar Scroll Effects:** The navigation bar is initially transparent and positioned below the top edge, then animates to a solid background at the top of the screen on scroll.
    * **Accordion FAQ:** The FAQ section is implemented as an interactive accordion, allowing users to toggle the visibility of answers.
    * **Hover Animations:** Subtle hover effects on cards, buttons, and links provide visual feedback to the user.
* **Component-Based Architecture:** Built with React and Next.js, the UI is broken down into reusable, modular components for maintainability and scalability.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (v13+ with App Router)
* **Library:** [React](https://reactjs.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Language:** TypeScript

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* [Node.js](https://nodejs.org/) (v18.x or later)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone 
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd your-repository-name
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📂 Project Structure

The project follows a standard Next.js App Router structure:


.
├── app/                  # Main application folder
│   ├── api/content/      # API route for serving JSON data
│   │   └── route.ts
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage entry point
│
├── components/           # Reusable React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── FAQs.tsx
│   └── Footer.tsx
│
├── data/                 # Static data source
│   └── content.json      # All website content
│
└── public/               # Static assets (images, fonts)
└── images/


---

## 🔌 API Endpoint

All dynamic content for the site is served from a single local API endpoint:

* **URL:** `/api/content`
* **Method:** `GET`
* **Description:** This endpoint reads the `data/content.json` file and returns its content as a JSON object. All components that require dynamic data fetch it from this endpoint using `useEffect`.

