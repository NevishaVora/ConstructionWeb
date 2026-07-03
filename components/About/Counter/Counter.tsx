const Counter = [
  {
    number: "10+",
    title: "Homes Built and handed over",
  },
  {
    number: "2+ Cities",
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

export default function Counters() {
  return (
    <section className="bg-[#F8F8F8] py-10">
      <div className="mx-auto grid max-w-[1200px] grid-cols-4 gap-6">
        {Counter.map((item) => (
          <div
            key={item.title}
            className="rounded-[10px] bg-white py-8 text-center shadow-sm"
          >
            <h3 className="text-[41.4px] font-semibold text-[#FF6900]">
              {item.number}
            </h3>

            <p className="mt-3 text-[#8E8E8E] text-[18.97px] font-[500]">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}