"use client";

import { useEffect, useState } from "react";
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
    // { label: "Services", url: "/#services" },
    { label: "Education", url: "/#education" },
    { label: "Contact", url: "/#contact" },
];

const Navbar = () => {
    const { setTheme } = useTheme();
    const [active, setActive] = useState("home");
    const [open, setOpen] = useState(false);

    // scroll-spy: highlight the menu item for the section in view
    useEffect(() => {
        const sections = menu
            .map((item) => document.getElementById(item.url.replace("/#", "")))
            .filter((el): el is HTMLElement => !!el);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

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
                        onClick={onNavigate}
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

                {/* desktop menu */}
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

                    {/* mobile drawer */}
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
