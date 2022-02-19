import { Outlet, redirect } from "remix";
import { ActionFunction } from "remix";

export const action: ActionFunction = async ({ request :Request }) => {
  const body = new URLSearchParams(await request.text());
  // const fileUpload = body.get('fileUpload');
  const title = body.get('title');
  return redirect(`/image-upload/${title}`);
};

export default function ImageUploader() {
  return (
    <>
      <div className="m-4">
      <h1 className="text-teal-600 text-xl">Image Moderator</h1>
      <Outlet/>
      </div>
    </>
  )
}