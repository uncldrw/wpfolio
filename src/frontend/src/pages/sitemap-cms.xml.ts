/**
 * Dynamic Sitemap — covers CMS-driven pages not known at build time.
 * Returns XML sitemap with all pages fetched from Payload CMS.
 * @astrojs/sitemap covers static routes; this file serves /sitemap-cms.xml
 * for the CMS-generated pages and can be linked from robots.txt.
 */
import type { APIRoute } from 'astro';

interface CMSPage {
  id: string;
  slug: string;
  updatedAt: string;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const GET: APIRoute = async () => {
  const CMS_URL = import.meta.env.CMS_URL ?? 'http://localhost:3000';
  const SITE = 'https://woistjason.de';

  let pages: CMSPage[] = [];

  try {
    const res = await fetch(`${CMS_URL}/api/pages?limit=200&depth=0`);
    if (res.ok) {
      const data = await res.json();
      pages = (data.docs as CMSPage[]) ?? [];
    }
  } catch {
    // CMS unavailable — return minimal sitemap
  }

  const staticUrls: string[] = [
    SITE + '/',
    SITE + '/kontakt',
  ];

  const cmsUrls = pages
    .filter((p) => p.slug && p.slug !== 'home')
    .map((p) => {
      const loc = escapeXml(`${SITE}/${p.slug}`);
      const lastmod = p.updatedAt ? escapeXml(p.updatedAt.split('T')[0]) : '';
      return `  <url>\n    <loc>${loc}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}\n  </url>`;
    });

  const staticEntries = staticUrls.map(
    (u) => `  <url>\n    <loc>${escapeXml(u)}</loc>\n  </url>`,
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticEntries, ...cmsUrls].join('\n')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
