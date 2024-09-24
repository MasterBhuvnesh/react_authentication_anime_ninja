## Create your project

**Start by creating a new React project with Create React App v5.0+ if you don't have one already set up.**

```bash
npm init react-app anime-ninja
cd anime-ninja
```

## Install Tailwind CSS

**Install `tailwindcss` via npm, and then run the init command to generate your `tailwind.config.js` file.**

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Configure your template paths

**Add the paths to all of your template files in your `tailwind.config.js` file. & Also add Poppins font link in `.public/index.html` file.**

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
```

```html
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
  rel="stylesheet"
/>
```

## Add the Tailwind directives to your CSS

**Add the `@tailwind` directives for each of Tailwind’s layers to your `./src/index.css` file.**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Start your build process

Run your build process with `npm run start`.

```bash
npm run start
```

## Then for `headlessui` & `heroicons`

```bash
npm install tailwindcss@latest
npm install @headlessui/react @heroicons/react
```

## Add auth0

```bash
npm install @auth0/auth0-react
```
