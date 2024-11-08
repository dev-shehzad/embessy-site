import React from 'react';
import Tabs from './Tabs';
import Pricing from '../Faqs/Pricing';
import Installation from '../Faqs/Installation';
import Genral from '../Faqs/Genral';

const tabsData = [
  {
    id: 1,
    label: 'Pricing/Licensing',
    content: <div><Pricing /></div>,
  },
  {
    id: 2,
    label: 'installation/Getting Started',
    content: <div><Installation /></div>,
  },
  {
    id: 3,
    label: 'General',
    content: <div><Genral /></div>,
  },
];

const UseTabs = () => {
  return (
    <div className='py-[50px]'>
      <Tabs tabs={tabsData} />
    </div>
  );
};

export default UseTabs;
