import InfoPage from '../components/InfoPage';

export default function Cookies() {
  return (
    <InfoPage title="Cookie Policy" subtitle="How We Use Cookies">
      <section className="space-y-6">
        <p>This is the Cookie Policy for ODYSSEY, accessible from our main URL.</p>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">What Are Cookies</h2>
          <p>As is common practice with almost all professional websites, this site uses cookies, which are tiny files downloaded to your computer, to improve your experience.</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Third Party Cookies</h2>
          <p>In some special cases we also use cookies provided by trusted third parties. This site uses Google Analytics for helping us to understand how you use the site and ways that we can improve your experience.</p>
        </div>
      </section>
    </InfoPage>
  );
}
