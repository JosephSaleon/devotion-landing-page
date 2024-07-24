
// import type { JSX } from "solid-js"

import type { JSX } from "astro/jsx-runtime"

type Props = {
  title: string
  desc: string
  bg?: boolean
  svg: JSX.Element
  color: string
  square?: boolean
}

// const { title, desc, bg = true, svg, color } = Astro.props
const ModuleCard = ({title, desc, bg = false, svg, color, square}:Props) => {

  const BgTop = `h-52 flex flex-col justify-center items-center  rounded-t-xl ${bg && `bg-${color}`}`
  // const BgTop = `h-52 flex flex-col justify-center items-center  rounded-t-xl bg-gray-300`
  
  return (
// <!-- Card Blog -->

      // {/* <!-- Card --> */}
      <div class="specialCard group flex flex-col h-full border border-gray-200 shadow-sm rounded-xl dark:border-neutral-700 dark:shadow-neutral-700/70">
        <div class={BgTop}>
          <svg class="size-28" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            {square && <rect width="56" height="56" rx="10" fill="white" />}
            {svg}
           {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="-12 -12 48 48" fill="currentColor" class="size-6 text-purple-600">
              <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd" />
            </svg> */}
            
          </svg>
        </div>
        <div class="p-4 md:p-6">
          <span class={`block mb-1 text-xs font-semibold uppercase text-${color}`}>
            Module
          </span>
          <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
            {title}
          </h3>
          <p class="mt-3 text-gray-500 dark:text-neutral-500">
            {desc}
          </p>
        </div>
        {/* <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
          <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" href="#">
            Voir le module
          </a>
          <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" href="#">
            Voir tout ...
          </a>
        </div> */}
      </div>
      // {/* <!-- End Card --> */}
  
     
  

  )
}

export default ModuleCard