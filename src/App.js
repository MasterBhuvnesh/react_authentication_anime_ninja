"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./components/Profile";
import icon from "./images/icon.png";

const navigation = [
  { name: "Portfolio", href: "https://masterbhuvnesh.github.io/portfolio/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/bhuvneshverma/" },
  { name: "Github", href: "https://github.com/MasterBhuvnesh" },
  {
    name: "Code",
    href: "https://github.com/MasterBhuvnesh/react_authentication_anime_ninja",
  },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth0();
  return (
    <div className="bg-white font-poppins ">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <span className="sr-only">Auth0 - Template</span>
            <img
              alt="Auth0 - Authentication"
              src={icon}
              className="h-8 w-auto"
            />
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="h-6 w-6"
              />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
            <div className="text-sm font-semibold leading-6 text-gray-900 font-poppins ">
              <LoginButton />
              <LogoutButton />
            </div>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <span className="sr-only">Auth0 - Template</span>
              <img
                alt="Auth0 - Authentication"
                src={icon}
                className="h-8 w-auto"
              />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon
                  aria-hidden="true"
                  className="h-6 w-6"
                />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-gray-900 hover:bg-gray-50 font-poppins"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <div className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-normal leading-7 text-gray-900 hover:bg-gray-50 font-poppins">
                    <LoginButton />
                    <LogoutButton />
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      {isAuthenticated ? (
        <Profile />
      ) : (
        <div class="overflow-hidden bg-white py-24 sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div class="lg:pr-8 lg:pt-4">
                <div class="lg:max-w-lg">
                  <h2 class="text-base font-semibold leading-7 text-indigo-600">
                    Bhuvnesh Verma
                  </h2>
                  <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    The Magic of Anime
                  </p>
                  <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    <div class="relative pl-9">
                      <dt class="inline font-semibold text-gray-900  text-lg pr-4">
                        Anime -
                      </dt>
                      <dd class="inline">
                        Japanese animation brings worlds to life 🎨✨ with
                        stunning art, unforgettable characters, and a mix of
                        genres that keeps you on the edge of your seat! 🌟 Dive
                        into classics like Naruto, Attack on Titan, and My Hero
                        Academia!
                      </dd>
                    </div>
                    <div class="relative pl-9">
                      <dt class="inline font-semibold text-gray-900 text-lg pr-4">
                        Manga -
                      </dt>
                      <dd class="inline">
                        Japanese manga 📚✨ are graphic novels that capture
                        hearts with their black-and-white artistry and
                        right-to-left storytelling! 🌟 Dive into epic series
                        like One Piece and Demon Slayer that inspire incredible
                        anime adaptations!
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <img
                src="https://i.pinimg.com/originals/dd/9d/3d/dd9d3db28020faecfec325982ed24227.png"
                alt="Product screenshot"
                class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width="2432"
                height="1442"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
