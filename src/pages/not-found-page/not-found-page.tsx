import Header from '../../components/header/header.tsx';
import CommonPage from '../common-page/common-page.tsx';

export default function NotFoundPage(){
  return(
    <>
      <Header/>
      <CommonPage>
        <h1>404</h1>
        <h5>К сожалению, вы обратились по несуществующему адресу</h5>
      </CommonPage>
    </>
  );
}
