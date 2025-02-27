import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0 flex justify-center md:justify-start">
            <Image src="https://i.imgur.com/G382iaU.png" alt="Jabu Logo" width={50} height={50} />
          </div>
          <nav className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
              <li>
                <Link href="#" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Terms
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-4 text-center text-sm">
          <p>Jabu™ is an experimental SaaS product by PurarupaStudio</p>
        </div>
      </div>
    </footer>
  )
}

