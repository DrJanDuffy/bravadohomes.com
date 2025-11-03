import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'
import type { Metadata } from 'next'

// Static generation disabled due to React version conflicts with MDX content
// export async function generateStaticParams() {
//   let posts = getBlogPosts()

//   return posts.map((post) => ({
//     slug: post.slug,
//   }))
// }

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> | { slug: string } 
}): Promise<Metadata> {
  const resolvedParams = 'then' in params ? await params : params
  let post = getBlogPosts().find((post) => post.slug === resolvedParams.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`
  
  const canonicalUrl = `${baseUrl}/blog/${post.slug}`

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: canonicalUrl,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Blog({ 
  params 
}: { 
  params: Promise<{ slug: string }> | { slug: string } 
}) {
  try {
    const resolvedParams = 'then' in params ? await params : params
    let post = getBlogPosts().find((post) => post.slug === resolvedParams.slug)

    if (!post) {
      notFound()
    }

    return (
      <section>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${baseUrl}${post.metadata.image}`
                : `${baseUrl}/og?title=${encodeURIComponent(post.metadata.title)}`,
              url: `${baseUrl}/blog/${post.slug}`,
              author: {
                '@type': 'Person',
                name: 'Dr. Janet Duffy',
              },
            }),
          }}
        />
        <h1 className="title font-semibold text-2xl tracking-tighter">
          {post.metadata.title}
        </h1>
        <div className="flex justify-between items-center mt-2 mb-8 text-sm">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </div>
        <article className="prose">
          <CustomMDX source={post.content} />
        </article>
      </section>
    )
  } catch (error) {
    console.error('Error rendering blog post:', error)
    notFound()
  }
}
