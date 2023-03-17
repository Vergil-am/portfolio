import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import Link from "next/link";
import styles from "../../styles/Blog.module.css";
import { createClient } from "contentful";
import Window from "../../components/window";
export async function getStaticProps(context) {
	const client = createClient({
		space: process.env.Contentful_SpaceId,
		accessToken: process.env.Contentful_AccessToken,
	});
	const res = await client.getEntries({
		content_type: "blog",
	});
	return {
		props: {
			Posts: res.items,
		},
	};
}
export default function Blog({ Posts }) {
	return (
		<main>
			<div className={styles.postsContainer}>
				{Posts.map((post) => {
					return (
						<Link
							key={post.sys.id}
							className={styles.link}
							href={`/blog/${post.sys.id}`}
						>
							<Window post={post} />
						</Link>
					);
				})}
			</div>
		</main>
	);
}
