

function ImageGallery() {
     const imageList = [
          {
               id: 1,
               imgSrc: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
               imgAlt: "Contemporary Scandinavian fashion editorial",
               colSpan: "1",
               imgRow: 1,
               rowSpan: 2
          },
          {
               id: 2,
               imgSrc: "https://images.pexels.com/photos/2983463/pexels-photo-2983463.jpeg",
               imgAlt: "Editorial fashion model portrait",
               colSpan: "2",
               imgRow: 1,
               rowSpan: 3
          },
          {
               id: 3,
               imgSrc: "https://images.pexels.com/photos/2983461/pexels-photo-2983461.jpeg",
               imgAlt: "High fashion editorial runway look",
               colSpan: "1",
               imgRow: 1,
               rowSpan: 1
          },
          {
               id: 4,
               imgSrc: "https://images.pexels.com/photos/2983467/pexels-photo-2983467.jpeg",
               imgAlt: "Urban editorial fashion photography",
               colSpan: "4",
               imgRow: 1,
               rowSpan: 1
          },
          {
               id: 5,
               imgSrc: "https://cdn.pixabay.com/photo/2025/03/12/00/00/fashion-editorial-9464921_1280.jpg",
               imgAlt: "Fashion editorial photography modern style",
               colSpan: "1",
               imgRow: 1,
               rowSpan: 1
          },
          {
               id: 6,
               imgSrc: "https://images.pexels.com/photos/2983470/pexels-photo-2983470.jpeg",
               imgAlt: "Japanese inspired editorial fashion",
               colSpan: "2",
               imgRow: 1,
               rowSpan: 3
          },
          {
               id: 7,
               imgSrc: "https://images.pexels.com/photos/2983462/pexels-photo-2983462.jpeg",
               imgAlt: "Contemporary fashion editorial portrait",
               colSpan: "1",
               imgRow: 1,
               rowSpan: 2
          },
          {
               id: 8,
               imgSrc: "https://images.pexels.com/photos/2983465/pexels-photo-2983465.jpeg",
               imgAlt: "Editorial fashion artistic pose",
               colSpan: "1",
               imgRow: 2,
               rowSpan: 3
          },
          {
               id: 9,
               imgSrc: "https://images.pexels.com/photos/2983472/pexels-photo-2983472.jpeg",
               imgAlt: "Editorial fashion scene outdoors",
               colSpan: "2",
               imgRow: 2,
               rowSpan: 4
          },
          {
               id: 10,
               imgSrc: "https://images.pexels.com/photos/2983469/pexels-photo-2983469.jpeg",
               imgAlt: "Studio fashion editorial look",
               colSpan: "1",
               imgRow: 2,
               rowSpan: 3
          }
     ];

     return (
          <article className="grid grid-cols-[1.5fr_2.25fr_1fr_4fr_1fr_2.25fr_1.5fr] grid-rows-5 gap-3 w-full bg-red-400 h-[35rem] justify-center">
               {imageList.length === 10 ? imageList.map(pic =>
                    <div style={{

                         gridRow: `span ${pic.rowSpan}`
                    }}>
                         <img
                              key={pic.id}
                              src={pic.imgSrc}
                              alt={pic.imgAlt}
                              className="object-cover bg-neutral-800 w-full h-full"
                              width={300}
                              height={600}

                         />
                    </div>
               ) : <p>images are loading</p>}
          </article>
     )
}

export default ImageGallery
