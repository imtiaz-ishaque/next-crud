"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from 'next/navigation';
export default function RemoveBtn({ id }) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure to delete?");
    if (!confirmed) {
      return;
    }
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/topics/${id}`, {
      method: "DELETE"
    });
    if (res.ok) {
      router.refresh();
    }
    else { 
      throw new Error('Failed to deleting topic.');
    }
  };
  return (
    <button onClick={removeTopic} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}
