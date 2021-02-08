import gql from 'graphql-tag';

export const GET_LAUNCHES = gql`
query launchesPast($limit: Int!) {
  launches(limit: $limit) {
    id
    launch_date_local
    launch_year
    mission_id
    mission_name
    details
    links {
      flickr_images
      video_link
    }
    launch_site {
      site_name_long
    }
  }
}
`

// query launchesPast($limit: Int!) {
//   launchesPast(limit: $limit) {
//     id
//     mission_name
//     details
//     launch_date_local
//     launch_site {
//       site_name_long
//     }
//     links {
//       video_link
//       flickr_images
//     }
//     rocket {
//       rocket_name
//       rocket_type
//     }
//   }
// }