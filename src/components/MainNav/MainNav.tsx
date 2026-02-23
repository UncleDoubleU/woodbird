

function MainNav() {
     const navItems = [
          { id: 0, name: "shop", link: "#" },
          { id: 1, name: "sale", link: "#" },
          { id: 2, name: "brand", link: "#" }
     ]

     const navBtnItems = [
          { id: 3, name: "menu" },
          { id: 4, name: "bag", items: 0 }
     ]



     // using loops could help avoid repeating styles within the same element.
     return (
          <header className="fixed flex justify-between w-full h-auto px-6 bg-red-400">
               <button className="uppercase absolute h-max py-1 px-4 rounded-full text-stone-100 bg-neutral-900 hidden">skip to main content</button>
               <nav className="flex justify-between items-center w-full shrink-0">
                    <div className="h-auto">
                         <h2 className="py-1 px-4 rounded-full text-stone-100 bg-neutral-900">WOODBIRD<sup>&reg;</sup></h2>
                    </div>
                    <ul className="flex gap-x-2">
                         {
                              navItems.map(item => <li
                                   className="uppercase py-1 px-4 rounded-full text-stone-100 bg-neutral-900"
                                   key={item.id}><a href={item.link}>{item.name}</a>
                              </li>)
                         }
                    </ul>
                    <button className="py-1 px-4 rounded-full text-stone-100 bg-neutral-900">SEARCH</button>
                    <div className="flex gap-x-2">
                         {
                              navBtnItems.map(btn => <button
                                   className="text-nowrap uppercase py-1 px-4 rounded-full text-stone-100 bg-neutral-900"
                                   key={btn.id}>{btn.name} {btn.items}
                              </button>)
                         }
                    </div>
               </nav>
          </header >
     )
}

export default MainNav
