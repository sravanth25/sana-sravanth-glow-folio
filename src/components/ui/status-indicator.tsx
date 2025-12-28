
import React from 'react';

const StatusIndicator = () => {
  return (
    <div className="inline-flex items-center gap-2 rounded-md border border-gray-700 bg-gray-800/60 px-3 py-1.5">
      <div className="relative flex h-2.5 w-2.5">
        <div className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></div>
        <div className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></div>
      </div>
      <span className="text-sm font-medium text-gray-200">
        Available for Work
      </span>
    </div>
  );
};

export default StatusIndicator;
