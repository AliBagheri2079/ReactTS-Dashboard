import Layout from '@/layouts';
import Crypto from '@/pages/Crypto';
import Products from '@/pages/Products';

/*
? I know routes folder created for routing in server but
? I think this way is possible.
*/
const ManageRouting = () => {
  return (
    <Layout>
      {/* <Products /> */}
      <Crypto />
    </Layout>
  );
};

export default ManageRouting;
