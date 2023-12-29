import Spinner from './spinner.tsx';
import React from 'react';

export type AsyncComponentProps = {
  isLoading : boolean;
  children : React.ReactElement;
}

export default function AsyncComponent({isLoading, children} : AsyncComponentProps){
  if (isLoading){
    return <Spinner/>;
  } else {
    return (children);
  }
}
