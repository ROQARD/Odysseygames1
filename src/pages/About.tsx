import InfoPage from '../components/InfoPage';

export default function About() {
  return (
    <InfoPage title="About Odyssey" subtitle="The Future of Web Gaming">
      <section className="space-y-4">
        <p>ODYSSEY is a premier web gaming platform dedicated to bringing high-quality, instant-play experiences to gamers around the world. We believe that gaming should be accessible, social, and immediate.</p>
        <p>Founded in 2026, we have curated a collection of the finest HTML5 games that run flawlessly in your browser, whether you're on a desktop, tablet, or smartphone.</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8">Our Mission</h2>
        <p>To eliminate the barriers between players and play. No downloads, no updates, just gaming.</p>
      </section>
    </InfoPage>
  );
}
