
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import { toast } from "sonner";

export function KebabMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const showToast = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.info("This feature is coming soon!");
    setIsOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="relative" ref={menuRef}>
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
        <MoreVertical className="h-5 w-5" />
        <span className="sr-only">More</span>
      </Button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <a
            href="#about"
            className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
            onClick={handleAboutClick}
          >
            About Us
          </a>
          <a
            href="#"
            onClick={showToast}
            className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
          >
            Contact Us
          </a>
          <a
            href="#"
            onClick={showToast}
            className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
          >
            Give Feedback
          </a>
        </div>
      )}
    </div>
  );
}