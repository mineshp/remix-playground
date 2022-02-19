import { redirect, useLoaderData } from "remix";
import type { LoaderFunction, ActionFunction } from "remix";

export async function action({ request }) {
  const body = await request.formData();
  console.log(body);
  let allowed = true;
  return body;
}

export async function loader() {
  // Get image file
  // Send to AWS Rekognition
  // Moderate Image
  // Success or Fail
  return { ok: true };
};


export async function feedback() {
  const data = useLoaderData();
  return (
    <div className="m-4 bg-pink-200">
      { data.ok ? 'Successfully uploaded image' : 'Failed to upload image'  }
    </div>
    );
}