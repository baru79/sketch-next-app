import gql from 'graphql-tag';

const GET_ABOARD = gql`
  query getArtboard($id: UUID, $shortId: ShortId) {
    share(id: $id) {
      name
      version {
        document {
          artboardCount
        }
      }
      artboard(shortId: $shortId) {
        name
        order
        previousArtboard {
          shortId
        }
        nextArtboard {
          shortId
        }
        files {
          identifier
          type
          url
        }
      }
    }
  }
`;

export default GET_ABOARD;
