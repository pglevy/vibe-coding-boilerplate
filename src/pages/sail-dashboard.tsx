import { useState } from 'react'

function SailDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const projects = [
    { id: 1, name: 'Project Alpha', status: 'active', progress: 75, dueDate: '2024-01-15' },
    { id: 2, name: 'Project Beta', status: 'review', progress: 100, dueDate: '2024-01-10' },
    { id: 3, name: 'Project Gamma', status: 'planning', progress: 25, dueDate: '2024-01-20' },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-sail-accent'
      case 'review': return 'text-sail-positive'
      case 'planning': return 'text-sail-secondary'
      default: return 'text-sail-standard'
    }
  }

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'active': return 'bg-blue-50'
      case 'review': return 'bg-sail-bg-success'
      case 'planning': return 'bg-gray-50'
      default: return 'bg-sail-bg-standard'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-sail-bg-standard border-b border-sail-secondary">
        <div className="max-w-7xl mx-auto px-sail-standard py-sail-standard">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-sail-large-plus font-bold text-sail-standard">
                Project Dashboard
              </h1>
              <p className="text-sail-standard text-sail-secondary">
                Manage your projects and track progress
              </p>
            </div>
            <button className="bg-sail-accent text-white px-sail-standard py-sail-less rounded-sail-semi-rounded text-sail-medium font-medium hover:opacity-90">
              New Project
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-sail-standard py-sail-more">
        {/* Tabs */}
        <div className="mb-sail-more">
          <div className="border-b border-sail-secondary">
            <nav className="flex space-x-sail-standard">
              {['overview', 'projects', 'analytics'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-sail-less px-sail-even-less border-b-2 text-sail-medium font-medium capitalize ${
                    activeTab === tab
                      ? 'border-sail-accent text-sail-accent'
                      : 'border-transparent text-sail-secondary hover:text-sail-standard'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-sail-more">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-sail-standard">
              <div className="bg-sail-bg-standard rounded-sail-rounded border border-sail-secondary p-sail-standard">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sail-small text-sail-secondary">Total Projects</p>
                    <p className="text-sail-large font-bold text-sail-standard">12</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-sail-rounded flex items-center justify-center">
                    <span className="text-sail-medium text-sail-accent">📁</span>
                  </div>
                </div>
              </div>

              <div className="bg-sail-bg-standard rounded-sail-rounded border border-sail-secondary p-sail-standard">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sail-small text-sail-secondary">Active</p>
                    <p className="text-sail-large font-bold text-sail-accent">8</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-sail-rounded flex items-center justify-center">
                    <span className="text-sail-medium text-sail-accent">⚡</span>
                  </div>
                </div>
              </div>

              <div className="bg-sail-bg-standard rounded-sail-rounded border border-sail-secondary p-sail-standard">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sail-small text-sail-secondary">Completed</p>
                    <p className="text-sail-large font-bold text-sail-positive">3</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-sail-rounded flex items-center justify-center">
                    <span className="text-sail-medium text-sail-positive">✅</span>
                  </div>
                </div>
              </div>

              <div className="bg-sail-bg-standard rounded-sail-rounded border border-sail-secondary p-sail-standard">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sail-small text-sail-secondary">Overdue</p>
                    <p className="text-sail-large font-bold text-sail-negative">1</p>
                  </div>
                  <div className="w-12 h-12 bg-red-100 rounded-sail-rounded flex items-center justify-center">
                    <span className="text-sail-medium text-sail-negative">⚠️</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Projects */}
            <div className="bg-sail-bg-standard rounded-sail-rounded border border-sail-secondary">
              <div className="px-sail-standard py-sail-less border-b border-sail-secondary">
                <h3 className="text-sail-medium-plus font-semibold text-sail-standard">
                  Recent Projects
                </h3>
              </div>
              <div className="p-sail-standard">
                <div className="space-y-sail-less">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="flex items-center justify-between p-sail-less rounded-sail-semi-rounded hover:bg-gray-50"
                    >
                      <div className="flex items-center space-x-sail-less">
                        <div className={`w-3 h-3 rounded-full ${getStatusBg(project.status)}`}>
                          <div className={`w-full h-full rounded-full ${
                            project.status === 'active' ? 'bg-sail-accent' :
                            project.status === 'review' ? 'bg-sail-positive' :
                            'bg-sail-secondary'
                          }`} />
                        </div>
                        <div>
                          <p className="text-sail-standard font-medium text-sail-standard">
                            {project.name}
                          </p>
                          <p className={`text-sail-small capitalize ${getStatusColor(project.status)}`}>
                            {project.status}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-sail-less">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-sail-accent h-2 rounded-full"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                          <span className="text-sail-small text-sail-secondary w-12 text-right">
                            {project.progress}%
                          </span>
                        </div>
                        <p className="text-sail-small text-sail-secondary mt-sail-even-less">
                          Due {project.dueDate}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="bg-sail-bg-standard rounded-sail-rounded border border-sail-secondary">
            <div className="px-sail-standard py-sail-less border-b border-sail-secondary">
              <h3 className="text-sail-medium-plus font-semibold text-sail-standard">
                All Projects
              </h3>
            </div>
            <div className="p-sail-standard">
              <div className="text-center py-sail-more">
                <p className="text-sail-standard text-sail-secondary">
                  Project list view would go here
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="bg-sail-bg-standard rounded-sail-rounded border border-sail-secondary">
            <div className="px-sail-standard py-sail-less border-b border-sail-secondary">
              <h3 className="text-sail-medium-plus font-semibold text-sail-standard">
                Analytics
              </h3>
            </div>
            <div className="p-sail-standard">
              <div className="text-center py-sail-more">
                <p className="text-sail-standard text-sail-secondary">
                  Analytics charts would go here
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SailDashboard