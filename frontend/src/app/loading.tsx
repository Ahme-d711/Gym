import React from 'react';

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin w-16 h-16 border-4 border-primary border-t-transparent rounded-full">
          <div className="w-full h-full rounded-full"></div>
        </div>
        <p className="text-lg font-semibold text-foreground">
          Loading your fitness journey...
        </p>
      </div>
    </div>
  );
}
