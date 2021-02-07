import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_LAUNCHES } from '../graphql/get-launches'
import { Launch } from '../components/Launch';

export const LaunchesContainer = () => {
    const { data: { launches = [] } = {} } = useQuery(GET_LAUNCHES, {
        variables: { limit: 10 },
    });

    return (
        <div className="launches_container">
            {launches && launches.map(launch => <Launch key={launch.id} launch={launch} />)}
        </div>
    )
}