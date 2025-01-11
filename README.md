# Astro mjml Starter

## Work in progress 🏎️

To get strated run

```sh
npm install
```

After successfull install run

```sh
npm run dev
```

Project starts and is available on port `localhost:4321`

### ❗ Know issues

- Generate on save seems to not be working properly on windows.

## 🚀 ✉️ Project Structure

Inside this project you can find the following structure
Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
│       └── email/
│           └── [...slug].astro
│   └── components/
│   └── templates/
│       └── mjml/
│       └── html/
└── package.json
```

all templates should be created inside the `src/templates/mjml` folder. You can nest templates in folders as well.
On save template should be generated in the `src/templates/html` folder mirroring the `mjml` folder structure.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command       | Action                                      |
| :------------ | :------------------------------------------ |
| `npm install` | Installs dependencies                       |
| `npm run dev` | Starts local dev server at `localhost:4321` |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
