import { redirect, useLoaderData } from "remix";
import axios from "axios";

export async function loader({ request }) {
  try {
    const WEATHER_API_KEY= 'a056212ad7b470d5c3d021bc9207e77f';
    const url = new URL(request.url);
    const search = new URLSearchParams(url.search);
    if (!search.get("city")) return redirect("/");
    const city = search.get("city");
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
    );
    console.log(res.data);
    return { city, type: res.data.weather[0].main, temp: res.data.main.temp };
  } catch (err) {
    console.error(err);
    redirect("/");
    return {};
  }
}

export default function Report() {
  const data = useLoaderData();
  return (
    <div className="m-4 text-xl">
      <div ><span className="text-gray-400">Weather in: </span><span className="text-emerald-500">{data.city}</span></div>
      <div className="text-emerald-500">{data.type}</div>
      <div><span className="text-gray-400">Temperature: </span><span className="text-emerald-500">{data.temp} °C</span></div>
    </div>
  );
}