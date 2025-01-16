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

## Getting started

> It's gonna be a 🔥

The main driving force behind this effort was the and still is the terrible situation around writing email templates.
This "framework" combines amazing technologies to make our lives easier.

We are using [🧑‍🚀 Astro]('https://astro.build') for the back-end and [📧 MJML](https://mjml.io) for the Frontend.

**MJML? What is that**

MJML is a proven piece of technology for creating email templates. For the editor, well we are basically writing `html` with **mj-** prefix.
The best part is, that team behind mjml made sure, that all components look good on all email clients and even provided [compatibility section](https://mjml.io/compatibility/mj-button).

> standart `<mj-button>` component, does not support border radius for MSO, so buttons are always rectanges. Therefore we will use custom component [**`<mj-msobutton>`**](https://documentation.mjml.io/#mjml-msobutton) that provides border radius out of the box.

Altough mjml is great, it does not really fit our purpose. It's not really a templating language, therefore we can not create loops, add variable from config file and importing components is sort of working

** JSX to the rescue**

So it looks like we benefit from some sort of templating language. There are solutions out there like [mjml-handlebars](https://marketplace.visualstudio.com/items?itemName=rbremont.vscode-handlebars-mjml), but nobody want to get through that set up. Luckily for us, there is a great templating language developed by back then Facebook called [JSX](https://react.dev/learn/writing-markup-with-jsx). JSX is also used by React and Preact and Solid and Qwik and also Astro templating language is build on JSX.

Anyways, it's quite simple to use, we just have to follow a few [simple rules](#jsx-rules) and it enables us to use `mjml` syntax with syntax higlighting and advanced templating features as well.

**Why do we need back-end ?**
So as you can see, creating email templates is hard. Just to make sure that templates look good an majority of clients is a hustle, but to create them in bulk, e.g. for localization. We are up for a truble.

So we figured out, what technology to use for writing templates (mjml) combined it with powerful temlating language (jsx), so we can write reusable components, implement variables from config files, etc.

But there is a one problem, we are still not getting the final `.html` files that can be used by email clients.

**Lift off! 🚀**

Up till this point, everything would be only rendered (displayed) as JSX component, which under the hood is not a valid HTML. That's why we have reached for Astro as a server side framework. Which enables us, to transform ours JSX templates into valid `.html` files and writes them to the disc as well as sending emails for testing.

> It enables so much more, but not many features were implemented yet 😔

We are also planning additional features

- [ ] bulk export
- [ ] compression
- [ ] sending multiple templates

## Basics

This 'framework' provides posibility to create templates with three different approaches.

1. mjml
2. mjml-in-jsx
3. react

### 1. mjml

You can create email templates with basic `mjml` syntax. However this comes with it's own set of [know issues](#know-issues)

### 2. mjml-in-jsx

This is **our** approach of combining best of both worlds implemented from scratch. This approach enables you, to use `JSX Components` and craete templates using `mjml` syntax and mjml components inside JSX components.

### 3. React

You can also use React and [React.mail](https://react.mail) to create templates. It's simmilar to our approach, however it comes with their own set of components.

> ❗You can use library like tailwind with the React approach

### ❗ Know issues

#### MJML

- Generate on save seems to not be working properly on windows.
- Saving partials only does not trigger rebuild of the template
  - expected: the `partials/` folder is not _watched_ by the compiler
  - Just save the template you are importing the partial to
  - For multiple templates, restarting the server works --> NOT Ideal #sad

#### JS

- Need to figure out, location for files and when to render them
  - maybe separate command ?
- Maybe implement tailwind, that would be sick

## 🚀 ✉️ Project Structure

Inside this project you can find the following structure:

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
│       └── js/
│       └── mjml/
│           └── templates/
│           └── partials/
│       └── html/
└── package.json
```

> Structure can change

Based on your approach you should create templates in these folders

- mjml: `src/emails/mjml/templates`
  > [!IMPORTANT]
  > with this approach, make sure, that partial files are not located in the `/templates` directory.
  > More info below
- js(x): `src/emails/js`
- React: `src/emails/react`

For js and React approach you can add partials where ever you like. However suggested strucure would be something like `src/email/partials/[js(x)|react]/`.

Final templates are exported into following structure by default
`templates/[mjml | js | react]`

> ❗ You can change any of these values in the `app.config.json` file in the root of the project

### Mjml only

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
