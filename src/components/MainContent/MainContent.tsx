import ImageGallery from '../ImageGallery/ImageGallery'

function MainContent() {
     return (
          <main>
               <i>icon 1</i>
               <h1>
                    BRAND<br />
                    MADE WITH<br />
                    HEART
               </h1>
               <i>icon 2</i>
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
