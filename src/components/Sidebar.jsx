import { 
    Home, 
    Layout, 
    Clock, 
    Calendar, 
    Server, 
    Network, 
    HardDrive, 
    Cloud, 
    MonitorDot,
    FileText,
    ChevronDown,
    ChevronRight,
    ExternalLink,
    X
  } from 'lucide-react';
  import { useState } from 'react';
  
  export function Sidebar({ isOpen, onClose }) {
    const [computeExpanded, setComputeExpanded] = useState(false);
    const [relatedServicesExpanded, setRelatedServicesExpanded] = useState(false);
  
    return (
      <>
        {/* Mobile overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            onClick={onClose}
          />
        )}
  
        {/* Sidebar */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-30
          w-64 bg-white border-r border-gray-200 
          transform transition-transform duration-200 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          overflow-y-auto mt-0 lg:mt-0
        `}>
          <div className="p-4">
            {/* Mobile close button */}
            <button 
              onClick={onClose}
              className="lg:hidden absolute top-4 right-4 p-1 hover:bg-gray-100 rounded"
              aria-label="Close sidebar"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-4">
              <h2 className="text-sm text-gray-500 mb-2">Infrastructure</h2>
            </div>
  <hr />
            <nav className="space-y-1 mt-2">
              <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm bg-gray-200 rounded before:w-1 before:h-full before:absolute before:bg-blue-400 before:left-0 relative">
                <Home className="h-4 w-4" />
                Overview
              </a>
              <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 rounded">
                <Layout className="h-4 w-4" />
                VPC layout
              </a>
              <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 rounded">
                <Clock className="h-4 w-4" />
                Status history
              </a>
              <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 rounded">
                <Calendar className="h-4 w-4" />
                Reservations
              </a>
  <hr />
              {/* Compute expandable section */}
              <div className=''>
                <button 
                  onClick={() => setComputeExpanded(!computeExpanded)}
                  className="flex items-center justify-between w-full px-3 py-2 text-sm hover:bg-gray-100 rounded"
                >
                  <div className="flex items-center gap-2">
                    <Server className="h-4 w-4" />
                    Compute
                  </div>
                  {computeExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </button>
                {computeExpanded && (
                  <div className="ml-6 mt-1 space-y-1">
                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">
                      Virtual server instances
                    </a>
                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">
                      Bare metal servers
                    </a>
                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">
                      Dedicated hosts
                    </a>
                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">
                      Placement groups
                    </a>
                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">
                      SSH keys
                    </a>
                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">
                      Images
                    </a>
                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">
                      Instance groups
                    </a>
                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">
                      Instance templates
                    </a>
                  </div>
                )}
              </div>
  
              <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 rounded">
                <Network className="h-4 w-4" />
                Network
              </a>
              <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 rounded">
                <HardDrive className="h-4 w-4" />
                Storage
              </a>
              <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 rounded justify-between">
                <div className="flex items-center gap-2">
                  <Cloud className="h-4 w-4" />
                  Classic Infrastructure
                </div>
                <ExternalLink className="h-3 w-3" />
              </a>
              <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 rounded justify-between">
                <div className="flex items-center gap-2">
                  <MonitorDot className="h-4 w-4" />
                  Power Virtual Server
                </div>
                <ExternalLink className="h-3 w-3" />
              </a>
              <hr />
              <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 rounded justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Docs
                </div>
                <ExternalLink className="h-3 w-3" />
              </a>
  
              {/* Related services expandable section */}
              <div>
                <button 
                  onClick={() => setRelatedServicesExpanded(!relatedServicesExpanded)}
                  className="flex items-center justify-between w-full px-3 py-2 text-sm hover:bg-gray-100 rounded"
                >
                  <span>Related services</span>
                  {relatedServicesExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </button>
              </div>
            </nav>
          </div>
        </aside>
      </>
    );
  }
  