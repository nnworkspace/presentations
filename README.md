# Collection of my public presentations


To start the slide show:

- `pnpm install`
- `pnpm dev`
- visit <http://localhost:3030>

or 

```sh
pnpm slidev android_key_attestation.md --open
```
or

```sh
npm exec -c 'slidev "<slides_file_name>.md" --port 3030'
``` 

See the [slides.md](./slides.md) for Slidev related features and examples. 

## To build all presentations:

```sh
pnpm build
``` 

## Project structure

```sh
presentations/
├── public/
│   ├── presentation1/
│   │   └── image1.png
│   └── presentation2/
│       └── image1.jpg
├── styles/
│   └── index.ts
├── package.json
└── vercel.json
├── presentation1.md
└── presentation2.md
├── ....
``` 
- `public`: Contains static files for the presentations, usually images.
- `slides`: Contains all my presentation Markdown files.
- `styles`: For my global, shared styles.
- `package.json`: build spec.
- `vercel.json`: build and deploy spec for Vercel.



