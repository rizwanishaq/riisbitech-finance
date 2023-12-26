import Image from "next/image";

const Card = ({ img_src, title, by, time }) => {
  return (
    <div className="card hover:shadow-xl">
      <Image
        src={img_src}
        alt="Food1"
        width={200}
        height={200}
        className="w-full h-32 sm:h-48 object-cover"
      />
      <div className="m-4">
        <span className="font-bold">{title}</span>
        <span className="block text-gray-500 text-sm">Recipe by {by}</span>
      </div>
      <div className="badge">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 inline-block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        <span>{time}</span>
      </div>
    </div>
  );
};

export default Card;
