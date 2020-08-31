import axios from "axios";
import Link from "next/link";

export default function TestPage({ users }) {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return {
    // revalidate: 10 (time in seconds. the page will be generated after the time specified. this way even if it's being statically generated, it can keep up and display updates)
    props: { users: data },
  };
}
