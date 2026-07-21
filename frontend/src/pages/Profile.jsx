import Layout from "../components/Layout";
import ProfileCard from "../components/ProfileCard";
import ProfileStats from "../components/ProfileStats";
import Heatmap from "../components/Heatmap";

function Profile() {
  return (
    <Layout>

      {/* Page Heading */}

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white transition-colors">
        👤 My Profile
      </h1>


      {/* Profile Card */}

      <div className="mt-8">
        <ProfileCard />
      </div>


      {/* Profile Stats */}

      <div className="mt-8">
        <ProfileStats />
      </div>


      {/* Heatmap */}

      <div className="mt-8">
        <Heatmap />
      </div>

    </Layout>
  );
}

export default Profile;