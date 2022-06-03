import React from 'react';

import { Story } from '@storybook/react';

import { Table } from '../src/components/atoms';
import { TableProps } from '../src/components/atoms/Table/Table';

export default {
  title: 'Table',
  component: Table
};

const tableData = [
  { company: 'Reliance Industries', marketCap: '₹17,82,541 Cr', marketPrice: '₹2,724.30', growthType: true, value: '+3.45%', sector: 'Oil, Gas & Fuels' },
  { company: 'Tata Consultancy Services', marketCap: '₹12,27,685 Cr', marketPrice: '₹3,423.00', growthType: true, value: '+2.02%', sector: 'IT Services' },
  { company: 'HDFC Bank', marketCap: '₹7,74,421 Cr', marketPrice: '₹1,385.10', growthType: false, value: '-0.70%', sector: 'Banks' },
  { company: 'Infosys', marketCap: '₹6,19,955 Cr', marketPrice: '₹1,508.00', growthType: true, value: '+1.99%', sector: 'IT Services' },
  { company: 'Hindustan Unilever', marketCap: '₹5,42,391 Cr', marketPrice: '₹2,284.80', growthType: false, value: '-1.02%', sector: 'Personal Products' }
];

const headerStyle = { color: 'var(--subText)', borderBottom: 'dashed 1px var(--subText70)' };


const Template: Story<TableProps> = (args) => <Table {...args}>
  <Table.Header>
    <Table.HeaderCell style={{ ...{ paddingLeft: '5%', paddingTop: '16px', paddingBottom: '16px' }, ...headerStyle }}>COMPANY</Table.HeaderCell>
    <Table.HeaderCell style={headerStyle}>MARKET CAP</Table.HeaderCell>
    <Table.HeaderCell style={headerStyle}>MARKET PRICE</Table.HeaderCell>
    <Table.HeaderCell style={{ ...{ paddingRight: '5%', paddingTop: '16px', paddingBottom: '16px' }, ...headerStyle }}>SECTOR</Table.HeaderCell>
  </Table.Header>

  {
    tableData.map((data, index) => {
      return (
        <Table.Row key={index}
          style={{ borderBottom: 'solid 1px var(--subText70)' }}
        >
          <Table.Cell>{data.company}</Table.Cell>
          <Table.Cell>{data.marketCap}</Table.Cell>
          <Table.Cell>
            <div className='center-align'
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}
            >
              <span>{data.marketPrice}</span>
              <span className={`fs12 ${data.growthType ? 'primaryClr' : 'growwRed'}`}>( {data.value} )</span>
            </div>
          </Table.Cell>
          <Table.Cell>{data.sector}</Table.Cell>
        </Table.Row>
      );
    })
  }
</Table>;


export const Default = Template.bind({});
