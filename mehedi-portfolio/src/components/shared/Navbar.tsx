"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu as MenuIcon, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

const menu = [
    { label: "Home", url: "/#home" },
    { label: "About", url: "/#about" },
    { label: "Skills", url: "/#skills" },
    { label: "Experience", url: "/#experience" },
    { label: "Projects", url: "/#projects" },
    { label: "Education", url: "/#education" },
    { label: "Contact", url: "/#contact" },
];

const Navbar = () => {
    const { setTheme } = useTheme();
    const [active, setActive] = useState("home");
    const [open, setOpen] = useState(false);

    // when true, the IntersectionObserver should not fight
    // the scroll/URL state we're setting manually from a click
    const isClickScrolling = useRef(false);
    const clickScrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(
        null,
    );

    // scroll-spy: highlight the menu item for the section in view,
    // AND keep the URL hash in sync with it
    useEffect(() => {
        const sections = menu
            .map((item) => document.getElementById(item.url.replace("/#", "")))
            .filter((el): el is HTMLElement => !!el);

        const observer = new IntersectionObserver(
            (entries) => {
                if (isClickScrolling.current) return; // ignore while we're click-scrolling

                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                        // keep url hash synced with whatever is actually on screen
                        const newHash = `#${entry.target.id}`;
                        if (window.location.hash !== newHash) {
                            window.history.replaceState(null, "", newHash);
                        }
                    }
                });
            },
            { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        url: string,
        onNavigate?: () => void,
    ) => {
        e.preventDefault();
        const id = url.replace("/#", "");
        const target = document.getElementById(id);
        if (!target) return;

        // pause the observer's control over active/url during the scroll
        isClickScrolling.current = true;
        if (clickScrollTimeout.current)
            clearTimeout(clickScrollTimeout.current);

        setActive(id);
        // pushState (not replace) so this counts as an intentional nav step
        window.history.pushState(null, "", `#${id}`);

        target.scrollIntoView({ behavior: "smooth", block: "start" });

        // resume observer control once the smooth scroll has settled
        clickScrollTimeout.current = setTimeout(() => {
            isClickScrolling.current = false;
        }, 700); // tune to roughly match your smooth-scroll duration

        onNavigate?.();
    };

    const NavLinks = ({
        onNavigate,
        mobile = false,
    }: {
        onNavigate?: () => void;
        mobile?: boolean;
    }) => (
        <>
            {menu.map((item) => {
                const id = item.url.replace("/#", "");
                const isActive = active === id;
                return (
                    <Link
                        key={item.url}
                        href={item.url}
                        onClick={(e) => handleNavClick(e, item.url, onNavigate)}
                        className={cn(
                            "text-sm font-medium transition-colors",
                            mobile
                                ? "block rounded-md px-3 py-2"
                                : "hover:border-border px-4 py-1 rounded-full border border-transparent",
                            isActive
                                ? mobile
                                    ? "bg-primary/10 text-primary"
                                    : "text-primary bg-secondary"
                                : "text-muted-foreground hover:text-primary",
                        )}
                    >
                        {item.label}
                    </Link>
                );
            })}
        </>
    );

    return (
        <div className="py-6 sticky top-0 bg-background z-10">
            <nav className="flex justify-between items-center px-4 md:px-6 max-w-6xl mxl:px-4 mxl:max-w-7xl mx-auto">
                <div className="font-semibold text-lg">
                    {"< "}Mehedi{" />"}
                </div>

                <div className="hidden lg:flex items-center gap-1">
                    <NavLinks />
                </div>

                <div className="flex items-center gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="inline-flex items-center justify-center rounded-full border border-input bg-background p-2 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                            <span className="sr-only">Toggle theme</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" sideOffset={6}>
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => setTheme("system")}
                            >
                                System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <div className="lg:hidden">
                        <Drawer
                            open={open}
                            onOpenChange={setOpen}
                            swipeDirection="right"
                        >
                            <DrawerTrigger
                                render={
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full"
                                    />
                                }
                            >
                                <MenuIcon className="h-[1.2rem] w-[1.2rem]" />
                                <span className="sr-only">Open menu</span>
                            </DrawerTrigger>
                            <DrawerContent className="h-full w-[75%] max-w-xs">
                                <DrawerHeader className="flex flex-row items-center justify-between">
                                    <DrawerTitle>Menu</DrawerTitle>
                                    <DrawerClose
                                        render={
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                            />
                                        }
                                    >
                                        <X className="h-[1.2rem] w-[1.2rem]" />
                                        <span className="sr-only">
                                            Close menu
                                        </span>
                                    </DrawerClose>
                                </DrawerHeader>
                                <div className="flex flex-col gap-1 px-6 py-4">
                                    <NavLinks
                                        mobile
                                        onNavigate={() => setOpen(false)}
                                    />
                                </div>
                            </DrawerContent>
                        </Drawer>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
