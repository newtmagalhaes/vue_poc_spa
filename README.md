# vue_poc_spa

Proof of concept with `Vue.ts` Single Page Application.

Project made with [`primevue`](https://primevue.org/).
Using components: Dataview, Toast and DynamicDialog.

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

## Project Setup

```sh
npm install
```

> :warning: With 2 terminal tabs open, execute each command below in one tab, to run the application and the API simultaneously

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Run a local API with `json-server`

```sh
npm run backend
```

## Project goals

| method     |       status       |              observations               |
| :--------- | :----------------: | :-------------------------------------: |
| **C**reate | :white_check_mark: |                    -                    |
| **R**ead   | :white_check_mark: |                    -                    |
| **U**pdate |        :x:         | API call works but interface isn't done |
| **D**elete | :white_check_mark: |                    -                    |
