import Card from "@/components/Card";
import SideBar from "@/components/SideBar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-16 py-6 md:col-span-2">
      <SideBar />
      <header>
        <h2>Popular</h2>
      </header>

      <div>
        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
          Latest
        </h4>
        <div className="mt-8 grid lg:grid-cols-3 gap-10">
          <Card
            img_src={"/images/crypto.jpg"}
            title={"BNB"}
            by={"BNB"}
            time={"25 mins"}
          />
          <Card
            img_src={"/images/Solana_logo.jpg"}
            title={"Solana"}
            by={"SOL"}
            time={"25 mins"}
          />
          <Card
            img_src={"/images/eth.webp"}
            title={"ETH"}
            by={"etc"}
            time={"25 mins"}
          />

          <Card
            img_src={"/images/crypto.jpg"}
            title={"BTC"}
            by={"btc"}
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
