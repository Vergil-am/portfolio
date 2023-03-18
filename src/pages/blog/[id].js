import { useRouter } from "next/router";
import { createClient } from "contentful";
import styles from "../../styles/Blog.module.css";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useEffect, useState } from "react";

const client = createClient({
  space: process.env.Contentful_SpaceId,
  accessToken: process.env.Contentful_AccessToken,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "blog",
  });
  const paths = res.items.map((item) => {
    return {
      params: { id: item.sys.id },
    };
  });
  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps = async ({ params }) => {
  const entry = await client.getEntry(params.id);
  return {
    props: {
      post: entry,
    },
    revalidate: 10,
  };
};
export default function Blog({ post }) {
  const [Body, setBody] = useState(null);
  useEffect(() => {
    if (post.fields.body != null) {
      setBody(post.fields.body);
    }
  }, [post.fields.body]);
  if (post == null) {
  return (<div>Laoding...</div>);
  }
  return (
    <main>
      <div className={styles.Container}>
        <h1 style={{ alignSelf: "center" }}>{post.fields.title}</h1>
        <h4>{post.fields.snippet}</h4>
        <div className={styles.BlogPageImageContainer}>
          <Image
            alt=""
            className={styles.mainImg}
            src={`https:${post.fields.thumbnail.fields.file.url}`}
            fill
          />
        </div>
        {Body && <p>{documentToReactComponents(Body)}</p>}
      </div>
    </main>
  );
}
