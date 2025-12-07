import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="bg-base-100/80 border-b border-base-300 fixed w-full top-0 z-40 
      backdrop-blur-lg transition-all duration-300 shadow-sm"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          
          {/* Logo Section */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all group">
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <MessageSquare className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h1 className="text-lg font-bold tracking-tight text-base-content">NYDLC</h1>
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            
            {/* Settings Link */}
            <Link
              to={"/settings"}
              className={`
              btn btn-sm btn-ghost gap-2 transition-all duration-200 hover:bg-base-200
              `}
            >
              <Settings className="w-4 h-4 text-base-content/70" />
              <span className="hidden sm:inline font-medium">Settings</span>
            </Link>

            {authUser && (
              <>
                {/* Profile Link */}
                <Link to={"/profile"} className="btn btn-sm btn-ghost gap-2 transition-all duration-200 hover:bg-base-200">
                  <User className="size-4 text-base-content/70" />
                  <span className="hidden sm:inline font-medium">Profile</span>
                </Link>

                {/* Logout Button */}
                <button 
                  className="btn btn-sm btn-ghost gap-2 transition-all duration-200 hover:bg-error/10 hover:text-error" 
                  onClick={logout}
                >
                  <LogOut className="size-4" />
                  <span className="hidden sm:inline font-medium">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;