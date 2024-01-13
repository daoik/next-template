import Link from "next/link"

export default function Navbar() {

    var linkClassName = "hover:bg-gray-600 rounded-lg p-1 px-2 pointer-cursor tranistion-all duration-150"
  return (
    <div className="bg-gray-500 w-full h-16">
      <div className="flex h-full items-center justify-around space-x-10">
        <div className="title ">Title</div>
        <div className=" flex-row flex space-x-16">
          <Link href="/" className={linkClassName}>About</Link>
          <Link href="/"  className={linkClassName}>Content</Link>
          <Link href="/"  className={linkClassName}>Contact us</Link>
        </div>
      </div>
    </div>
  );
}
