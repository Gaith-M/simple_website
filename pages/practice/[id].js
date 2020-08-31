import { useRouter } from "next/router";

export default function FlexPage({ content }) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading....</p>;
  } else {
    return (
      <div>
        <h1>{content}</h1>
        <p>
          This page will be used whenever the url is domain/practice/x where x
          is any name beside the already defined ones
        </p>
      </div>
    );
  }
}

export async function getStaticProps({ params }) {
  let content;
  if (params.id === "1") content = "first blog";
  if (params.id === "2") content = "second blog";

  return {
    props: {
      content,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false,
  };
}

// GSPaths must be used with GSProps. and It can only be used in file that has [] in its name (dynamic file);
//GSPaths must return an object with two keys: 1) paths, 2) fallback
// paths: has an array as a value which contains object. each object must have a params key which maps to an object that has a key that matches the name of the file. so if the file name is [id], the array of the paths key must look like this: [{params: {id: .....}}];
