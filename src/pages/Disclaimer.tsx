import InfoPage from '../components/InfoPage';

export default function Disclaimer() {
  return (
    <InfoPage title="Disclaimer" subtitle="Legal Notice">
      <section className="space-y-6">
        <p>The information and games provided on ODYSSEY are for entertainment purposes only.</p>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No Responsibility</h2>
          <p>We are not responsible for any loss or damage incurred while using our platform. Use of games and services provided by third-party links are subject to their own terms.</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">External Links</h2>
          <p>ODYSSEY may contain links to external sites that are not operated by us. We have no control over the content and practices of these sites.</p>
        </div>
      </section>
    </InfoPage>
  );
}
