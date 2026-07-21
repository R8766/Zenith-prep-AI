import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import RoadmapCard from "../components/RoadmapCard";
import dsa from "../data/dsa";

function DSARoadmap() {

    const navigate = useNavigate();

    return (

        <Layout>

            <h1 className="text-4xl font-bold">
                📘 DSA Roadmap
            </h1>

            <p className="text-gray-500 mt-2">
                Master DSA step by step.
            </p>

            <div className="mt-8 space-y-5">

                {dsa.map((topic) => (

                    <div
                        key={topic.id}
                        onClick={() => navigate(`/roadmap/dsa/${topic.id}`)}
                        className="cursor-pointer"
                    >

                        <RoadmapCard
                            title={topic.topic}
                            progress={topic.progress}
                        />

                    </div>

                ))}

            </div>

        </Layout>

    );

}

export default DSARoadmap;