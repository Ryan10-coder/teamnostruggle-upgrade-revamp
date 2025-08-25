import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useAreaCoordinator } from '@/hooks/useAreaCoordinator';
import { Menu, X, Users, Phone, FileText, LogOut, Shield } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { isAreaCoordinator } = useAreaCoordinator();

  const navigation = [
    { name: 'About Us', href: '#about' },
    { name: 'Membership', href: '#membership' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Registration', href: '#register' },
    { name: 'Staff Registration', href: '/admin/staff-registration', isRoute: true },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Team No Struggle</h1>
              <p className="text-xs text-muted-foreground">Welfare Group</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                {isAreaCoordinator && (
                  <Link to="/area-coordinator">
                    <Button variant="outline" size="sm">
                      <Shield className="h-4 w-4" />
                      Area Portal
                    </Button>
                  </Link>
                )}
                <span className="text-sm text-muted-foreground">
                  Welcome, {user.user_metadata?.first_name || user.email}
                </span>
                <Button variant="outline" size="sm" onClick={signOut}>
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <>
                <Button variant="outline" size="sm">
                  <Phone className="h-4 w-4" />
                  Contact
                </Button>
                <Link to="/auth">
                  <Button variant="hero" size="sm">
                    <FileText className="h-4 w-4" />
                    Join Now
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                {user ? (
                  <>
                    {isAreaCoordinator && (
                      <Link to="/area-coordinator" onClick={() => setIsMenuOpen(false)}>
                        <Button variant="outline" className="w-full">
                          <Shield className="h-4 w-4 mr-2" />
                          Area Portal
                        </Button>
                      </Link>
                    )}
                    <Button variant="outline" className="w-full" onClick={signOut}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outline" size="sm">
                      <Phone className="h-4 w-4" />
                      Contact
                    </Button>
                    <Link to="/auth">
                      <Button variant="hero" size="sm">
                        <FileText className="h-4 w-4" />
                        Join Now
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;