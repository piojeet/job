import { Workflow, Server, Zap, Copy, Cloud, Settings } from 'lucide-react';

export function MainContent() {
  return (
    <main className="flex-1 overflow-y-auto bg-[#f4f4f4]">
      {/* Hero Section */}
      <section className=" px-6 py-12 md:px-12">
        <div className="mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className='max-w-[500px] mx-auto md:mx-0 text-center md:text-left'>
              <h1 className="text-gray-900 mb-6 lg:text-[42px] lg:leading-[1.2] text-3xl font-light">
                Customized infrastructure for your unique workloads
              </h1>
              <p className="text-[#161616] sm:text-xl font-light">
                Provision your compute, network, and storage resources on a secure virtual private cloud.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-2xl rounded-lg flex items-center justify-center">
                <img src="https://cms.anonymous-proxies.net/media/datacenter.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="px-6 py-8 md:px-12">
        <div className="mx-auto">
          <h2 className="text-gray-900 mb-6 text-2xl">Getting started</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white min-h-[220px] flex flex-col justify-between">
              <div>
              <h3 className="text-gray-900 mb-3 font-semibold">
                Automate your network setup
              </h3>
              <p className="text-gray-600 text-sm mb-8">
                Use the Cloud foundation for VPC deployable architecture to automate your 3-tier network architecture.
              </p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded">
                <Workflow className="h-6 w-6 text-gray-700" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white min-h-[220px] flex flex-col justify-between">
              <div>
              <h3 className="text-gray-900 mb-3 font-semibold">
                Looking for Classic Infrastructure?
              </h3>
              <p className="text-gray-600 text-sm mb-8">
                Access your classic virtual servers, bare metal servers, VMware, and supporting infrastructure in Classic Infrastructure.
              </p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded">
                <Cloud className="h-6 w-6 text-gray-700" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white min-h-[220px] flex flex-col justify-between">
              <div>
              <h3 className="text-gray-900 mb-3 font-semibold">
                Deploy on Power infrastructure
              </h3>
              <p className="text-gray-600 text-sm mb-8">
                Use Power Virtual Server to leverage Power with the benefits of hybrid cloud computing.
              </p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded">
                <Settings className="h-6 w-6 text-gray-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Promotions Section */}
      <section className="px-6 py-8 md:px-12">
        <div className="mx-auto bg-white p-6 rounded-md">
          <h2 className="text-gray-900 mb-6 text-lg font-semibold">Active promotions</h2>
          
          <div className="space-y-4">
            {/* Promotion 1 */}
            <div className="border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-[#f4f4f4] hover:bg-[#e8e8e8] transition-colors">
              <div className="flex sm:items-center gap-3 flex-1 flex-col-reverse sm:flex-row w-full">
                <button className="bg-[#e0e0e0] px-3 py-2 text-sm text-[#161616] flex items-center gap-3 font-mono sm:min-w-[140px] justify-between group cursor-pointer hover:bg-[#d1d1d1] rounded w-full sm:w-auto" aria-label="Copy promotion code">
                  BUYVPC
                  <Copy className="h-4 w-4 text-gray-600" />
                </button>
                <p className="text-sm text-blue-600">
                  Get 60% off your Virtual Server for VPC for 12 months.
                </p>
              </div>
            </div>

            {/* Promotion 2 */}
            <div className="border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-[#f4f4f4] hover:bg-[#e8e8e8] transition-colors">
              <div className="flex sm:items-center gap-3 flex-1 flex-col-reverse sm:flex-row w-full">
                <button className="bg-[#e0e0e0] px-3 py-2 text-sm text-[#161616] flex items-center gap-3 font-mono sm:min-w-[140px] justify-between group cursor-pointer hover:bg-[#d1d1d1] rounded w-full sm:w-auto" aria-label="Copy promotion code">
                  VPC1000
                  <Copy className="h-4 w-4 text-gray-600" />
                </button>
                <p className="text-sm text-blue-600">
                  Get $1000 in credits to deploy Confidential Compute, networking, or storage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
