import React from 'react';
import Table1 from './table1';

const Index = () => {
  return (
    <div>
      <Table1 apiUrl="/getData1" />
      <hr />
      <Table1 apiUrl="/getData2" />
    </div>
  );
};

export default Index;
