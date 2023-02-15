import React from 'react';
import Banner from '../Banner/Banner';
import DonatePlan from '../DonatePlan/DonatePlan';
import DonationNow from '../DonationNow/DonationNow';
import Support from '../SupportHumans/Support';

const MainHome = () => {
    return (
        <div className=''>
            <Banner />
            <DonationNow />
            <DonatePlan />
            <Support />
        </div>
    );
};

export default MainHome;