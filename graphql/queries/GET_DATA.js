import gql from 'graphql-tag';

const GET_DATA = gql`
  query getData($id: UUID) {
    share(id: $id) {
      identifier
      shortId
      version {
        document {
          name
          artboardCount
          artboards {
            entries {
              identifier
              shortId
              uuid
              name
              isArtboard
              order
              nextArtboard {
                identifier
                shortId
              }
              previousArtboard {
                identifier
                shortId
              }
              files {
                identifier
                type
                url
                path
                height
                width
                scale
                thumbnails {
                  identifier
                  type
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default GET_DATA;
