import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";

const getTopics = async () => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/topics", {
      cache: "no-store",
      //next: { revalidate: 10 },
    });
    if (!res.ok) {
      throw new Error("Failed fetching topics");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topic:", error);
  }
};

export default async function TopicList() {
  const { topics } = await getTopics();
  return (
    <>
      {topics.map((t) => (
        <div
          className="p-4 flex justify-between border border-slate-300 my-3 gap-5 items-start"
          key={t._id}
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
