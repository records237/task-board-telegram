"use client";

import { Suspense } from 'react';
import Image from "next/image";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { useSearchParams } from 'next/navigation';

function TaskBoard() {
  const searchParams = useSearchParams();
  const groupId = searchParams.get('startapp');

  if (!groupId) {
    return <div className="p-8">Please provide a group ID</div>;
  }

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 gap-8">
      <header className="flex items-center justify-between">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <h1 className="text-2xl font-bold">Task Board - Group {groupId}</h1>
      </header>

      <main className="flex flex-col gap-8">
        <TaskForm groupId={groupId} />
        <TaskList groupId={groupId} />
      </main>

      <footer className="flex justify-center text-sm text-gray-500">
        Powered by Next.js
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="p-8">Loading...</div>}>
      <TaskBoard />
    </Suspense>
  );
}