import { getDictionary, type Locale } from "@/lib/i18n";

export default async function PrivacyPage({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale);
  return (
    <article className="prose prose-neutral dark:prose-invert">
      <h1>{dict.footer.privacy}</h1>
      <p>
        This website collects minimal analytics (page views, performance) via Cloudflare Web Analytics.
        No cookies, no personal data. Contact via email only. For inquiries: andrukiewicz.oskar@gmail.com.
      </p>
      <h2>Data</h2>
      <p>
        No forms are used. Links to third-party sites (GitHub, LinkedIn) are subject to their privacy
        policies.
      </p>
      <h2>Contact</h2>
      <p>Email: andrukiewicz.oskar@gmail.com</p>
    </article>
  );
}