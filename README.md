# Collection of my public presentations


To start the slide show:

- `pnpm install`
- `pnpm dev`
- visit <http://localhost:3030>

or 

```sh
npm exec -c 'slidev "<slides_file_name>.md" --port 3030'
``` 

See the [slides.md](./slides.md) for Slidev related features and examples. 

## Project structure

```sh
presentations/
├── slides/
│   ├── android_key_attestation.md
│   └── google_keystore_apis.md
├── styles/
│   └── index.ts
├── package.json
└── vercel.json
``` 
- `slides`: Contains all my presentation Markdown files.
- `styles`: For my global, shared styles.
- `package.json`: build spec.
- `vercel.json`: build and deploy spec for Vercel.



