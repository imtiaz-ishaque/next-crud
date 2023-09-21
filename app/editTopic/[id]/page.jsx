import EditForm from "@/components/EditForm";

const getTopic = async (id) => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/topics/${id}`, {
    method: "GET",
    cache: "no-store",
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Failed to fetch topic.");
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const { topic } = await getTopic(id);
  const { title, description } = topic;
  return <EditForm id={id} title={title} description={description} />;
}