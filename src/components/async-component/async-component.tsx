import Spinner from './spinner/spinner.tsx';
import React from 'react';

export type AsyncComponentProps = {
  isLoading : boolean;
  children : React.ReactElement;
}

export default function AsyncComponent({isLoading, children} : AsyncComponentProps){
  if (isLoading) {
    return <Spinner/>;
  }
  return (children);
}
