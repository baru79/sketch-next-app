const GQL_URL = 'https://graphql.sketch.cloud/api';
const DOCUMENT_ID = 'e981971c-ff57-46dc-a932-a60dc1804992';

const nextConfig = {
  reactStrictMode: true,
  styledComponents: true,
  swcMinify: false,
  env: {
    uri: GQL_URL,
    documentId: DOCUMENT_ID,
  },
  images: { domains: ['resources-live.sketch.cloud', 'graphql.sketch.cloud'] },
};

module.exports = nextConfig;
