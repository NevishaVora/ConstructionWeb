const Counter = [
  {
    number: "100+",
    title: "Homes Handed over",
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
    <section className="bg-[#F8F8F8] py-8 md:py-10">
      <div
        className="
          mx-auto
          max-w-[1200px]
          px-5
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-4
          md:gap-6
        "
      >
        {Counter.map((item) => (
          <div
            key={item.title}
            className="
              rounded-[10px]
              bg-white
              py-6
              md:py-7
              lg:py-8
              text-center
              shadow-sm
            "
          >
            <h3
              className="
                font-semibold
                text-[#FF6900]
                text-[30px]
                sm:text-[34px]
                md:text-[38px]
                lg:text-[41.4px]
              "
            >
              {item.number}
            </h3>

            <p
              className="
                mt-3
                font-[500]
                text-[#8E8E8E]
                text-[15px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18.97px]
              "
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}