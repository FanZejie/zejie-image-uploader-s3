import React from 'react';
import { Button } from 'antd';
import VisaTable from '@/components/visa/visaTable';

export default function Visa() {
  return (
    <>
      <h1>I am applying for an Australian visa</h1>
      <p>
        I noticed that many people are concerned about the progress of
        Australia's visa approval
      </p>
      <p>
        For example, how many people have been approved today, what are their
        majors, and when did they submit their visas? Based on this information,
        you can guess how long it will take for your visa to be approved.
      </p><Button type="primary">Upload File</Button>

      <VisaTable/>
    </>
  );
}
