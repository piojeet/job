import { Menu, Search, Bell, HelpCircle, Grid3x3, Maximize2, User } from 'lucide-react';

const Header = ({ onMenuClick }) => {
    return (
        <header className="flex h-12 items-center justify-between border-b border-gray-700 bg-[#161616] text-white">
            <div className="flex h-full">
                <button
                    onClick={onMenuClick}
                    className="hover:bg-[#353535] w-12 flex items-center justify-center"
                    aria-label="Toggle menu"
                >
                    <Menu className="h-5 w-5" />
                </button>
                <div className="flex items-center gap-2 border-l border-gray-700 pl-4">
                    <span className="text-sm"><strong>IBM</strong> Cloud</span>
                </div>
            </div>

            <div className="hidden md:flex flex-1 max-w-2xl mx-4">
                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Search resources and products..."
                        className="w-full bg-[#262626] border border-gray-600 rounded px-3 py-1.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
            </div>

            <div className="flex h-full select-none">
                <span className="hidden lg:inline text-sm text-gray-300 cursor-pointer px-4 hover:bg-[#353535] content-center">Catalog</span>
                <span className="hidden lg:inline-flex text-sm text-gray-300 cursor-pointer content-center px-4 hover:bg-[#353535] justify-center items-center gap-2">Manage <span class="text-[10px]">▼</span></span>
                <span className="hidden xl:inline text-sm text-gray-300 cursor-pointer content-center px-4 hover:bg-[#353535]">$148466 - William Chr...</span>
                <button className="hover:bg-[#353535] px-4 cursor-pointer border-l border-gray-700" aria-label="Help">
                    <HelpCircle className="size-[18px]" />
                </button>
                <button className="hover:bg-[#353535] px-4 cursor-pointer" aria-label="Grid">
                    <Grid3x3 className="size-[18px]" />
                </button>
                <button className="hover:bg-[#353535] px-4 cursor-pointer" aria-label="Maximize">
                    <Maximize2 className="size-[18px]" />
                </button>
                <button className="hover:bg-[#353535] px-4 relative cursor-pointer" aria-label="Notifications">
                    <Bell className="size-[18px]" />
                    <span className="absolute top-2.5 right-2.5 h-1.5 w-1.5 bg-red-500 rounded-full"></span>
                </button>
                <button className="hover:bg-[#353535] px-4 cursor-pointer" aria-label="User">
                    <User className="size-[18px]" />
                </button>
            </div>
        </header>
    );
}

export default Header