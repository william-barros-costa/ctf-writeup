import Layout from '@theme/Layout';
import HomepageContent from '@site/src/components/HomepageContent';

export default function Home() {
  return (
    <Layout
      title='Homepage'
      description="Description will go into a meta tag in <head />">
      <main>
        <HomepageContent />
      </main>
    </Layout>
  );
}
