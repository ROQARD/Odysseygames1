import InfoPage from '../components/InfoPage';

export default function Privacy() {
  return (
    <InfoPage title="Privacy Policy" subtitle="Protecting Your Data">
      <section className="space-y-6">
        <p>Your privacy is important to us. It is ODYSSEY's policy to respect your privacy regarding any information we may collect from you across our website.</p>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Data Collection</h2>
          <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Third-Party Services</h2>
          <p>We use third-party tools like Google Analytics and Google Adsense which may collect data about your usage patterns.</p>
        </div>
      </section>
    </InfoPage>
  );
}
