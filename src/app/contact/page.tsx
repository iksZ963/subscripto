export default function ContactPage() {
    return (
      <div className="px-6 sm:px-8 py-12 bg-background text-foreground">
        <h1 className="text-3xl sm:text-4xl font-semibold text-primary mb-4">Contact Us</h1>
        <form className="space-y-4">
          <label className="block text-lg font-medium text-muted">
            Your Name
            <input
              type="text"
              className="w-full mt-1 px-4 py-2 border border-border rounded"
            />
          </label>
          <label className="block text-lg font-medium text-muted">
            Your Email
            <input
              type="email"
              className="w-full mt-1 px-4 py-2 border border-border rounded"
            />
          </label>
          <label className="block text-lg font-medium text-muted">
            Message
            <textarea
              className="w-full mt-1 px-4 py-2 border border-border rounded"
              rows={4}
            />
          </label>
          <button type="submit" className="px-6 py-2 bg-cta text-black rounded">
            Send Message
          </button>
        </form>
      </div>
    );
  }
  