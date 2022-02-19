export default function Forecast() {
  return (
    <div className="m-4">
      <form action="/weather/report" method="get">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="city">
          City:
        </label>
        <input type="text" name="city" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
        Fetch Weather
      </button>

      </form>
    </div>
  );
}