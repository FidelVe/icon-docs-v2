import Link from 'next/link';

const Tile = ({ title, description, href }) => {
  return (
    <Link className="block max-w-sm overflow-hidden transition shadow-md rounded-xl hover:scale-[102%] text-decoration-none dark:border dark:border-white/30" href={href} passHref>
        <div className="px-6 py-4 ">
          <div className="mb-2 text-xl font-bold">{title}</div>
          <p className="text-base text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
    </Link>
  );
};

export default Tile;