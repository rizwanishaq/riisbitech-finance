import Link from "next/link";
const SideBar = () => {
  return (
    <div className="flex justify-center md:justify-end">
      <Link
        href="#"
        className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500"
      >
        Login
      </Link>
      <Link
        href="#"
        className="btn text-primary ml-2 border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500"
      >
        Logout
      </Link>
    </div>
  );
};

export default SideBar;
