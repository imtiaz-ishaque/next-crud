"use client";

import { useState } from "react";
("react");
import { useRouter } from "next/navigation";

export default function AddEdit() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title and Description is required.");
      return;
    }
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/topics", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });
    if (res.ok) {
      router.refresh();
      router.push('/');
    } else {
      throw new Error("Failed to creating a topic.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="border border-slate-500 px-6 py-3"
          placeholder="Topic Title"
        />

        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="border border-slate-500 px-6 py-3"
          placeholder="Topic Description"
        />

        <button
          type="submit"
          className="bg-green-500 text-white font-bold py-3 px-6 w-fit"
        >
          Add Topic
        </button>
      </form>
    </>
  );
}
