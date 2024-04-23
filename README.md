To kickstart this application there is a set of steps you must follow:

1. Run "yarn" to install all dependencies
2. Run "json-server --watch ./data/db.json" // this is to fake a database so that the API calls work
3. Run "yarn dev" to start the application

This application makes use of json-server to mock a backend for the sake of data and functional API calls.
This data is found in the directory ./data/db.json
There is used TailwindCss for the styling of the components.
Under the src directory you can find: /assets (for the images used), /components (for all the components used and separated in small parts)
/interfaces (to declare the interfaces), /services (to declare the services used and define the API calls)

A screenshot of what the application should look like once the application is started can be found ./assets/property-listing.png

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

- Use [vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages/tsc) for performing the same type checking from the command line, or for generating d.ts files for SFCs.
