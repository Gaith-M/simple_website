import Link from "next/link";

export default function TestPage() {
  return (
    <div>
      <h1>This Page is statically generated</h1>

      <p>
        Since it's statically generated with no data. it means that it will be
        converted into an HTML file along with its related CSS and JS and stored
        on the server to be served upon each request. this generation occurs
        once during build time. this method leads to better performance and
        faster loading times since the files can be cached
      </p>

      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
}
