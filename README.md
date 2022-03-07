This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Redirecting

After that, you will be redirecting using the default `documentId` (`e981971c-ff57-46dc-a932-a60dc1804992`) to the following url:

`Example:` http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992

## Settings

On `next.config.js` the following constants are used:

- `DOCUMENT_ID:` is set with the default document id.
- `GQL_URL:` is set with graphQL server url.

## Routes

To view another document you should change `{documentId}` with the appropriate one using the following url:

- http://localhost:3000/document/{documentId}

  `Example:` http://localhost:3000/document/40432a93-5434-4059-87b9-545fd1ad6ee0

To view an specific aboard you should change `{shortId}` with the appropriate one using the following url:

- http://localhost:3000/aboard/{shortId}

  `Example:` http://localhost:3000/aboard/2P1dx9G

## Documentation

For more info about project, please go to [Frontend_code_challenge.md](./documents/Frontend_code_challenge.md)
