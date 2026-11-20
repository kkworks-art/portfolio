import { Outlet, Link, useLocation } from "react-router";
import { Monitor, User } from "lucide-react";
import { motion } from "motion/react";
import backgroundImage from "figma:asset/bc29816a21c0b54d13762ba770f9fe4a436136d1.png";
import logoImage from "figma:asset/e636709c95f0e13da5115e252fe5b1ab6e282a75.png";

export function Layout() {
  const location = useLocation();

  const navItems = [
    { path: "/works", label: "WORKS", icon: Monitor },
    { path: "/about", label: "ABOUT", icon: User },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Background image for hero section */}
      <div 
        className="fixed inset-0 bg-cover bg-center opacity-50 lg:left-[170px] lg:w-[350px]"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[170px] bg-white border-r border-gray-200 flex-col items-center py-12 z-20">
        <Link to="/" className="mb-16">
          <motion.div 
            className="flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img src={logoImage} alt="Logo" className="w-20 h-20 mb-2" />
            <div className="text-xl tracking-wider text-gray-900">K.KOBAYASHI</div>
          </motion.div>
        </Link>

        <nav className="flex flex-col gap-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex flex-col items-center gap-2 group"
              >
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                    isActive(item.path)
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.div>
                <span className="text-xs tracking-wider text-gray-500 group-hover:text-gray-900 transition-colors">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 bg-white py-6 z-20 border-b border-gray-200">
        <Link to="/" className="flex flex-col items-center">
          <img src={logoImage} alt="Logo" className="w-16 h-16 mb-1" />
          <div className="text-lg tracking-wider text-gray-900">K.KOBAYASHI</div>
        </Link>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-20">
        <div className="flex justify-around items-center py-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex flex-col items-center gap-1"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    isActive(item.path)
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] tracking-wider text-gray-500">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 lg:ml-[170px] pt-32 lg:pt-0 pb-24 lg:pb-0">
        <Outlet />
      </main>
    </div>
  );
}