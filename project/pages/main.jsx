import Aside from '@/components/Aside-Main';
import Global from '@/components/Global-Main';
import HeaderMain from '@/components/Header-Main';
import Sidebar from '@/components/Sidebar-Main';

const App = () => {
  return (
    <div className="bg-gray-100">
      <HeaderMain />
      <div className="lg:flex">
        <Aside />
        <Global />
        <MainPost posts={posts} users={users} />
        <Sidebar />
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const posts = await getPosts();

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    toast.error(error);
    console.error(error);

    return {
      props: {
        posts: [],
      },
    };
  }
}

export default App;
