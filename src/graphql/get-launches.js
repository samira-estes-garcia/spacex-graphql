import gql from 'graphql-tag';

export const GET_LAUNCHES = gql`
query launchesPast($limit: Int!) {
    launchesPast(limit: $limit) {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        video_link
        flickr_images
      }
      rocket {
        rocket_name
        rocket_type
      }
    }
}
`