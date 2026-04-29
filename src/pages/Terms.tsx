import InfoPage from '../components/InfoPage';

export default function Terms() {
  return (
    <InfoPage title="Terms of Service" subtitle="Rules of the Game">
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">1. Acceptance of Terms</h2>
          <p>By accessing ODYSSEY, you agree to be bound by these Terms of Service. If you do not agree, please do not use our platform.</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">2. Use License</h2>
          <p>Permission is granted to temporarily play the games on our website for personal, non-commercial use only.</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">3. Disclaimer</h2>
          <p>The games on ODYSSEY are provided "as is". We make no warranties regarding performance or availability.</p>
        </div>
      </section>
    </InfoPage>
  );
}
