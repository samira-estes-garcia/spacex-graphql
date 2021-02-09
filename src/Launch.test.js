import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Launch } from './components/Launch.js';

Enzyme.configure({ adapter: new Adapter() });

describe('Launch data', () => {
    it('should mount', () => {
        const wrapper = shallow(<Launch launch={mockLaunch} />);
        console.log(wrapper.debug());
        expect(wrapper).toBeTruthy();
    });
});

const mockLaunch = {
    "id": "13",
    "launch_date_local": "2014-01-06T14:06:00-04:00",
    "launch_year": "2014",
    "mission_id": [
      "9D1B7E0"
    ],
    "mission_name": "Thaicom 6",
    "details": "Second GTO launch for Falcon 9. The USAF evaluated launch data from this flight as part of a separate certification program for SpaceX to qualify to fly U.S. military payloads and found that the Thaicom 6 launch had \"unacceptable fuel reserves at engine cutoff of the stage 2 second burnoff\"",
    "links": {
      "flickr_images": [
        "https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg",
        "https://farm8.staticflickr.com/7619/16763151866_35a0a4d8e1_o.jpg",
        "https://farm9.staticflickr.com/8569/16169086873_4d8829832e_o.png"
      ],
      "video_link": "https://www.youtube.com/watch?v=AnSNRzMEmCU"
    },
    "launch_site": {
      "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
    },
};