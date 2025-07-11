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
  const trendColor = kpi.trendDirection === 'up' ? 'text-green-600' : kpi.trendDirection === 'down' ? 'text-red-600' : 'text-gray-600';
  const Icon = kpi.icon;
  
  return (
    <div 
      onClick={onClick}
      className="cursor-pointer rounded-lg border p-3 transition-all bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:shadow-md"
    >
      <div className="flex items-center justify-between mb-2">
        <Icon className={`h-4 w-4 text-${kpi.color}-600`} />
        {!needsConfiguration && (
          <div className={`flex items-center gap-1 ${trendColor}`}>
            <TrendIcon className="h-3 w-3" />
            <span className="text-xs font-medium">{kpi.trend}</span>
          </div>
        )}
      </div>
      <h3 className="text-xs font-medium mb-1 text-gray-600">
        {kpi.title}
      </h3>
      {needsConfiguration ? (
        <button className="w-full mt-2 px-2 py-1 border border-gray-300 bg-white text-gray-700 rounded text-xs hover:bg-gray-50 transition-colors">
          Configure
        </button>
      ) : (
        <div>
          <p className="text-lg font-bold text-gray-900">
            {kpi.value}
          </p>
          {kpi.target && (
            <p className="text-xs text-gray-400 mt-1">
              Target: {kpi.target}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

const ProcessCard = ({ process, onProcessClick }) => {
  const statusColor = process.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800';
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      {/* Process Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={() => onProcessClick(process)}
              className="text-xl font-medium text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-2"
            >
              {process.name}
              <ChevronRightIcon className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-3">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor}`}>
                {process.status.charAt(0).toUpperCase() + process.status.slice(1)}
              </span>
              <div className="flex items-center gap-1 text-gray-700 font-medium">
                <Activity className="h-4 w-4" />
                <span className="text-base">{process.totalCases.toLocaleString()} cases</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">{process.description}</p>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <RefreshCw className="h-4 w-4" />
              <span>Last successful update: {process.lastUpdate}</span>
            </div>
          </div>
        </div>
      </div>

      {/* KPIs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
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
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Process Overview</h1>
              <p className="text-gray-600 mt-1">Monitor and analyze your business processes</p>
            </div>
            <div className="flex items-end gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-600 font-medium">Time Period</span>
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm h-10">
                  <option>Last 6 Months</option>
                  <option>Last 30 Days</option>
                  <option>Last 12 Months</option>
                  <option>All Time</option>
                </select>
              </div>
              <button
                onClick={handleRefresh}
                className="px-4 py-2 border border-gray-300 bg-transparent text-gray-700 rounded-lg hover:bg-gray-50 h-10 text-sm"
              >
                Refresh
              </button>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-b border-gray-200 mb-6"></div>

        {/* Search and Filters */}
        <div className="mb-6">
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-600 font-medium sr-only">Status Filter</span>
                <select 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm h-10"
                >
                  <option value="all">All Processes</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search processes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
              <Filter className="h-4 w-4" />
              More Filters
            </button>
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
              <Download className="h-4 w-4" />
              Export
            </button>
          </div>
        </div>

        {/* Process Cards */}
        <div className="space-y-6">
          {filteredProcesses.map((process) => (
            <ProcessCard
              key={process.id}
              process={process}
              onProcessClick={handleProcessClick}
            />
          ))}
        </div>

        {filteredProcesses.length === 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No processes found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
