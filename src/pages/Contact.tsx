import InfoPage from '../components/InfoPage';

export default function Contact() {
  return (
    <InfoPage title="Contact Us" subtitle="Get in Touch">
      <section className="space-y-6 text-center py-10">
        <p className="text-xl">Have a question, feedback, or a game you want to submit?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold mb-2">Support Email</h3>
            <p className="text-odyssey-accent font-mono">support@odysseygames.org</p>
          </div>
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold mb-2">Community</h3>
            <p className="text-odyssey-accent font-mono underline cursor-pointer">Join our Discord</p>
          </div>
        </div>
      </section>
    </InfoPage>
  );
}
