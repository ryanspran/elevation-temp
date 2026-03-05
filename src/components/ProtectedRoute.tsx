import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isAdmin, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <div className="text-secondary-foreground font-serif text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) return <Navigate to="/admin/login" replace />;
  
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-secondary-foreground mb-4">Access Denied</h1>
          <p className="text-secondary-foreground/60 mb-6">Your account does not have admin privileges.</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-gold text-navy font-semibold px-6 py-3 rounded hover:bg-gold-light transition-colors uppercase text-sm tracking-wider"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
