import { Link } from 'remix';
import Form from './image-upload';

// export default function Index() {
//   return (
//     <div className="m-4">
//       <h1 className="text-3xl font-bold underline text-teal-800">Image Moderator POC: The Remix</h1>
//       <Form />
//     </div>
//   );
// }

export default function Home() {
  return (
    <div className="m-4">
      <h1 className="text-3xl font-bold underline text-teal-800 pb-4">This is the remix</h1>
      <ul>
        <li className="text-blue-400"><Link to="/weather/forecast">Get Weather Forecast</Link></li>
      </ul>
      <ul>
        <li className="text-blue-400"><Link to="/image-upload/uploader">Image Moderator</Link></li>
      </ul>
    </div>
  );
}
