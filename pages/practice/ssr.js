import axios from "axios";
import Link from "next/link";

export default function TestPage({ users }) {
  return (
    <div>
      <h1>This Page uses SSR</h1>
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

export async function getServerSideProps(context) {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  // console.log(context);
  return {
    props: { users: data },
  };
}
