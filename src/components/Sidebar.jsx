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
  X,
  Database,
  Cpu,
  ChevronLeft,
  ChevronFirst,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

export function Sidebar({ isOpen, onClose }) {
  const [computeExpanded, setComputeExpanded] = useState(false);
  const [relatedServicesExpanded, setRelatedServicesExpanded] = useState(false);
  const [networkExpanded, setNetworkExpanded] = useState(false);
  const [storageExpanded, setStorageExpanded] = useState(false);

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
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-30
          w-64 bg-[#f4f4f4] border-r border-gray-200 
          transform transition-transform duration-200 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          overflow-y-auto mt-0 lg:mt-0
        `}
      >
        <div className="flex flex-col h-full">
          {/* Mobile close button */}
          <button
            onClick={onClose}
            className="lg:hidden absolute top-4 right-4 p-1 hover:bg-gray-100 rounded"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="p-4">
            <h2 className="text-sm text-gray-900 font-bold">Infrastructure</h2>
          </div>
          <hr />
          <nav className="flex-1 overflow-auto">
            <a
              href="#"
              className="flex items-center gap-2 px-3 py-2 text-sm bg-[#e0e0e0] before:w-1 before:h-full before:absolute before:bg-blue-600 before:left-0 relative text-[#161616] group font-bold"
            >
              <Home className="h-4 w-4 text-[#525252] group-hover:text-black" />
              Overview
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-[#e5e5e5] text-[#161616] group"
            >
              <Layout className="h-4 w-4 text-[#525252] group-hover:text-black" />
              VPC layout
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-[#e5e5e5] text-[#161616] group"
            >
              <Clock className="h-4 w-4 text-[#525252] group-hover:text-black" />
              Status history
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-[#e5e5e5] text-[#161616] group"
            >
              <Calendar className="h-4 w-4 text-[#525252] group-hover:text-black" />
              Reservations
            </a>
            <hr />
            {/* Compute expandable section */}
            <div className="">
              <button
                onClick={() => setComputeExpanded(!computeExpanded)}
                className="flex items-center justify-between w-full px-3 py-2 text-sm hover:bg-[#e5e5e5] text-[#161616] group"
              >
                <div className="flex items-center gap-2">
                  <Server className="h-4 w-4 text-[#525252] group-hover:text-black" />
                  Compute
                </div>
                {computeExpanded ? (
                  <ChevronUp className="h-4 w-4 text-[#161616]" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-[#161616]" />
                )}
              </button>
              {computeExpanded && (
                <div className="mt-1 space-y-1">
                  <a
                    href="#"
                    className="block px-3 pl-9 py-2 text-sm text-[#161616] hover:bg-[#e5e5e5]"
                  >
                    Virtual server instances
                  </a>
                  <a
                    href="#"
                    className="block px-3 pl-9 py-2 text-sm text-[#161616] hover:bg-[#e5e5e5]"
                  >
                    Bare metal servers
                  </a>
                  <a
                    href="#"
                    className="block px-3 pl-9 py-2 text-sm text-[#161616] hover:bg-[#e5e5e5]"
                  >
                    Dedicated hosts
                  </a>
                  <a
                    href="#"
                    className="block px-3 pl-9 py-2 text-sm text-[#161616] hover:bg-[#e5e5e5]"
                  >
                    Placement groups
                  </a>
                  <a
                    href="#"
                    className="block px-3 pl-9 py-2 text-sm text-[#161616] hover:bg-[#e5e5e5]"
                  >
                    SSH keys
                  </a>
                  <a
                    href="#"
                    className="block px-3 pl-9 py-2 text-sm text-[#161616] hover:bg-[#e5e5e5]"
                  >
                    Images
                  </a>
                  <a
                    href="#"
                    className="block px-3 pl-9 py-2 text-sm text-[#161616] hover:bg-[#e5e5e5]"
                  >
                    Instance groups
                  </a>
                  <a
                    href="#"
                    className="block px-3 pl-9 py-2 text-sm text-[#161616] hover:bg-[#e5e5e5]"
                  >
                    Instance templates
                  </a>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => setNetworkExpanded(!networkExpanded)}
                className="flex items-center justify-between w-full px-3 py-2 text-sm hover:bg-[#e5e5e5] text-[#161616] group"
              >
                <div className="flex items-center gap-2">
                  <Network className="h-4 w-4 text-[#525252] group-hover:text-black" />
                  Network
                </div>
                {networkExpanded ? (
                  <ChevronUp className="h-4 w-4 text-[#161616]" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-[#161616]" />
                )}
              </button>

              {networkExpanded && (
                <div className="mt-1 space-y-1">
                  <a
                    href="#"
                    className="block px-3 pl-9 py-2 text-sm text-[#161616] hover:bg-[#e5e5e5]"
                  >
                    Virtual server instances
                  </a>
                  <a
                    href="#"
                    className="block px-3 pl-9 py-2 text-sm text-[#161616] hover:bg-[#e5e5e5]"
                  >
                    Bare metal servers
                  </a>
                  <a
                    href="#"
                    className="block px-3 pl-9 py-2 text-sm text-[#161616] hover:bg-[#e5e5e5]"
                  >
                    Dedicated hosts
                  </a>
                  <a
                    href="#"
                    className="block px-3 pl-9 py-2 text-sm text-[#161616] hover:bg-[#e5e5e5]"
                  >
                    Placement groups
                  </a>
                  <a
                    href="#"
                    className="block px-3 pl-9 py-2 text-sm text-[#161616] hover:bg-[#e5e5e5]"
                  >
                    SSH keys
                  </a>
                  <a
                    href="#"
                    className="block px-3 pl-9 py-2 text-sm text-[#161616] hover:bg-[#e5e5e5]"
                  >
                    Images
                  </a>
                  <a
                    href="#"
                    className="block px-3 pl-9 py-2 text-sm text-[#161616] hover:bg-[#e5e5e5]"
                  >
                    Instance groups
                  </a>
                  <a
                    href="#"
                    className="block px-3 pl-9 py-2 text-sm text-[#161616] hover:bg-[#e5e5e5]"
                  >
                    Instance templates
                  </a>
                </div>
              )}
            </div>
         
            <div>
              <button
                onClick={() => setStorageExpanded(!storageExpanded)}
                className="flex items-center justify-between w-full px-3 py-2 text-sm hover:bg-[#e5e5e5] text-[#161616] group"
              >
                <div className="flex items-center gap-2">
                  <Database className="h-4 w-4 text-[#525252] group-hover:text-black" />
                  Storage
                </div>
                {storageExpanded ? (
                  <ChevronUp className="h-4 w-4 text-[#161616]" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-[#161616]" />
                )}
              </button>

              {storageExpanded && (
                <div className="mt-1 space-y-1">
                  <a
                    href="#"
                    className="block px-3 pl-9 py-2 text-sm text-[#161616] hover:bg-[#e5e5e5]"
                  >
                    Virtual server instances
                  </a>
                  <a
                    href="#"
                    className="block px-3 pl-9 py-2 text-sm text-[#161616] hover:bg-[#e5e5e5]"
                  >
                    Bare metal servers
                  </a>
                  <a
                    href="#"
                    className="block px-3 pl-9 py-2 text-sm text-[#161616] hover:bg-[#e5e5e5]"
                  >
                    Dedicated hosts
                  </a>
                  <a
                    href="#"
                    className="block px-3 pl-9 py-2 text-sm text-[#161616] hover:bg-[#e5e5e5]"
                  >
                    Placement groups
                  </a>
                  <a
                    href="#"
                    className="block px-3 pl-9 py-2 text-sm text-[#161616] hover:bg-[#e5e5e5]"
                  >
                    SSH keys
                  </a>
                  <a
                    href="#"
                    className="block px-3 pl-9 py-2 text-sm text-[#161616] hover:bg-[#e5e5e5]"
                  >
                    Images
                  </a>
                  <a
                    href="#"
                    className="block px-3 pl-9 py-2 text-sm text-[#161616] hover:bg-[#e5e5e5]"
                  >
                    Instance groups
                  </a>
                  <a
                    href="#"
                    className="block px-3 pl-9 py-2 text-sm text-[#161616] hover:bg-[#e5e5e5]"
                  >
                    Instance templates
                  </a>
                </div>
              )}
            </div>
            <a
              href="#"
              className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-[#e5e5e5] justify-between text-[#161616] group"
            >
              <div className="flex items-center gap-2">
                <Cloud className="h-4 w-4 text-[#525252] group-hover:text-black" />
                Classic Infrastructure
              </div>
              <ExternalLink className="h-3 w-3 opacity-70" />
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-[#e5e5e5] justify-between text-[#161616] group"
            >
              <div className="flex items-center gap-2">
                <Cpu className="h-4 w-4 text-[#525252] group-hover:text-black" />
                Power Virtual Server
              </div>
              <ExternalLink className="h-3 w-3 opacity-70" />
            </a>
            <hr />
            <a
              href="#"
              className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-[#e5e5e5] justify-between text-[#161616] group"
            >
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-[#525252] group-hover:text-black" />
                Docs
              </div>
              <ExternalLink className="h-3 w-3 opacity-70" />
            </a>

            {/* Related services expandable section */}
            <div>
              <button
                onClick={() =>
                  setRelatedServicesExpanded(!relatedServicesExpanded)
                }
                className="flex items-center justify-between w-full px-3 py-2 text-sm hover:bg-[#e5e5e5] text-[#161616] group"
              >
                <div className="flex items-center gap-2">
                  <Cloud className="h-4 w-4 text-[#525252] group-hover:text-black" />
                  <span>Related services</span>
                </div>
                {relatedServicesExpanded ? (
                  <ChevronUp className="h-4 w-4 text-[#161616]" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-[#161616]" />
                )}
              </button>
              {relatedServicesExpanded && (
                <div className="mt-1 space-y-1">
                  <a
                    href="#"
                    className="block px-3 pl-9 py-2 text-sm text-[#161616] hover:bg-[#e5e5e5]"
                  >
                    Virtual server instances
                  </a>
                  <a
                    href="#"
                    className="block px-3 pl-9 py-2 text-sm text-[#161616] hover:bg-[#e5e5e5]"
                  >
                    Bare metal servers
                  </a>
                  <a
                    href="#"
                    className="block px-3 pl-9 py-2 text-sm text-[#161616] hover:bg-[#e5e5e5]"
                  >
                    Dedicated hosts
                  </a>
                  <a
                    href="#"
                    className="block px-3 pl-9 py-2 text-sm text-[#161616] hover:bg-[#e5e5e5]"
                  >
                    Placement groups
                  </a>
                  <a
                    href="#"
                    className="block px-3 pl-9 py-2 text-sm text-[#161616] hover:bg-[#e5e5e5]"
                  >
                    SSH keys
                  </a>
                  <a
                    href="#"
                    className="block px-3 pl-9 py-2 text-sm text-[#161616] hover:bg-[#e5e5e5]"
                  >
                    Images
                  </a>
                  <a
                    href="#"
                    className="block px-3 pl-9 py-2 text-sm text-[#161616] hover:bg-[#e5e5e5]"
                  >
                    Instance groups
                  </a>
                  <a
                    href="#"
                    className="block px-3 pl-9 py-2 text-sm text-[#161616] hover:bg-[#e5e5e5]"
                  >
                    Instance templates
                  </a>
                </div>
              )}
            </div>
          </nav>

          <div className="bg-[#f4f4f4] border-t border-[#e0e0e0] h-12 flex items-center justify-end px-4 cursor-pointer hover:bg-[#e5e5e5]">
            <ChevronLeft className="size-4" />
          </div>
        </div>
      </aside>
    </>
  );
}
