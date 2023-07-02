"use client"

import * as React from "react"
import Link from "next/link"

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
                          <ListItem href="/#">
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
        <div className="grid grid-cols-2 gap-2 md:hidden">
        <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Menu</Button>
            </SheetTrigger>
            <SheetContent side={'left'}>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" value="Pedro Duarte" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input id="username" value="@peduarte" className="col-span-3" />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </header>
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



















        // {/* SEARCH SEARCH SEARCH */}
        // {showSearch ? (
        //   <div
        //     className="whats_overlay fixed w-screen bg-black h-screen z-10 bg-opacity-40 overflow-auto"
        //     onClick={(e) => {
        //       if (
        //         e.target.classList.contains("whats_overlay") || // using the `classList` property instead of `className`.
        //         e.target.parentElement.classList.contains("whats_overlay")
        //       ) {
        //         setShowSearch(false);
        //       }
        //     }}
        //   >
        //     <div className="bg-white bg-opacity-100">
        //       <div className="flex items-center p-3">
        //         <div className="mr-2">
        //           <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
        //         </div>
        //         <input
        //           type="text"
        //           className="flex-grow outline-none focus:ring-0 "
        //           placeholder="Search"
        //           value={searchTerm}
        //           onChange={(e) => setSearchTerm(e.target.value)}
        //         />
        //         <button
        //           className="ml-2 cursor-pointer"
        //           onClick={handleToggleSearch}
        //         >
        //           <XMarkIcon className="h-7 w-7 text-gray-500" />
        //         </button>
        //       </div>

        //       <div>
        //         <div className="w-full flex justify-between px-3 pt-3">
        //           <span className="text-xs text-gray-700">
        //             {resultLength} results
        //           </span>
        //           <a href="/#" className="text-xs text-gray-700">
        //             See all
        //           </a>
        //         </div>
        //         <hr />
        //         <div className="flex flex-col md:flex-row ">
        //           {searchResults.map(({ id, data }) => {
        //             const { name, image, originalPrice, reducedPrice } = data;
        //             return (
        //               <div
        //                 className="flex flex-row md:flex-col w-full md:w-fit items-center p-3 gap-3 hover:grayscale border-transparent border-b-2 hover:border-gray-100 cursor-pointer"
        //                 key={`search_${id}`}
        //               >
        //                 <Image className="w-16 md:w-24" ar="1" src={image} />
        //                 <div className="flex flex-col ">
        //                   <h3 className="font-bold ">{name}</h3>
        //                   <div>
        //                     <span className="text-base">
        //                       GH₵ {reducedPrice}
        //                     </span>
        //                     <span className="ml-4 text-xs line-through font-extralight text-gray-600">
        //                       GH₵{originalPrice}
        //                     </span>
        //                   </div>
        //                 </div>
        //               </div>
        //             );
        //           })}
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // ) : null}