import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const socials = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-10">
      <div className="container mx-auto px-4 text-center space-y-6">
        <p className="text-sm uppercase tracking-widest text-primary-foreground/60">Connect with us</p>
        <div className="flex justify-center gap-5">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-11 h-11 rounded-full bg-primary-foreground/10 hover:bg-primary flex items-center justify-center transition-colors duration-200"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
        <div className="border-t border-primary-foreground/10 pt-6">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Quick Bites. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
