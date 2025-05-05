import Link from "next/link";

export default function Header()
{
    return (
        <div className="w-full absolute text-white z-10">
         <div className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href="/" className="font-bold text-3xl">Home</Link>
        <div className="space-x-4 text-xl">
        <Link href="/scale">Scale</Link>
        <Link href="/reliability">Reliability</Link>
        <Link href="/performance">Performance</Link>
        </div>
        </div>
      </div> 
    )

}