export default function EditTopic() {
  return (
    <>
      <form className="flex flex-col gap-3">
        <input
          type="text"
          className="border border-slate-500 px-6 py-3"
          placeholder="Topic Title"
        />

        <input
          type="text"
          className="border border-slate-500 px-6 py-3"
          placeholder="Topic Description"
        />

        <button type="button" className="bg-green-500 text-white px-6 py-3 font-bold w-fit">Update Topic</button>
      </form>
    </>
  );
}
