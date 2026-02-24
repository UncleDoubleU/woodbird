import ImageGallery from '../ImageGallery/ImageGallery'
import { HeartIcon } from '@heroicons/react/16/solid'

function MainContent() {
     return (
          <main className='w-full pt-5 px-6 text-neutral-800'>
               <article className='flex h-screen justify-between items-center'>
                    <HeartIcon className='size-7 fill-neutral-800' />
                    <h1 className='text-neutral-800 font-bold text-center text-[2.75rem]/[2.5rem] md:text-[7rem]/[5.5rem] xl:text-[12rem]/[10rem] scale-y-175'>
                         BRAND<br />
                         MADE WITH<br />
                         HEART
                    </h1>
                    <HeartIcon className='size-7 fill-neutral-800' />
               </article>
               <ImageGallery />
               <h2>
                    Based on our<br />
                    Scandinavian and Asian<br />
                    Culture
               </h2>
               <article>
                    <img src="" alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dap.</p>
                    <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dap.</b></p>
                    <a href="mailto:webmaster@example.com">INFO@WOODBIRD.DK</a>
               </article>
          </main>
     )
}

export default MainContent
