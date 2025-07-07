import React from "react"
import Head from "next/head"

type Props = {
  title: string
  description: string
  url?: string
  image?: string
}

export const HeadSEO = ({
  title,
  description,
  url = "https://www.titomeet.com/",
  image = "https://www.titomeet.com/img/logo.png",
}: Props) => {
  return (
    <Head>
      {/* Base */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="TITOMEET" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@titomeet" />
    </Head>
  )
}

