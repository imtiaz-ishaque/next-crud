export default function AddTopic() {
  return (
    <>
      <form className="flex flex-col gap-3">
        <input type="text" className="border border-slate-500 px-6 py-3" placeholder="Topic Title" />

        <input type="text" className="border border-slate-500 px-6 py-3" placeholder="Topic Description" />

        <button className="bg-green-500 text-white font-bold py-3 px-6 w-fit" type="button">
        Add Topic
        </button>
      </form>
    </>
  );
}
