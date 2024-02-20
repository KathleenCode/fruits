import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function NotFound() {
  const error = useRouteError();
  return (
    <div>
      <p>Something went wrong.</p> 
      <p>Page Not Found.</p>
      <p>{error.message}</p>
    </div>
  )
}
