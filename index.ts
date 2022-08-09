console.log("Hello via Bun!");

Bun.serve(({
   fetch(request) {
      let {pathname} = new URL(request.url)
      
      switch (pathname) {
         case "/":
            return new Response(Bun.file("./index.html")) 
         
         case "/hello":
            return new Response("hello sir")

         case pathname.match(/\/about\/(\w+)/)?.input:
            return new Response("Hello " +  pathname.match(/\/about\/(\w+)/)[1])
        
         case "/img":
            return new Response(Bun.file("./term.jpg"))

         default:
            return new Response("Hello World!")
      }
   }
}))

