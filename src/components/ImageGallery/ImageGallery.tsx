

function ImageGallery() {
     const imageList = [
          {
               id: 1,
               imgSrc: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
               imgAlt: "Contemporary Scandinavian fashion editorial"
          },
          {
               id: 2,
               imgSrc: "https://images.pexels.com/photos/2983463/pexels-photo-2983463.jpeg",
               imgAlt: "Editorial fashion model portrait"
          },
          {
               id: 3,
               imgSrc: "https://images.pexels.com/photos/2983461/pexels-photo-2983461.jpeg",
               imgAlt: "High fashion editorial runway look"
          },
          {
               id: 4,
               imgSrc: "https://images.pexels.com/photos/2983467/pexels-photo-2983467.jpeg",
               imgAlt: "Urban editorial fashion photography"
          },
          {
               id: 5,
               imgSrc: "https://cdn.pixabay.com/photo/2025/03/12/00/00/fashion-editorial-9464921_1280.jpg",
               imgAlt: "Fashion editorial photography modern style"
          },
          {
               id: 6,
               imgSrc: "https://images.pexels.com/photos/2983470/pexels-photo-2983470.jpeg",
               imgAlt: "Japanese inspired editorial fashion"
          },
          {
               id: 7,
               imgSrc: "https://images.pexels.com/photos/2983462/pexels-photo-2983462.jpeg",
               imgAlt: "Contemporary fashion editorial portrait"
          },
          {
               id: 8,
               imgSrc: "https://images.pexels.com/photos/2983465/pexels-photo-2983465.jpeg",
               imgAlt: "Editorial fashion artistic pose"
          },
          {
               id: 9,
               imgSrc: "https://images.pexels.com/photos/2983472/pexels-photo-2983472.jpeg",
               imgAlt: "Editorial fashion scene outdoors"
          },
          {
               id: 10,
               imgSrc: "https://images.pexels.com/photos/2983469/pexels-photo-2983469.jpeg",
               imgAlt: "Studio fashion editorial look"
          }
     ];

     return (
          <article className="grid grid-cols-[12] grid-rows-2 w-full bg-red-400">
               {imageList.length === 10 ? imageList.map(pic =>
                    <div>
                         <img
                              key={pic.id}
                              src={pic.imgSrc}
                              alt={pic.imgAlt}
                              width={300}

                         />
                    </div>
               ) : <p>images are loading</p>}
          </article>
     )
}

export default ImageGallery
