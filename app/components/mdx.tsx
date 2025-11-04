import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React from 'react'

function Table({ data }: { data: { headers: string[], rows: string[][] } }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function CustomLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const { href, children, ...restProps } = props

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...restProps}>
        {children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a href={href} {...restProps}>{children}</a>
  }

  return <a href={href} target="_blank" rel="noopener noreferrer" {...restProps}>{children}</a>
}

function RoundedImage(props: React.ComponentProps<typeof Image>) {
  const { alt, className, ...restProps } = props
  return <Image alt={alt || ''} className={className || "rounded-lg"} {...restProps} />
}

function Code({ children, ...props }: React.HTMLAttributes<HTMLElement> & { children: string }) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: React.ReactNode }) => {
    let slug = slugify(String(children))
    
    if (level === 1) {
      return (
        <h1 id={slug}>
          <a href={`#${slug}`} className="anchor" />
          {children}
        </h1>
      )
    }
    if (level === 2) {
      return (
        <h2 id={slug}>
          <a href={`#${slug}`} className="anchor" />
          {children}
        </h2>
      )
    }
    if (level === 3) {
      return (
        <h3 id={slug}>
          <a href={`#${slug}`} className="anchor" />
          {children}
        </h3>
      )
    }
    if (level === 4) {
      return (
        <h4 id={slug}>
          <a href={`#${slug}`} className="anchor" />
          {children}
        </h4>
      )
    }
    if (level === 5) {
      return (
        <h5 id={slug}>
          <a href={`#${slug}`} className="anchor" />
          {children}
        </h5>
      )
    }
    return (
      <h6 id={slug}>
        <a href={`#${slug}`} className="anchor" />
        {children}
      </h6>
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
}

export function CustomMDX(props: { source: string; components?: Record<string, React.ComponentType<any>> }) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
