import React, { useState } from 'react';
import {
  TrendingUp,
  Clock,
  AlertCircle,
  Activity,
  CheckCircle,
  Bot,
  DollarSign,
  Calendar,
  ArrowDown,
  ArrowUp,
  Minus,
  Info,
  Filter,
  Download,
  RefreshCw,
  AlertTriangle,
  XCircle,
  FileX,
  Heart,
  X,
  Share2,
  TrendingDown,
  Target,
  Zap,
  Users,
  Search,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Eye,
  EyeOff,
  ChevronRight as ChevronRightIcon
} from 'lucide-react';

// Process definitions with their KPIs
const processes = [
  {
    id: 'medical-claims',
    name: 'Medical Claims Process',
    description: 'End-to-end processing of medical insurance claims',
    route: '/composite-medical-claims-v4',
    totalCases: 8543,
    avgDuration: '12.4 days',
    lastUpdate: 'June 26, 2025 at 9:42 AM',
    status: 'active',
    kpis: {
      duration: {
        title: 'Average Case Duration',
        value: '12.4 days',
        target: '10.0 days',
        trend: '+0.8',
        trendDirection: 'up',
        description: 'Average time from submission to decision',
        icon: Clock,
        color: 'orange'
      },
      rate: {
        title: 'Automation Rate',
        value: '62.7%',
        target: '75.0%',
        trend: '+2.1%',
        trendDirection: 'up',
        description: 'Percentage of cases processed automatically',
        icon: Bot,
        color: 'purple'
      },
      cost: {
        title: 'Average Cost',
        value: '$2,847',
        target: '$2,500',
        trend: '+5.2%',
        trendDirection: 'up',
        description: 'Average value of processed claims',
        icon: DollarSign,
        color: 'green'
      },
      conformance: {
        title: 'Conformance',
        value: '94.2%',
        target: '98.0%',
        trend: '-1.2%',
        trendDirection: 'down',
        description: 'Process conformance rate',
        icon: CheckCircle,
        color: 'blue'
      },
      error: {
        title: 'Error Rate',
        value: '14.2%',
        target: '8.0%',
        trend: '-0.8%',
        trendDirection: 'down',
        description: 'Claims that exceeded SLA timeframes',
        icon: XCircle,
        color: 'red'
      }
    }
  },
  {
    id: 'pharmacy-claims',
    name: 'Pharmacy Claims Process',
    description: 'Processing of prescription drug claims and prior authorizations',
    route: '#',
    totalCases: 12847,
    avgDuration: '8.2 days',
    lastUpdate: 'June 27, 2025 at 11:15 AM',
    status: 'active',
    kpis: {
      duration: {
        title: 'Average Case Duration',
        value: '8.2 days',
        target: '6.0 days',
        trend: '-0.3',
        trendDirection: 'down',
        description: 'Average time from submission to decision',
        icon: Clock,
        color: 'orange'
      },
      rate: {
        title: 'Automation Rate',
        value: '78.4%',
        target: '85.0%',
        trend: '+3.8%',
        trendDirection: 'up',
        description: 'Percentage of cases processed automatically',
        icon: Bot,
        color: 'purple'
      },
      cost: {
        title: 'Average Cost',
        value: '$487',
        target: '$400',
        trend: '+2.1%',
        trendDirection: 'up',
        description: 'Average value of processed claims',
        icon: DollarSign,
        color: 'green'
      },
      conformance: {
        title: 'Conformance',
        value: '96.8%',
        target: '98.0%',
        trend: '+0.4%',
        trendDirection: 'up',
        description: 'Process conformance rate',
        icon: CheckCircle,
        color: 'blue'
      },
      error: {
        title: 'Error Rate',
        value: '8.7%',
        target: '5.0%',
        trend: '-1.2%',
        trendDirection: 'down',
        description: 'Claims that exceeded SLA timeframes',
        icon: XCircle,
        color: 'red'
      }
    }
  },
  {
    id: 'dental-claims',
    name: 'Dental Claims Process',
    description: 'Processing of dental insurance claims and treatment approvals',
    route: '#',
    totalCases: 6234,
    avgDuration: '15.7 days',
    lastUpdate: 'June 25, 2025 at 3:28 PM',
    status: 'active',
    kpis: {
      duration: {
        title: 'Average Case Duration',
        value: '15.7 days',
        target: '12.0 days',
        trend: '+1.4',
        trendDirection: 'up',
        description: 'Average time from submission to decision',
        icon: Clock,
        color: 'orange'
      },
      rate: {
        title: 'Automation Rate',
        value: '45.3%',
        target: '65.0%',
        trend: '+1.7%',
        trendDirection: 'up',
        description: 'Percentage of cases processed automatically',
        icon: Bot,
        color: 'purple'
      },
      cost: {
        title: 'Average Cost',
        value: '$1,247',
        target: '$1,100',
        trend: '+3.8%',
        trendDirection: 'up',
        description: 'Average value of processed claims',
        icon: DollarSign,
        color: 'green'
      },
      conformance: {
        title: 'Conformance',
        value: '89.4%',
        target: '95.0%',
        trend: '-2.1%',
        trendDirection: 'down',
        description: 'Process conformance rate',
        icon: CheckCircle,
        color: 'blue'
      },
      error: {
        title: 'Error Rate',
        value: '18.9%',
        target: '12.0%',
        trend: '+0.6%',
        trendDirection: 'up',
        description: 'Claims that exceeded SLA timeframes',
        icon: XCircle,
        color: 'red'
      }
    }
  }
];

const KPICard = ({ kpi, onClick, needsConfiguration = false }) => {
  const TrendIcon = kpi.trendDirection === 'up' ? ArrowUp : kpi.trendDirection === 'down' ? ArrowDown : Minus;
  const trendColor = kpi.trendDirection === 'up' ? 'text-sail-positive' : kpi.trendDirection === 'down' ? 'text-sail-negative' : 'text-sail-secondary';
  const Icon = kpi.icon;
  
  return (
    <div 
      onClick={onClick}
      className="cursor-pointer card-sail-no-shadow p-sail-less transition-all hover:border-sail-accent"
    >
      <div className="flex items-center justify-between mb-sail-even-less">
        <Icon className={`h-4 w-4 ${
          kpi.color === 'orange' ? 'text-orange-600' :
          kpi.color === 'purple' ? 'text-purple-600' :
          kpi.color === 'green' ? 'text-sail-positive' :
          kpi.color === 'blue' ? 'text-sail-accent' :
          kpi.color === 'red' ? 'text-sail-negative' : 'text-sail-secondary'
        }`} />
        {!needsConfiguration && (
          <div className={`flex items-center gap-1 ${trendColor}`}>
            <TrendIcon className="h-3 w-3" />
            <span className="text-sail-small font-medium">{kpi.trend}</span>
          </div>
        )}
      </div>
      <h3 className="text-sail-small font-medium mb-sail-even-less text-sail-secondary">
        {kpi.title}
      </h3>
      {needsConfiguration ? (
        <button className="w-full mt-sail-even-less px-sail-even-less py-sail-even-less border border-sail-secondary bg-sail-bg-standard text-sail-secondary rounded-sail-semi-rounded text-sail-small hover:bg-sail-bg-light transition-colors">
          Configure
        </button>
      ) : (
        <div>
          <p className="text-sail-medium-plus font-bold text-sail-standard">
            {kpi.value}
          </p>
          {kpi.target && (
            <p className="text-sail-small text-sail-secondary mt-sail-even-less">
              Target: {kpi.target}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

const ProcessCard = ({ process, onProcessClick }) => {
  const statusColor = process.status === 'active' ? 'bg-sail-bg-success text-sail-positive' : 'bg-gray-100 text-sail-secondary';
  
  // Assign different colors to different process types
  const getCardColorClass = (processId) => {
    switch (processId) {
      case 'medical-claims': return 'card-sail-blue';
      case 'pharmacy-claims': return 'card-sail-green'; 
      case 'dental-claims': return 'card-sail-purple';
      default: return 'card-sail-orange';
    }
  };
  
  return (
    <div className={`card-sail ${getCardColorClass(process.id)} bg-sail-bg-card p-sail-standard`}>
      {/* Process Header */}
      <div className="flex items-center justify-between mb-sail-standard">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-sail-even-less">
            <button
              onClick={() => onProcessClick(process)}
              className="text-sail-medium-plus font-medium text-sail-accent hover:text-blue-800 transition-colors flex items-center gap-2"
            >
              {process.name}
              <ChevronRightIcon className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-3">
              <span className={`inline-flex items-center px-sail-less py-sail-even-less rounded-full text-sail-small font-medium ${statusColor}`}>
                {process.status.charAt(0).toUpperCase() + process.status.slice(1)}
              </span>
              <div className="flex items-center gap-1 text-sail-standard font-medium">
                <Activity className="h-4 w-4" />
                <span className="text-sail-standard">{process.totalCases.toLocaleString()} cases</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sail-standard text-sail-secondary">{process.description}</p>
            <div className="flex items-center gap-1 text-sail-standard text-sail-secondary">
              <RefreshCw className="h-4 w-4" />
              <span>Last successful update: {process.lastUpdate}</span>
            </div>
          </div>
        </div>
      </div>

      {/* KPIs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-sail-less">
        {Object.entries(process.kpis).map(([key, kpi]) => (
          <KPICard
            key={key}
            kpi={kpi}
            needsConfiguration={key === 'error' && process.id === 'dental-claims'}
            onClick={() => {
              console.log(`Clicked KPI: ${key} for process: ${process.id}`);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default function ProcessListDashboard() {
  const [lastRefresh, setLastRefresh] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const handleRefresh = () => {
    setLastRefresh(new Date());
  };

  const handleProcessClick = (process) => {
    // Hard code all process links to go to composite medical claims v4
    console.log('Navigate to composite medical claims v4');
    window.location.hash = '#/bam-boards/composite-medical-claims-v4';
  };

  const filteredProcesses = processes.filter(process => {
    const matchesSearch = process.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         process.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || process.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-sail-bg-light">
      {/* Application Header */}
      <div className="app-header-sail">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
            <span className="text-blue-600 font-bold text-sm">A</span>
          </div>
          <span className="font-semibold text-gray-800">Appian Designer</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-gray-700 hover:text-gray-900 transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <button className="text-gray-700 hover:text-gray-900 transition-colors">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <Users className="h-4 w-4" />
            </div>
          </button>
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-gray-600 text-sm font-medium">PL</span>
          </div>
        </div>
      </div>
      
      {/* Page Heading Section */}
      <div className="page-heading-sail mb-sail-more">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-sail-standard">
            <div className="flex items-end justify-between">
              <div>
                <h1 className="text-sail-extra-large font-bold text-sail-standard">Process Overview</h1>
                <p className="text-sail-secondary mt-sail-even-less">Monitor and analyze your business processes</p>
              </div>
              <div className="flex items-end gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-sail-standard text-sail-secondary font-medium">Time Period</span>
                  <select className="border border-sail-secondary rounded-sail-semi-rounded px-sail-less py-sail-even-less text-sail-secondary h-10">
                    <option>Last 6 Months</option>
                    <option>Last 30 Days</option>
                    <option>Last 12 Months</option>
                    <option>All Time</option>
                  </select>
                </div>
                <button
                  onClick={handleRefresh}
                  className="px-sail-standard py-sail-even-less border border-sail-secondary bg-transparent text-sail-secondary rounded-sail-semi-rounded hover:bg-sail-bg-light h-10"
                >
                  Refresh
                </button>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div>
            <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1">
                <span className="text-sail-standard text-sail-secondary font-medium sr-only">Status Filter</span>
                <select 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="border border-sail-secondary rounded-sail-semi-rounded px-sail-less py-sail-even-less text-sail-secondary min-h-[2.125rem]"
                >
                  <option value="all">All Processes</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-sail-secondary" />
              <input
                type="text"
                placeholder="Search processes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-sail-even-less border border-sail-secondary rounded-sail-semi-rounded text-sail-secondary focus:outline-none focus:ring-2 focus:ring-sail-accent focus:border-transparent"
              />
            </div>
            <button className="flex items-center gap-2 px-sail-less py-sail-even-less border border-sail-secondary rounded-sail-semi-rounded text-sail-secondary hover:bg-sail-bg-light">
              <Filter className="h-4 w-4" />
              More Filters
            </button>
            <button className="flex items-center gap-2 px-sail-less py-sail-even-less border border-sail-secondary rounded-sail-semi-rounded text-sail-secondary hover:bg-sail-bg-light">
              <Download className="h-4 w-4" />
              Export
            </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-sail-standard">
        {/* Process Cards */}
        <div className="space-y-sail-standard">
          {filteredProcesses.map((process) => (
            <ProcessCard
              key={process.id}
              process={process}
              onProcessClick={handleProcessClick}
            />
          ))}
        </div>

        {filteredProcesses.length === 0 && (
          <div className="card-sail p-sail-even-more text-center">
            <Search className="h-12 w-12 text-sail-secondary mx-auto mb-sail-standard" />
            <h3 className="text-sail-medium-plus font-medium text-sail-standard mb-sail-even-less">No processes found</h3>
            <p className="text-sail-secondary">Try adjusting your search terms or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}