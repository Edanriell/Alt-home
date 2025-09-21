# Alt-home

A static (non-responsive) website. Built to explore HTML5 structure, modern CSS (SASS, PostCSS), and JavaScript tooling via Webpack and Babel.

## Table of Contents

- [Overview](#overview)
- [Image](#image)
- [Technologies](#technologies)  
- [Contents](#contents)  
- [Setup & Usage](#setup--usage)  
- [Contributing](#contributing)  
- [License & Reuse](#license--reuse)  
- [Contact](#contact)  

---

## Overview

This project is a frontend experiment focusing on design, layout, and tooling without responsive behaviour. It’s useful for seeing how HTML, CSS preprocessing (SASS/PostCSS), and modern JavaScript build pipelines with Webpack and Babel work together in a simple website setup.

---

## Image
![Alt-home](https://github.com/Edanriell/Alt-home/blob/master/althome.png?raw=true)

---

## Technologies

- **HTML5** for structure  
- **CSS3**, with **SASS** & **PostCSS** for styles and post-processing  
- **JavaScript**, transpiled via **Babel**  
- **Webpack** for bundling assets and build pipeline  
- Contains a small server component (`server.php`) and a mock data file (`db.json`)  

---

## Contents

Here are important items and directories in the repo:

| File / Folder       | Purpose / Notes                                               |
|---------------------|---------------------------------------------------------------|
| `src/`              | Source files: HTML, JS, SASS, etc.                            |
| `webpack.config.js` | Webpack configuration                                         |
| `package.json`      | Project dependencies and scripts                              |
| `server.php`        | A simple PHP file (if applicable for backend or mock server)  |
| `db.json`           | Mock data (if used in the project)                            |
| `althome.png`       | Screenshot or image asset showing the site design             |
| `.editorconfig`, `.eslintrc`, `.prettierrc` | Code style and linting / formatting setup |

---

## Setup & Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/Edanriell/Alt-home.git
   cd Alt-home

2. Install dependencies:
   ```bash
   npm install

3. Run build / dev scripts (if available):
   ```bash
   npm run dev     # or npm run build depending on config

4. Serve or open the built HTML files in your browser (local server or static file viewer). The project is not responsive, so best viewed in desktop layout.

## Contributing

This project is mainly for experimentation and learning. If you want to suggest design improvements, update tooling, or refactor for responsiveness, feel free to open an issue or pull request. Please keep changes documented and preserve the original intent where possible.

## License & Reuse

Code is provided "as-is" for educational and demonstration purposes. You’re welcome to view, clone, and adapt. If you reuse code, please credit Edanriell. If desired, adding a license file (e.g. MIT) is encouraged for clarity.

## Contact

GitHub: [Edanriell](https://github.com/Edanriell)
