import InfoPage from '../components/InfoPage';

export default function FAQ() {
  return (
    <InfoPage title="FAQ Support" subtitle="Frequently Asked Questions">
      <section className="space-y-8">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Is ODYSSEY free to play?</h3>
          <p>Yes, all games on our platform are completely free to play instantly in your browser.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Do I need to create an account?</h3>
          <p>No, you can jump straight into any game without registration.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Can I play on my phone?</h3>
          <p>Absolutely! Our platform and games are optimized for mobile web browsers.</p>
        </div>
      </section>
    </InfoPage>
  );
}
