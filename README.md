# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

to start development app
npm run dev
Ctrl + C to kill terminal process

https://github.com/Czar22Ke/Shopping-Cart.git

git add .
git commit -m "Code- final Session"
git push

git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/Czar22Ke/Shopping-Cart.git
git push -u origin main

import { mapState } from "vuex";
computed: mapState(["productsInBag"]),
state: {
products: [],
productsInBag: [],
},
