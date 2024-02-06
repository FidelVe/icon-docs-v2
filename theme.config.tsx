import React from "react";
import { DocsThemeConfig, useConfig, useTheme } from "nextra-theme-docs";
import { useRouter } from "next/router";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Link from "next/link";

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/icon-project"
  },
  chat: {
    link: "https://icon.community/icondiscord/"
  },
  docsRepositoryBase: "https://github.com/icon-project",
  useNextSeoProps() {
    const { asPath } = useRouter();
    const { title, frontMatter } = useConfig();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – ICON Documentation",
        description: frontMatter.description,
        openGraph: {
          description: frontMatter.description,
          type: "website",
          url: "https://docs.icon.community/",
          images: [
            {
              url: "https://docs.icon.community/images/link-preview.jpg",
              width: 1200,
              height: 630,
              alt: "ICON Documentation"
            }
          ]
        }
      };
    } else {
      return {
        title: "ICON Documentation",
        description:
          "ICON's Cross-Chain Framework simplifies cross-chain development with its easy-to-use xCall messaging standard and connections to secure bridging protocols.",
        openGraph: {
          title: "ICON Documentation",
          description:
            "ICON's Cross-Chain Framework simplifies cross-chain development with its easy-to-use xCall messaging standard and connections to secure bridging protocols.",
          type: "website",
          url: "https://docs.icon.community/",
          images: [
            {
              url: "https://docs.icon.community/images/link-preview.jpg",
              width: 1200,
              height: 630,
              alt: "ICON Documentation"
            }
          ]
        }
      };
    }
  },
  gitTimestamp: () => {
    const { frontMatter } = useConfig();
    return (
      <div>
        {/* Keeping this empty on purpose */}
        {/* Last updated on: {frontMatter.gitTimestamp} */}
      </div>
    );
  },
  primaryHue: {
    dark: 182,
    light: 192
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { title, frontMatter } = useConfig();
    const gitTimestampString = frontMatter.gitTimestamp;
    const realTitle = title !== "Index" ? title : "ICON Documentation";

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: realTitle,
      image: "https://docs.icon.community/images/link-preview.jpg",
      author: {
        "@type": "Organization",
        name: "ICON Foundation",
        url: "https://www.icon.foundation/"
      },
      publisher: {
        "@type": "Organization",
        name: "ICON Foundation",
        logo: {
          "@type": "ImageObject",
          url: "https://docs.icon.community/images/icon-foundation-logo.svg"
        }
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://docs.icon.community/"
      },
      datePublished: "2023-07-31",
      dateModified: gitTimestampString,
      description:
        "ICON Documentation - General purpose blockchain ecosystem with a focus on linking different blockchains together"
    };

    return (
      <>
        <link
          rel="icon"
          type="image/png"
          href="/images/favicon.ico"
          hrefLang="en"
        />
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="apple-mobile-web-app-title" content="ICON Documentation" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/images/link-preview.jpg" />
        <meta name="twitter:site:domain" content="docs.icon.community" />
        <meta name="twitter:url" content="https://docs.icon.community" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </>
    );
  },
  editLink: {
    text: "Contribute directly to this page →"
  },
  feedback: {
    content: "Feedback or questions about this page? Post them here →",
    labels: "feedback"
  },
  logo: () => {
    return (
      <Image
        src="/images/icon-network/ICON-white.png"
        height="50"
        width="100"
        alt={"ICON logo"}
      />
    );
  },
  // sidebar: {
  //   titleComponent({ title, type }) {
  //     if (type === "separator") {
  //       return <span className="cursor-default">{title}</span>;
  //     }
  //     return <>{title}</>;
  //   },
  //   defaultMenuCollapseLevel: 1,
  //   toggleButton: true
  // },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return (
          <div className="w-1/2 mx-auto">
            <img src='/images/seperator.png' alt='Menu Seperator' width='800' height='225'/>
          </div>
        )
      }
      // Check if the title starts with 'How to'
      if (title.startsWith('How to')) {
        return <>🎓 {title}</>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
  },
  banner: {
    key: 'banner-2',
    text: <span>💬 Help us improve this documentation and drop us some <Link className="font-bold" href='/contact'>feedback</Link>!</span>
  },
  navigation: {
    prev: true,
    next: true
  },
  footer: {
    text: (
      <div className="grid w-full grid-cols-2">
        <div className="flex flex-col">
          <h3 className="font-bold">Column 1</h3>
          <Link href="/">A</Link>
          <Link href="/">Bunch</Link>
          <Link href="/">Of Links</Link>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold">Column 2</h3>
          <Link href="/">Some</Link>
          <Link href="/">More</Link>
          <Link href="/">Links</Link>
        </div>
      </div>
    )
  },
  faviconGlyph: "🌐"
};

export default config;
