import Layout from "../components/Layout";
import FeatureCard from "../components/FeatureCard";
import TodayMission from "../components/TodayMission";
import AIRecommendation from "../components/AIRecommendation";
import RecentActivity from "../components/RecentActivity";
import WeeklyGoal from "../components/WeeklyGoal";
import XPBar from "../components/XPBar";

import {
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaBrain,
} from "react-icons/fa";

function Home() {
  return (
    <Layout>

      <div className="text-gray-900 dark:text-white transition-colors duration-300">

        {/* Welcome Heading */}
        <h1 className="text-4xl font-bold">
          Welcome Back 👋
        </h1>

        {/* XP and Level Section */}
        <XPBar />

        {/* Subtitle */}
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Continue your placement preparation.
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

          <FeatureCard
            icon={<FaCode />}
            title="DSA"
            subtitle="Arrays, Trees, Graphs..."
            color="bg-indigo-600"
            route="/topics/dsa"
            progress={65}
          />

          <FeatureCard
            icon={<FaLaptopCode />}
            title="Development"
            subtitle="React, Node, MongoDB"
            color="bg-green-600"
            route="/topics/development"
            progress={40}
          />

          <FeatureCard
            icon={<FaDatabase />}
            title="CS Subjects"
            subtitle="DBMS, OS, CN"
            color="bg-orange-500"
            route="/topics/cs-subjects"
            progress={82}
          />

          <FeatureCard
            icon={<FaBrain />}
            title="Aptitude"
            subtitle="Quant & Reasoning"
            color="bg-pink-500"
            route="/topics/company-prep"
            progress={25}
          />

        </div>

        {/* Dashboard Sections */}
        <div className="grid lg:grid-cols-2 gap-6 mt-8">

          <TodayMission />

          <RecentActivity />

          <AIRecommendation />

          <WeeklyGoal />

        </div>

      </div>

    </Layout>
  );
}

export default Home;