import React from 'react'

const BlogHome = () => {
  return (
    <div className='py-2 bg-red-100 font-outfit'>
        <div className='max-w-4xl mx-auto bg-red-200 grid grid-cols-2'>
            BlogHome
            <article
                class="mx-auto relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                <img src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover"/>
                <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300"><time
                        datetime="2023-10-11" class="mr-8">Oct 11, 2023</time>
                    <div class="-ml-4 flex items-center gap-x-4"><svg viewBox="0 0 2 2"
                            class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                            <circle cx="1" cy="1" r="1"></circle>
                        </svg>
                        <div class="flex gap-x-2.5">
                            <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="" class="h-6 w-6 flex-none rounded-full bg-white/10"/>John
                        </div>
                    </div>
                </div>
                <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
                    <a href="/tech-blog/post1"><span class="absolute inset-0"></span>The Future of Artificial
                        Intelligence: Trends and Challenges</a>
                </h3>
            </article>
        </div>
    </div>
  )
}

export default BlogHome