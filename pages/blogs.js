import JWT from "jsonwebtoken";

export default function blogs(props) {
  return (
    <div>
      <h3>Blogs:</h3>
      <ul>
        {props.blogs.map((blog) => (
          <li key={blog}>
            {blog} - by: {props.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const user = await fetch("http://localhost:3000/api/auth", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      name: "Gaith",
      password: 123,
    }),
  }).then((data) => data.json());

  const decoded = JWT.verify(user.token, "asjknalksn123,z");

  return {
    revalidate: 10,
    props: {
      blogs: [
        "How to create a great website using Next.js",
        "Intro to Next.js",
        "Benefits of using Next.js",
      ],
      author: decoded.name,
    },
  };
}
