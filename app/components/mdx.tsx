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

function slugify(str: string): string {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function Heading1({ children }: { children: React.ReactNode }) {
  const slug = slugify(String(children))
  return React.createElement(
    'h1',
    { id: slug },
    React.createElement('a', { href: `#${slug}`, className: 'anchor' }),
    children
  )
}

function Heading2({ children }: { children: React.ReactNode }) {
  const slug = slugify(String(children))
  return React.createElement(
    'h2',
    { id: slug },
    React.createElement('a', { href: `#${slug}`, className: 'anchor' }),
    children
  )
}

function Heading3({ children }: { children: React.ReactNode }) {
  const slug = slugify(String(children))
  return React.createElement(
    'h3',
    { id: slug },
    React.createElement('a', { href: `#${slug}`, className: 'anchor' }),
    children
  )
}

function Heading4({ children }: { children: React.ReactNode }) {
  const slug = slugify(String(children))
  return React.createElement(
    'h4',
    { id: slug },
    React.createElement('a', { href: `#${slug}`, className: 'anchor' }),
    children
  )
}

function Heading5({ children }: { children: React.ReactNode }) {
  const slug = slugify(String(children))
  return React.createElement(
    'h5',
    { id: slug },
    React.createElement('a', { href: `#${slug}`, className: 'anchor' }),
    children
  )
}

function Heading6({ children }: { children: React.ReactNode }) {
  const slug = slugify(String(children))
  return React.createElement(
    'h6',
    { id: slug },
    React.createElement('a', { href: `#${slug}`, className: 'anchor' }),
    children
  )
}

const components = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
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
