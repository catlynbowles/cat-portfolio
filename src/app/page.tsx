"use client";
import JeopardyBoard from "./components/JeopardyBoard";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-5">
      <main>
        <JeopardyBoard />
      </main>
    </div>
  );
}
