import type { Metadata } from "next";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://smoothskinniagara.com"
).replace(/\/+$/, "");

export const SITE_NAME = "Smooth Skin Niagara";

export const OG_IMAGE_PATH = "/assets/smooth-skin-niagara-logo.png";

export const BUSINESS = {
  name: SITE_NAME,
  telephone: "+1-905-920-7229",
  telephoneDisplay: "(905) 920-7229",
  email: "ashley@smoothskinniagara.com",
  address: {
    street: "5985 Ernest Crescent",
    locality: "Niagara Falls",
    region: "ON",
    postalCode: "L2H 0H8",
    country: "CA",
  },
  geo: { latitude: 43.08638098878613, longitude: -79.14738048839105 },
  social: {
    facebook: "https://www.facebook.com/eyelashextensionsniagarafalls/",
    instagram: "https://www.instagram.com/smooth_skin_niagara/",
  },
  directionsUrl: "https://maps.app.goo.gl/fMvuTENjgikkLwFP7",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2913.862739530366!2d-79.14738048839105!3d43.08638098878613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d344f9c1b60a79%3A0x415f82f9f0ae72bd!2sSmooth%20Skin%20Niagara!5e0!3m2!1sen!2suk!4v1788992224588!5m2!1sen!2suk",
};

export interface PageMetadataOptions {
  title: string;
  description: string;
  /** Canonical path, e.g. "/laser-hair-removal". Resolved against metadataBase. */
  path: string;
  /** Set false for utility/form pages that must stay out of the index. */
  index?: boolean;
  /** Open Graph / Twitter image paths. Defaults to the studio logo. */
  images?: string[];
  keywords?: string[];
}

export function pageMetadata({
  title,
  description,
  path,
  index = true,
  images,
  keywords,
}: PageMetadataOptions): Metadata {
  const imageList = (images?.length ? images : [OG_IMAGE_PATH]).map(
    (src) => `${SITE_URL}${src}`,
  );
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_CA",
      type: "website",
      images: imageList,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageList,
    },
    ...(index ? {} : { robots: { index: false, follow: true } }),
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.name,
    url: `${SITE_URL}/`,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    logo: `${SITE_URL}${OG_IMAGE_PATH}`,
    image: `${SITE_URL}${OG_IMAGE_PATH}`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.locality,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    hasMap: BUSINESS.directionsUrl,
    sameAs: [BUSINESS.social.facebook, BUSINESS.social.instagram],
  };
}

export function serviceJsonLd({
  name,
  path,
  description,
}: {
  name: string;
  path: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    url: `${SITE_URL}${path}`,
    description,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: {
      "@type": "City",
      name: "Niagara Falls",
      "@id": "https://en.wikipedia.org/wiki/Niagara_Falls,_Ontario",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
