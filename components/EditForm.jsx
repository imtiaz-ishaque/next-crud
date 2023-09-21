"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/topics/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        newTitle,
        newDescription,
      }),
    });
    if (res.ok) { 
      router.refresh();
      router.push('/');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          type="text"
          className="border border-slate-500 px-6 py-3"
          placeholder="Topic Title"
        />

        <input
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          type="text"
          className="border border-slate-500 px-6 py-3"
          placeholder="Topic Description"
        />

        <button
          type="submit"
          className="bg-green-500 text-white px-6 py-3 font-bold w-fit"
        >
          Update Topic
        </button>
      </form>
    </>
  );
}
