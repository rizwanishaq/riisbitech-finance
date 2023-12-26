import Card from "@/components/Card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-16 py-6 md:col-span-2">
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
      <header>
        <h2>Popular</h2>
      </header>

      <div>
        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
          Latest
        </h4>
        <div className="mt-8 grid lg:grid-cols-3 gap-10">
          <Card
            img_src={"/images/curry.jpg"}
            title={"5 Bean Chili Stew"}
            by={"Mario"}
            time={"25 mins"}
          />
          <Card
            img_src={"/images/noodles.jpg"}
            title={"Veg Noodles"}
            by={"Mario"}
            time={"25 mins"}
          />
          <Card
            img_src={"/images/stew.jpg"}
            title={"Tofu Curry"}
            by={"Mario"}
            time={"25 mins"}
          />
        </div>

        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
          Most Popular
        </h4>

        <div className="mt-8">{/* Cards go here */}</div>

        <div className="flex justify-center">
          <div className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
            Load more
          </div>
        </div>
      </div>
    </main>
  );
}
