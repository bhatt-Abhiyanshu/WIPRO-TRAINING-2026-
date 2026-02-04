import MyButton from "./Button";

export default function Card({ cardTitle, cardDescription }) {
  return (
    <div className="border border-gray-300 w-72 rounded p-4 m-2 bg-gray-50 shadow-lg flex flex-col gap-4">
      <h3 className="text-lg font-bold">{cardTitle}</h3>

      <p className="text-sm">{cardDescription}</p>

      <div className="flex gap-2">
        <MyButton title="PLAY NOW" />
        <MyButton title="DOWNLOAD" />
      </div>
    </div>
  );
}
