'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { TypographyToggle } from './typography-toggle';

const navLinks = [
  { href: '/', label: 'Home', icon: 'home' },
  { href: '/get-started', label: 'Get Started', icon: 'auto_awesome' },
  { href: '/features', label: 'Features', icon: 'list' },
  { href: '/contact', label: 'Contact', icon: 'mail' },
];

export function FabMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-8 right-8 z-50">
            <div className="relative flex flex-col items-end gap-4">
                 <div
                    className={cn(
                        'flex items-center gap-3 rounded-full bg-primary-container pl-6 pr-4 py-2 text-on-primary-container shadow-lg transition-all duration-300 ease-in-out hover:bg-primary-container/80',
                        isOpen
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-4 opacity-0 pointer-events-none',
                        )}
                        style={{
                            transitionDelay: isOpen ? `${(navLinks.length) * 50}ms` : '0ms',
                            transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                        }}
                        aria-hidden={!isOpen}
                    >
                        <span className="material-symbols-outlined">text_fields</span>
                        <span className="font-medium text-label-large">Typography</span>
                        <TypographyToggle />
                    </div>
                 {navLinks.map((link, index) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                        'flex items-center gap-3 rounded-full bg-primary-container px-6 py-3 text-on-primary-container shadow-lg transition-all duration-300 ease-in-out hover:bg-primary-container/80',
                        isOpen
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-4 opacity-0 pointer-events-none',
                        )}
                        style={{
                            transitionDelay: isOpen ? `${(navLinks.length - 1 - index) * 50}ms` : '0ms',
                            transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                        }}
                        aria-hidden={!isOpen}
                        tabIndex={isOpen ? 0 : -1}
                        onClick={() => setIsOpen(false)}
                    >
                        <span className="material-symbols-outlined">{link.icon}</span>
                        <span className="font-medium text-label-large">{link.label}</span>
                    </Link>
                ))}
                <Button
                    onClick={() => setIsOpen(!isOpen)}
                    className="h-16 w-16 rounded-full bg-primary text-on-primary shadow-xl hover:bg-primary/90"
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation menu"
                    >
                    <span className="material-symbols-outlined text-4xl">{isOpen ? 'close' : 'menu'}</span>
                </Button>
            </div>
        </div>
    );
}
