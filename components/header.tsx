"use client"

import * as React from "react"
import Link from "next/link"
import { Fragment, useEffect, useState } from "react";

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "@/app/components/Image"

import { Separator } from "@/components/ui/separator"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { getAllProducts } from "@/app/firebase/firestore/getData";
import { filterItemsBySubtext } from "@/utils/productFuctions";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]




export function Header() {
  return (
    <>
      <header className="border-b">
        {/* DESKTOP DESKTOP DESKTOP DESKTOP */}
        {/* Banner */}
        <div className="flex justify-center bg-black">
          <small className="text-sm text-white my-3 font-medium leading-none">Announcement bar</small>
        </div>
        <div className="w-[90%] m-auto hidden md:block">
          <div className="flex items-center justify-between">
            <div>
              {/* Logo */}
              <h1>Logo</h1>
            </div>
            <div>
              {/* Nav */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Men</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="flex p-4">
                        <div className="flex flex-col gap-3 w-[280px]">
                          <h4 className="scroll-m-20 uppercase text-base font-semibold tracking-tight">
                            Shop categories
                          </h4>
                          <ul className="flex flex-wrap gap-3">
                            <ListItem href="#">
                              Oxfords
                            </ListItem>
                            <ListItem href="#">
                              Loafer
                            </ListItem>
                            <ListItem href="#">
                              Sandals
                            </ListItem>
                            <ListItem href="#">
                              Brogues
                            </ListItem>
                            <ListItem href="#">
                              Slippers
                            </ListItem>
                            <ListItem href="#">
                              Crocs
                            </ListItem>
                            <ListItem href="#">
                              Sneakers
                            </ListItem>
                          </ul>
                        </div>
                        <div className="flex gap-2">
                          <div>
                            <Image className="w-16 md:w-48" ar={'1'}src={'./assets/images/herosection.jpg'} />
                          </div>
                          <div className="flex flex-col">
                            <Image className="w-16 md:w-48" ar={'1'}src={'./assets/images/herosection.jpg'} />
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Women</NavigationMenuTrigger>
                    <NavigationMenuContent>
                    <div className="flex p-4">
                        <div className="flex flex-col gap-3 w-[280px]">
                          <h4 className="scroll-m-20 uppercase text-base font-semibold tracking-tight">
                            Shop categories
                          </h4>
                          <ul className="flex flex-wrap gap-3">
                          <ListItem href="#">
                            Heels
                          </ListItem>
                          <ListItem href="#">
                            slipper Heels
                          </ListItem>
                          <ListItem href="#">
                            Special ZARA collections
                          </ListItem>
                          <ListItem href="#">
                            Crocs
                          </ListItem>
                          <ListItem href="#">
                            Flats
                          </ListItem>
                          <ListItem href="#">
                            Sandals
                          </ListItem>
                          </ul>
                        </div>
                        <div className="flex gap-2">
                          <div>
                            <Image className="w-16 md:w-48" ar={'1'}src={'./assets/images/herosection.jpg'} />
                          </div>
                          <div className="flex flex-col">
                            <Image className="w-16 md:w-48" ar={'1'}src={'./assets/images/herosection.jpg'} />
                          </div>
                        </div>
                      </div>
                      
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Discover
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div>
              {/* Search & Bag */}
              <h1>Search</h1>
              <h1>Bag</h1>
            </div>
          </div>
        </div>
        {/* MOBILE MOBILE MOBILE MOBILE */}
        <div className="flex items-center justify-between gap-2 md:hidden">
          <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost">Menu</Button>
              </SheetTrigger>
              <SheetContent side={'left'}>
                <Tabs defaultValue="men" className="w-full mt-12">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="women">Women</TabsTrigger>
                    <TabsTrigger value="men">Men</TabsTrigger>
                  </TabsList>

                  <TabsContent value="women">
                    <div>
                      <div className="grid grid-cols-2 justify-center gap-2">
                        <div>
                          <Image className="" ar={'1'}src={'./assets/images/herosection.jpg'} />
                        </div>
                        <div>
                          <Image className="" ar={'1'}src={'./assets/images/herosection.jpg'} />
                        </div>
                      </div>
                      <div className="text-sm">
                        <Separator className="my-4" />
                        <h4 className="text-sm font-medium leading-none uppercase">Shop categories</h4>
                        <ul className="flex my-3 flex-col gap-2">
                          <li>
                            <a href="#">
                              Heels
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              slipper Heels
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Special ZARA collections
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Crocs
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Flats
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Sandals
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="men">
                      <div className="text-sm">
                        <div className="grid grid-cols-2 justify-center gap-2">
                          <div>
                            <Image className="" ar={'1'}src={'./assets/images/herosection.jpg'} />
                          </div>
                          <div className="flex flex-col">
                            <Image className="" ar={'1'}src={'./assets/images/herosection.jpg'} />
                          </div>
                        </div>
                        <Separator className="my-4" />
                        <div>
                          <h4 className="text-sm font-medium leading-none uppercase">Shop categories</h4>
                          <ul className="flex my-3 flex-col gap-2">
                            <li>
                              <a href="#">
                                Oxfords
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Sandals
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Crocs
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Sneakers
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Slippers
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Brogues
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                  </TabsContent>
                </Tabs>
                <Separator className="my-4" />
                <h4 className="scroll-m-20 uppercase text-sm font-semibold tracking-tight">
                  Discover
                </h4>
                <ul className="flex my-3 flex-col gap-2">
                  <li>
                    <a href="#">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Faq
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Contact us
                    </a>
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
            <div>Logo</div>
            <div className="flex gap-4">
              <div>Search</div>
              <div>Bag</div>
            </div>
        </div>
      </header>
      
        {/* SEARCH SEARCH SEARCH */}
        {/* {showSearch ? (
          <div
            className="whats_overlay fixed w-screen bg-black h-screen z-10 bg-opacity-40 overflow-auto"
            onClick={(e) => {
              if (
                e.target.classList.contains("whats_overlay") || // using the `classList` property instead of `className`.
                e.target.parentElement.classList.contains("whats_overlay")
              ) {
                setShowSearch(false);
              }
            }}
          >
            <div className="bg-white bg-opacity-100">
              <div className="flex items-center p-3">
                <div className="mr-2">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  className="flex-grow outline-none focus:ring-0 "
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  className="ml-2 cursor-pointer"
                  onClick={handleToggleSearch}
                >
                  <XMarkIcon className="h-7 w-7 text-gray-500" />
                </button>
              </div>

              <div>
                <div className="w-full flex justify-between px-3 pt-3">
                  <span className="text-xs text-gray-700">
                    {resultLength} results
                  </span>
                  <a href="/#" className="text-xs text-gray-700">
                    See all
                  </a>
                </div>
                <hr />
                <div className="flex flex-col md:flex-row ">
                  {searchResults.map(({ id, data }) => {
                    const { name, image, originalPrice, reducedPrice } = data;
                    return (
                      <div
                        className="flex flex-row md:flex-col w-full md:w-fit items-center p-3 gap-3 hover:grayscale border-transparent border-b-2 hover:border-gray-100 cursor-pointer"
                        key={`search_${id}`}
                      >
                        <Image className="w-16 md:w-24" ar="1" src={image} />
                        <div className="flex flex-col ">
                          <h3 className="font-bold ">{name}</h3>
                          <div>
                            <span className="text-base">
                              GH₵ {reducedPrice}
                            </span>
                            <span className="ml-4 text-xs line-through font-extralight text-gray-600">
                              GH₵{originalPrice}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : null} */}
    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          {/* <div className="text-sm font-medium leading-none">{title}</div> */}
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground hover:underline">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


















