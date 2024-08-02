# 🌟 Vue 3 Starter With Vite

This project built with Vue, TypeScript, and TailwindCSS.

## Starter Introduction

This application use DDD pattern. Here you can learn a little about DDD pattern, [Visit me](https://www.geeksforgeeks.org/domain-driven-design-ddd)

---

## 🎖️ Web Technologies

| Technology  | Description                                                                | Version |
| ----------- | -------------------------------------------------------------------------- | ------- |
| TailwindCSS | A utility-first CSS framework for rapidly building custom user interfaces. | latest  |
| Typescript  | JavaScript with syntax for types                                           | latest  |
| Vitest      | A blazing fast unit test framework powered by Vite                         | latest  |
| Vite        | Native-ESM powered web dev build tool                                      | latest  |
| VueJS       | The progressive JavaScript framework for building modern web UI.           | latest  |

## 🏅 Dependencies & Libraries

| Library                         | Description                                                                                                    | Version |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------- |
| @commitlint/cli                 | Lint our commit messages                                                                                       | latest  |
| @commitlint/config-conventional | Shareable commitlint config enforcing conventional commits                                                     | latest  |
| @tailwindcss/forms              | A plugin that provides a basic reset for form styles that makes form elements easy to override with utilities. | latest  |
| @vuelidate/core                 | Simple, lightweight model-based validation for Vue.js                                                          | latest  |
| @vuelidate/validators           | Standalone validators package for Vuelidate.                                                                   | latest  |
| axios                           | Promise based HTTP client for the browser and node.js                                                          | latest  |
| husky                           | Modern native Git hooks made easy                                                                              | latest  |
| mitt                            | Tiny 200b functional event emitter / pubsub.                                                                   | latest  |
| pinia                           | Intuitive, type safe and flexible Store for Vue.                                                               | latest  |
| pinia-plugin-persistedstate     | Configurable persistence and rehydration of Pinia stores.                                                      | latest  |
| tailwindcss                     | A utility-first CSS framework for rapidly building custom user interfaces.                                     | latest  |
| unplugin-auto-import            | Auto import APIs on-demand for Vite, Webpack, Rspack, Rollup and esbuild.                                      | latest  |
| unplugin-imagemin               | Unplugin compression Image Compression plugin based on squoosh and sharp.                                      | latest  |
| unplugin-vue-components         | Components auto importing for Vue                                                                              | latest  |
| vite-plugin-compression         | Use gzip or brotli to compress resources.                                                                      | latest  |
| vite-plugin-remove-console      | A vite plugin that remove the types of console in the production environment                                   | latest  |
| vite-plugin-svg-icons           | Vite Plugin for fast creating SVG sprites.                                                                     | latest  |
| vue                             | The progressive JavaScript framework for building modern web UI.                                               | latest  |
| vue-router                      | Expressive, configurable and convenient routing for Vue.js                                                     | latest  |

## 🛠️ Setup Project

To get this project up and running in your development environment, follow these step-by-step instructions.

### 🍴 Prerequisites

We need to install or make sure that these tools are pre-installed on your machine:

- [NodeJS](https://nodejs.org/en/download/): It is a JavaScript runtime build.
- [Git](https://git-scm.com/downloads): It is an open source version control system.

## 🔍 Usage

### How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

### 🚀 Install Project

1. Clone the Repository

```bash
git clone https://github.com/existhink/VueJS3-DDD-TS.git
```

2. Install dependencies using bun

```shell
bun or bun install
```

3. Change **.env.local.example** to **.env.local**

You must change the .env.local.example to .env.local and match it with you local machine.

4. Run project for development

```shell
bun start:dev
```

---

## 🎉 Build The App

1. Build the app

```shell
bun build
```

## 🧪 Test

Run test across all files

```shell
bun test:unit
```

---

## 📂 Folder Structure

Project structure for this react starter

```javascript

.husky                                    // Husky configuration
|   |_______commit-msg
|   |_______pre-commit
.vscode                                   // VSCode configuration
|   |_______extensions.json
public
|   |_______favicon.ico
src                                       // Entry point for the app.
|   |_______app                           // Core of feature in the project.
|   |   |_______assets                    // Contain all assets for the app.
|   |   |_______components                // Global components for the app.
|   |   |_______composables               // Contain all composable for the app.
|   |   |_______constants                 // Contain all constants for the app.
|   |   |_______helpers                   // Contain all helpers for the app.
|   |   |_______router                    // Configuration for load all routes in the app.
|   |   |_______store                     // Configuration for global store in the app.
|   |_______modules                       // Contain all modules for the app.
|   |   |_______authentication            // Authentication module.
|   |   |   |_______components            // Contain all components for authentication module.
|   |   |   |_______constants             // Contain all constants for authentication module.
|   |   |   |_______interfaces            // Contain all interfaces for authentication module.
|   |   |   |_______services              // Contain all services for authentication module. Please use this folder to store all business logic.
|   |   |   |_______store                 // Configuration for store in authentication module.
|   |   |   |_______views                 // Contain all views for authentication module.
|   |   |_______{module-name}             // Example module.
|   |_______plugins                       // Contain all plugins for the app.
|   |   |_______axios                     // Axios plugin for the app.
|   |   |_______mitt                      // Mitt plugin for the app.
|   App.vue                               // Entry point for the app.
|   interfaces.d.ts                       // Global interfaces for the app.
|   main.ts                               // Bootstrap file for the app.
|   meta.d.ts                             // Global meta for the app.
|   style.css                             // Global style for the app.
|   vite-env.d.ts                         // Vite environment file for the app.
test
|   |_______unit                          // Unit test for the app.
```

### ⚒️ How to Contribute

Want to contribute? Great!

To fix a bug or enhance an existing module, follow these steps:

- Fork the repo
- Create a new branch (`git checkout -b improve-feature`)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (`git commit -am 'Improve feature'`)
- Push to the branch (`git push origin improve-feature`)
- Create a Pull Request

### 📩 Bug / Feature Request

If you find a bug (the website couldn't handle the query and / or gave undesired results), kindly open an issue [here](https://github.com/existhink/VueJS3-DDD-TS/issues/new) by including your search query and the expected result.

If you'd like to request a new function, feel free to do so by opening an issue [here](https://github.com/existhink/VueJS3-DDD-TS/issues/new). Please include sample queries and their corresponding results.

## 📜 Credits

List your collaborators, if any, with links to their GitHub profiles.

I'd like to acknowledge my collaborators, who contributed to the success of this project. Below are links to their GitHub profiles.

Furthermore, I utilized certain third-party assets that require attribution. Find the creators' links in this section.

If I followed tutorials during development, I'd include the links to those as well.

👦 Rafi Khoirulloh <br>
Email: khoirulloh.rafi2@gmail.com <br>
GitHub: @apiiyu

👩 Dyah Eka Lestari <br>
Email: dyahekalestari9@gmail.com <br>
GitHub: @ekady
