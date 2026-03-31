import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const footerLinks = {
  Products: [
    { label: "Floor Tiles", href: "/products" },
    { label: "Wall Tiles", href: "/products" },
    { label: "Outdoor Tiles", href: "/products" },
    { label: "Bathroom Collection", href: "/products" },
    { label: "Large Format Slabs", href: "/products" },
  ],
  Explore: [
    { label: "Heritage", href: "/about" },
    { label: "Finishes Guide", href: "/#finishes" }, // Still hash for home sub-sections
    { label: "Size Guide", href: "/products" },
    { label: "Download Catalogue", href: "/products#catalogs" },
    { label: "Become a Dealer", href: "/contact" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Motto Group", href: "https://www.mottogroup.in/" },
    { label: "Export Standards", href: "/about" },
    { label: "Certifications", href: "/about" },
    { label: "Press", href: "/about" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Top band */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6 w-fit">
              <span className="w-9 h-9 rounded-sm bg-gradient-to-br from-yellow-600 to-yellow-400 flex items-center justify-center">
                <span className="text-white font-display font-bold text-base">
                  M
                </span>
              </span>
              <div className="leading-tight">
                <p className="font-display font-bold text-white text-[15px] sm:text-lg tracking-tight leading-none uppercase">
                  MOTTO SIGNATURE
                </p>
                <p className="font-sans text-[8px] sm:text-[10px] font-medium tracking-[0.25em] text-slate-500 uppercase mt-0.5">
                  Tiles
                </p>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              An authorised reseller of Motto Group — bringing factory-direct
              architectural surfaces from Morbi & Surat to globally discerning
              projects.
            </p>

            {/* Contact */}
            <div className="mt-8 flex flex-col gap-3">
              <a
                href="tel:+919913142703"
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-yellow-400 transition-colors group w-fit"
              >
                <Phone size={14} className="text-yellow-500" />
                +91 99131 42703
              </a>
              <a
                href="mailto:vivekmottogroup@gmail.com"
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-yellow-400 transition-colors group w-fit"
              >
                <Mail size={14} className="text-yellow-500" />
                vivekmottogroup@gmail.com
              </a>
              <div className="flex items-center gap-2.5 text-sm text-slate-400 w-fit cursor-default">
                <MapPin size={14} className="text-yellow-500" />
                Based in Surat, Gujarat
              </div>
            </div>

            {/* Social */}
            <div className="mt-8 flex items-center gap-3">
              {[
                {
                  icon: FaInstagram,
                  label: "Instagram",
                  href: "https://www.instagram.com/mottogroup/",
                },
                {
                  icon: FaLinkedin,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/motto-group-india/",
                },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-yellow-500 hover:text-yellow-400 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-display font-semibold text-white text-xs tracking-widest uppercase mb-5">
                  {category}
                </h4>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("http") ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-slate-400 hover:text-white transition-colors duration-200 group flex items-center gap-1"
                        >
                          {link.label}{" "}
                          <ArrowUpRight
                            size={10}
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          />
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="text-sm text-slate-400 hover:text-white transition-colors duration-200 group flex items-center gap-1"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Motto Tiles. An authorised reseller of{" "}
          <a
            href="https://www.mottogroup.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-600 hover:text-yellow-400 transition-colors inline-flex items-center gap-0.5"
          >
            Motto Group <ArrowUpRight size={10} />
          </a>
        </p>
        <div className="flex items-center gap-5 text-xs text-slate-500">
          <Link to="#" className="hover:text-slate-300 transition-colors">
            Privacy Policy
          </Link>
          <Link to="#" className="hover:text-slate-300 transition-colors">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}
