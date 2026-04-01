import { Helmet } from "react-helmet-async";
import { usePageSEO } from "@/hooks/useContent";

interface SEOHeadProps {
  page: string;
  fallbackTitle: string;
  fallbackDescription: string;
  path?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  ogImageOverride?: string;
}

const SITE_URL = "https://elevationlandscapes.com";

const SEOHead = ({ page, fallbackTitle, fallbackDescription, path = "", jsonLd, ogImageOverride }: SEOHeadProps) => {
  const { data: seo } = usePageSEO(page);

  const title = seo?.title || fallbackTitle;
  const description = seo?.description || fallbackDescription;
  const ogTitle = seo?.og_title || title;
  const ogDescription = seo?.og_description || description;
  const ogImage = ogImageOverride || seo?.og_image_path || "";
  const canonical = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      {jsonLd && (
        Array.isArray(jsonLd)
          ? jsonLd.map((item, i) => (
              <script key={i} type="application/ld+json">
                {JSON.stringify(item)}
              </script>
            ))
          : (
              <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
              </script>
            )
      )}
    </Helmet>
  );
};

export default SEOHead;
