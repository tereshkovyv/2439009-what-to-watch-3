import Footer from '../footer/footer.tsx';
import React from 'react';

export type CommonPageProps = {
  children : React.ReactNode;
}
export default function CommonPage({children} : CommonPageProps){
  return (
    <div className="page-content">
      <section className="catalog">
        {children}
      </section>
      <Footer/>
    </div>
  );
}
