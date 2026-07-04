const stats = [
  {
    number: "10,142+",
    title: "Homes Built and handed over",
  },
  {
    number: "10+ Cities",
    title: "Operational presence",
  },
  {
    number: "8 Months",
    title: "Express execution",
  },
  {
    number: "10,142+",
    title: "Design Plans",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#F8F8F8] py-10 md:py-14">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-[10px] bg-white px-4 py-8 text-center shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-[32px] font-semibold text-[#FF6900] sm:text-[36px] lg:text-[41.4px]">
                {item.number}
              </h3>

              <p className="mt-3 text-[16px] font-medium leading-7 text-[#8E8E8E] sm:text-[17px] lg:text-[18.97px]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}