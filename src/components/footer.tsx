"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-lg mb-4">Girls Accessories Hub</h3>
            <p className="text-background/80 text-sm">
              Discover premium ladies bags that combine style, quality, and
              timeless elegance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  All Bags
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Totes & Satchels
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Crossbodies
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Clutches
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-semibold mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <Link
                href="#"
                className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/80">
            © 2025 Girls Accessories Hub. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="#"
              className="text-background/80 hover:text-background transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-background/80 hover:text-background transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
