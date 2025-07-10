import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-100 to-white text-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-indigo-700">
        Welcome to Head & Tail Game
      </h1>
      <p className="mb-10 text-lg text-gray-700">
        Navigate to learn more or play the game!
      </p>
      <div className="space-x-4">
        <Button asChild className="text-lg px-6 py-3">
          <Link to="/about">About</Link>
        </Button>
        <Button asChild className="text-lg px-6 py-3" variant="outline">
          <Link to="/head-tail">Play Head & Tail</Link>
        </Button>
      </div>
    </div>
  );
}
