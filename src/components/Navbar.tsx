
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'


const Navbar = () => {
  return (
   <header className='w-full h-14 flex justify-between items-center bg-white'>
     {/* logo*/}
         <div> 
               <h1 className='text-3xl font-extrabold pl-2 '>My Portfolio</h1>
         </div>
       {/* Navlinks*/}
       <ul className='hidden md:block'>
        <li className='space-x-5 pr-4 text-black font-semibold '>
            <Link href= "/">Home</Link>
            <Link href= "/About">About</Link>
            <Link href= "/Contact">Contact</Link>
            <Link href= "/">Skill</Link>
            <button className='bg-black text-white py-2 px-4 rounded-s font-extrabold'>Download</button>
        </li>
       
       </ul>
       

       <Sheet>
  <SheetTrigger className='text-xl md:hidden'>
    <Menu/>
    </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Alveena</SheetTitle>
      <SheetDescription>
      <div>
        <li className='flex flex-col gap-y-4'>
            <Link href= "/">Home</Link>
            <Link href= "/About">About</Link>
            <Link href= "/Contact">Contact</Link>
            <Link href= "/">Skill</Link>
            <button className='bg-black text-white py-2 px-4 rounded-s font-semibold'>Download</button>
        </li>
       
       </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
       


 
  
     </header>

  
  )
}

export default Navbar
