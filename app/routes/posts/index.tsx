import { Link, useLoaderData } from "remix";

import { getPosts } from "~/post";
import type { Post } from "~/post";


// export const loader = async () => {
//   const posts: Post[] = [
//     {
//       slug: "my-first-post",
//       title: "My First Post"
//     },
//     {
//       slug: "90s-mixtape",
//       title: "A Mixtape I Made Just For You"
//     }
//   ];
//   return posts;
// };

export const loader = async () => {
  return getPosts();
};

export default function Posts() {
  const posts = useLoaderData<Post[]>();
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}