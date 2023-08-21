import urlFor from "../../../../lib/urlFor";
import { client } from "../../../../lib/sanity.client";
import { groq } from "next-sanity";
import Image from "next/image";
import { projectId } from "../../../../lib/sanity.client";

import React, { ReactNode } from "react";
import  {PortableText } from "@portabletext/react";
import { RichTextComponent } from "@/components/RichTextComponent";


type Props = {
  params: {
    slug: string;
  };
}

export const revalidate = 60 // revalidate page every 60s

export async function generateStaticParams() {
  const query = groq`*[_type=="post"]{
  slug
}`;
  const slugs: Post[] = await client.fetch(query)
  const slugRoutes = slugs.map((slug) => slug.slug.current)

  return slugRoutes.map((slug) => ({
    slug,
  }))
}


async function Post({ params: { slug } }: Props) {
  const query = groq`
    *[_type=="post" && slug.current == $slug][0]
    {
        ...,
        author->,
        categories[]->
    }
    `;

  const post: Post = await client.fetch(query, { slug });
  
  return (
    <article className="px-10 pb-20">
      <section className="space-y-2 border border-branding text-white">
        <div className="relative flex flex-col md:flex-row min-h-48 justify-between gap-y-5">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            {post.mainImage && (
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
              />
            )}
          </div>

          <section className="p-5 bg-branding w-full">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>

                <p>
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Image
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={40}
                  width={40}
                  className="rounded-full w-12 h-12"
                />

                <div className="w-64">
                  <h3 className="text-lg font-bold">{post.author.name}</h3>
                  <PortableText
                    value={post.author.bio}
                    components={RichTextComponent}
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="italic text-bold text-1xl pt-10">{post.description}</h2>
              <div className="flex items-center justify-end mt-auto space-x-2">
                {post.categories.map(
                  (category: {
                    _id: React.Key | null | undefined;
                    title:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | React.ReactFragment
                      | React.ReactPortal
                      | null
                      | undefined;
                  }) => (
                    <p
                      key={category._id}
                      className="bg-gray-800 text-white rounded-full text-sm font-semibold px-3 py-1 mt-4"
                    >
                      {category.title}
                    </p>
                  )
                )}
              </div>
            </div>
          </section>
        </div>
      </section>

      <PortableText
        value={post.body}
        components={RichTextComponent}  
      />
    </article>
  );
}

export default Post;
