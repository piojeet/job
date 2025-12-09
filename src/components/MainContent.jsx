import { Workflow, Server, Zap, Copy } from 'lucide-react';

export function MainContent() {
  return (
    <main className="flex-1 overflow-y-auto">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-[#EDF5FF] px-6 py-12 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className='max-w-[450px]'>
              <h1 className="text-gray-900 mb-4 lg:text-4xl md:text-3xl text-2xl">
                Customized infrastructure for your unique workloads
              </h1>
              <p className="text-gray-600 mb-6">
                Provision your compute, network, and storage resources on a secure virtual private cloud.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md rounded-lg flex items-center justify-center">
                <img src="https://assets.ibm.com/is/image/ibm/data-fabric-leadspace:2x1?dpr=on%2C1&wid=1584&hei=792" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="px-6 py-8 md:px-12 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-gray-900 mb-6">Getting started</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
              <h3 className="text-gray-900 mb-3">
                Automate your network setup
              </h3>
              <p className="text-gray-600 text-sm mb-8">
                Use the Cloud foundation for VPC deployable architecture to automate your 3-tier network architecture.
              </p>
              <div className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded">
                <Workflow className="h-6 w-6 text-gray-700" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
              <h3 className="text-gray-900 mb-3">
                Looking for Classic Infrastructure?
              </h3>
              <p className="text-gray-600 text-sm mb-8">
                Access your classic virtual servers, bare metal servers, VMware, and supporting infrastructure in Classic Infrastructure.
              </p>
              <div className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded">
                <Server className="h-6 w-6 text-gray-700" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
              <h3 className="text-gray-900 mb-3">
                Deploy on Power infrastructure
              </h3>
              <p className="text-gray-600 text-sm mb-8">
                Use Power Virtual Server to leverage Power with the benefits of hybrid cloud computing.
              </p>
              <div className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded">
                <Zap className="h-6 w-6 text-gray-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Promotions Section */}
      <section className="px-6 py-8 md:px-12 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-gray-900 mb-6">Active promotions</h2>
          
          <div className="space-y-4">
            {/* Promotion 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="bg-gray-100 px-3 py-1 rounded text-sm">
                  BUYVPC
                </div>
                <p className="text-sm text-blue-600">
                  Get 60% off your Virtual Server for VPC for 12 months.
                </p>
              </div>
              <button 
                className="p-2 hover:bg-gray-100 rounded"
                aria-label="Copy promotion code"
              >
                <Copy className="h-4 w-4 text-gray-600" />
              </button>
            </div>

            {/* Promotion 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="bg-gray-100 px-3 py-1 rounded text-sm">
                  VPC1000
                </div>
                <p className="text-sm text-blue-600">
                  Get $1000 in credits to deploy Confidential Compute, networking, or storage.
                </p>
              </div>
              <button 
                className="p-2 hover:bg-gray-100 rounded"
                aria-label="Copy promotion code"
              >
                <Copy className="h-4 w-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
