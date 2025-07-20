<template>
  <section class="font-be-vietnam bg-dark-1 h-screen">
    <nav class="px-4 mx-auto max-w-screen-2xl lg:px-24 lg:pt-7 pt-5">
      <div class="flex flex-col w-full lg:flex-row lg:items-center gap-5 divide-gray-700 lg:divide-x">
        <div class="flex items-center justify-between flex-none">
          <div class="flex items-center gap-2 text-xl text-white font-bold">
            <AppBaseSvg name="icon-checkmark" />
            Apiiyu.
          </div>
          <div>
            <button class="block p-1 outline-none lg:hidden mobile-menu-button" data-target="#navigation">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-white w-7 h-7"
                x-show="!showMenu"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path>
                <path
                  stroke-linecap="round"
                  class="hidden w-7 h-7"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div id="navigation" class="flex w-full mx-auto mobile-menu lg:block">
          <div
            class="flex flex-col items-baseline justify-between mx-auto mt-6 lg:flex-row lg:items-center lg:mt-0"
          >
            <div class="flex flex-col w-full text-base font-normal text-white lg:flex-row lg:w-max lg:pl-4">
              <a href="#" class="py-3 pl-2 mx-2 lg:mr-9 lg:pl-0">Pricing</a>
              <a href="#" class="py-3 pl-2 mx-2 lg:mr-9 lg:pl-0">Features</a>
              <a href="#" class="py-3 pl-2 mx-2 lg:mr-9 lg:pl-0">Showcase</a>
              <a href="#" class="py-3 pl-2 mx-2 lg:mr-9 lg:pl-0">Tools</a>
            </div>
            <div class="flex flex-col lg:flex-row gap-4 lg:gap-7 w-full px-3 mt-4 lg:mt-0 lg:w-max lg:px-0">
              <a
                href="/authentication/login"
                class="w-full lg:w-auto px-5 py-3 text-center rounded-lg flex lg:mx-auto bg-transparent transition ease-out duration-200 hover:bg-white hover:bg-opacity-30"
              >
                <span class="text-base w-full font-semibold text-white">Sign In</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <main class="py-20 px-4 mx-auto max-w-screen-2xl lg:px-24">
      <div class="grid grid-cols-12 items-center justify-center">
        <div class="col-span-12 md:col-span-5 lg:col-span-6">
          <div>
            <div class="headline font-bold text-4xl lg:text-5xl text-white leading-normal lg:leading-snug">
              Learn Code From <br class="d-none md:d-block" />
              The Expert.
            </div>
            <div class="mt-5 mb-9">
              <p class="font-normal text-sm lg:text-base text-white leading-7">
                No more wasting time from browsing around
                <br class="d-none lg:d-block" />
                just follow our best guidance in 2022
              </p>
            </div>
            <div class="flex items-center gap-7">
              <a href="#" class="py-3 px-5 rounded-lg bg-champ-green">
                <span class="text-base text-center font-semibold text-dark-2">Get Started</span>
              </a>
              <a
                href="#"
                class="py-3 px-5 rounded-lg bg-transparent transition ease-out duration-200 hover:bg-white hover:bg-opacity-30"
              >
                <span class="text-tile-grey font-normal underline text-base">Watch Stories</span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-span-12 md:col-span-7 lg:col-span-6 lg:mt-0 mt-14">
          <img src="@/app/assets/images/hero.png" alt="headerly-kodechamp" />
        </div>
      </div>
    </main>
  </section>
</template>
