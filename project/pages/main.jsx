import Aside from '@/components/Aside-Main';
import Global from '@/components/Global-Main';
import HeaderMain from '@/components/Header-Main';

import Sidebar from '@/components/Sidebar-Main';

const App = () => {
  return (
    <div className="bg-white">
      <HeaderMain />
      <div className="lg:flex">
        <Aside />
        <Global />
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
