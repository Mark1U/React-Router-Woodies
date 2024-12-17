type Props = {
  title: string;
  page: string;
};
export const Hero = ({ title, page }: Props) => {
  return (
    <div className="flex flex-nowrap justify-start items-center text-4xl font-bold mb-4 px-8 py-16">
      <img
        className="w-8 h-8 object-left object-cover"
        src="/Logo.png"
        alt="Logo"
      />
      <div className="text-gray-700 h-12 px-4">{title}</div>
      <div className="flex-grow mx-4 inline-block  border-t-[black] border-t border-solid"></div>
      <div className="text-gray-200 text-6xl uppercase">{page}</div>
    </div>
  );
};
