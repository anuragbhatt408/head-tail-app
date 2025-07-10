export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-white p-8 text-center">
      <h1 className="text-4xl font-bold text-pink-700 mb-4">About the Game</h1>
      <p className="text-lg text-gray-700 max-w-xl">
        The Head & Tail game is a fun logic-based interaction where you choose
        between H (Head) or T (Tail) and track your sequence. It helps
        demonstrate state, conditional rendering, and dynamic layout building in
        React using modern UI libraries like shadcn/ui.
      </p>
    </div>
  );
}
