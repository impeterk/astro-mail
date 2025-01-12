# Astro mjml Starter

## Work in progress 🏎️

To get strated run

```sh
npm install
```

After successful install run

```sh
npm run dev
```

Project starts and is available on port `localhost:4321`

### ❗ Know issues

- Generate on save seems to not be working properly on windows.
- Saving partials only does not trigger rebuild of the template
  - expected: the `partials/` folder is not _watched_ by the compiler
  - Just save the template you are importing the partial to
  - For multiple templates, restarting the server works --> NOT Ideal #sad

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
│   └── emails/
│       └── mjml/
│           └── templates/
│           └── partials/
│       └── html/
└── package.json
```

all templates should be created inside the `src/emails/mjml/templates` folder. You can nest templates in folders as well.
On save template should be generated in the `src/emails/html` folder mirroring the `mjml` folder structure.

> [!IMPORTANT]
> import partials relatively to the `vite.config.ts` file.

```mjml
<mj-include path="src/emails/mjml/partials/main.mjml" />
```

## 📨 Sending emails

You can test each template by sending to any email address. However, you have to provide your own smtp credentials.
I would recommend [Brevo](https://www.brevo.com/), but you can use any service you like.

copy `.env.example` to `.env`

```sh
cp .env.example .env
```

and fulfill necessary values with your own

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command       | Action                                      |
| :------------ | :------------------------------------------ |
| `npm install` | Installs dependencies                       |
| `npm run dev` | Starts local dev server at `localhost:4321` |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
