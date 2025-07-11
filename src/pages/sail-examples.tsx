import { useState } from 'react'

function SailExamples() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="max-w-4xl mx-auto p-sail-standard space-y-sail-more">
      {/* Page Header */}
      <div className="text-center space-y-sail-less">
        <h1 className="text-sail-extra-large font-bold text-sail-standard">
          SAIL-Mapped Component Examples
        </h1>
        <p className="text-sail-medium text-sail-secondary">
          Components built using only SAIL-equivalent Tailwind classes
        </p>
      </div>

      {/* Status Cards Section */}
      <section className="space-y-sail-standard">
        <h2 className="text-sail-large-plus font-semibold text-sail-standard mb-sail-less">
          Status Cards
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-sail-standard">
          {/* Success Card */}
          <div className="bg-sail-bg-success border border-sail-positive rounded-sail-semi-rounded p-sail-standard">
            <div className="flex items-center space-x-sail-less">
              <div className="w-6 h-6 bg-sail-positive rounded-full flex items-center justify-center">
                <span className="text-white text-sail-small">✓</span>
              </div>
              <h3 className="text-sail-medium font-semibold text-sail-positive">Success</h3>
            </div>
            <p className="text-sail-standard text-sail-standard mt-sail-less">
              Your action completed successfully
            </p>
          </div>

          {/* Error Card */}
          <div className="bg-sail-bg-error border border-sail-negative rounded-sail-semi-rounded p-sail-standard">
            <div className="flex items-center space-x-sail-less">
              <div className="w-6 h-6 bg-sail-negative rounded-full flex items-center justify-center">
                <span className="text-white text-sail-small">!</span>
              </div>
              <h3 className="text-sail-medium font-semibold text-sail-negative">Error</h3>
            </div>
            <p className="text-sail-standard text-sail-standard mt-sail-less">
              There was an issue processing your request
            </p>
          </div>

          {/* Info Card */}
          <div className="bg-sail-bg-standard border border-sail-accent rounded-sail-semi-rounded p-sail-standard">
            <div className="flex items-center space-x-sail-less">
              <div className="w-6 h-6 bg-sail-accent rounded-full flex items-center justify-center">
                <span className="text-white text-sail-small">i</span>
              </div>
              <h3 className="text-sail-medium font-semibold text-sail-accent">Information</h3>
            </div>
            <p className="text-sail-standard text-sail-standard mt-sail-less">
              Here's some helpful information
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="space-y-sail-standard">
        <h2 className="text-sail-large-plus font-semibold text-sail-standard mb-sail-less">
          Contact Form
        </h2>
        
        <div className="bg-sail-bg-standard border border-sail-secondary rounded-sail-rounded p-sail-more max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-sail-standard">
            <div>
              <label className="block text-sail-medium font-medium text-sail-standard mb-sail-less">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full p-sail-less border border-sail-secondary rounded-sail-semi-rounded text-sail-standard focus:border-sail-accent focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label className="block text-sail-medium font-medium text-sail-standard mb-sail-less">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full p-sail-less border border-sail-secondary rounded-sail-semi-rounded text-sail-standard focus:border-sail-accent focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label className="block text-sail-medium font-medium text-sail-standard mb-sail-less">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={4}
                className="w-full p-sail-less border border-sail-secondary rounded-sail-semi-rounded text-sail-standard focus:border-sail-accent focus:outline-none resize-none"
                placeholder="Enter your message"
              />
            </div>
            
            <div className="flex gap-sail-less">
              <button
                type="submit"
                className="bg-sail-accent text-white px-sail-standard py-sail-less rounded-sail-semi-rounded text-sail-medium font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-sail-accent focus:ring-offset-2"
              >
                Send Message
              </button>
              <button
                type="button"
                className="bg-sail-bg-standard text-sail-secondary px-sail-standard py-sail-less border border-sail-secondary rounded-sail-semi-rounded text-sail-medium font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sail-secondary focus:ring-offset-2"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Typography Examples */}
      <section className="space-y-sail-standard">
        <h2 className="text-sail-large-plus font-semibold text-sail-standard mb-sail-less">
          Typography Scale
        </h2>
        
        <div className="bg-sail-bg-standard border border-sail-secondary rounded-sail-rounded p-sail-more">
          <div className="space-y-sail-less">
            <p className="text-sail-extra-large text-sail-standard">Extra Large Text</p>
            <p className="text-sail-large-plus text-sail-standard">Large Plus Text</p>
            <p className="text-sail-large text-sail-standard">Large Text</p>
            <p className="text-sail-medium-plus text-sail-standard">Medium Plus Text</p>
            <p className="text-sail-medium text-sail-standard">Medium Text</p>
            <p className="text-sail-standard text-sail-standard">Standard Text (Default)</p>
            <p className="text-sail-small text-sail-secondary">Small Text</p>
          </div>
        </div>
      </section>

      {/* Data Display Cards */}
      <section className="space-y-sail-standard">
        <h2 className="text-sail-large-plus font-semibold text-sail-standard mb-sail-less">
          Data Display Cards
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-sail-standard">
          <div className="bg-sail-bg-standard border border-sail-secondary rounded-sail-rounded p-sail-standard text-center">
            <div className="text-sail-large-plus font-bold text-sail-accent">247</div>
            <div className="text-sail-small text-sail-secondary mt-sail-even-less">Total Users</div>
          </div>
          
          <div className="bg-sail-bg-standard border border-sail-secondary rounded-sail-rounded p-sail-standard text-center">
            <div className="text-sail-large-plus font-bold text-sail-positive">98.5%</div>
            <div className="text-sail-small text-sail-secondary mt-sail-even-less">Uptime</div>
          </div>
          
          <div className="bg-sail-bg-standard border border-sail-secondary rounded-sail-rounded p-sail-standard text-center">
            <div className="text-sail-large-plus font-bold text-sail-standard">1,247</div>
            <div className="text-sail-small text-sail-secondary mt-sail-even-less">Page Views</div>
          </div>
          
          <div className="bg-sail-bg-standard border border-sail-secondary rounded-sail-rounded p-sail-standard text-center">
            <div className="text-sail-large-plus font-bold text-sail-negative">3</div>
            <div className="text-sail-small text-sail-secondary mt-sail-even-less">Issues</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SailExamples