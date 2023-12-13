import React from 'react';
import Assignment from '@/app/components/AssignmentListingcompo';


export default function AssignmentListingcompo() {
  return (
    <main>
      <div className="flex flex-col md:flex-row">
        <div className="md">
          <Assignment />
        </div>
      </div>
    </main>
  );
}