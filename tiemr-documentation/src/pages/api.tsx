import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import APICallWebsite from "@site/src/components/apiFeatures";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`API`}
      description="Ringo Mar's Timer browser source for OBS"
    >
      <main>
        <APICallWebsite />
      </main>
    </Layout>
  );
}
