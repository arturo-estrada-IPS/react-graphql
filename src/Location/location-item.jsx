export function LocationItem({ id, name, description, photo }) {
  return (
    <li
      key={id}
      class="flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow my-2"
    >
      <img
        className="object-cover w-full h-[20rem] rounded-l-lg"
        src={`${photo}`}
        alt="location-reference"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </li>
  );
}
