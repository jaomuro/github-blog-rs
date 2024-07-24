function CardPost() {
  return (
    <div className="flex flex-col w-[416px] h-[260px] rounded-[10px] bg-base-post border  border-[#112131] p-8 space-y-5 hover:border-[#3A536B]">
      <div className="flex justify-between ">
        <h1 className="font-bold text-[20px] leading-[32px] w-[283px] text-base-title ">
          JavaScript data types and data structures
        </h1>
        <span className="text-base-spam text-sm">Há 1 dia</span>
      </div>
      <p className="overflow-hidden text-ellipsis text-base text-base-text leading-[25.6px] h-[100px]">
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn. Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types:
        let foo = 42; // foo is now a number foo = bar; // foo is now a string
        foo = true; // foo is now a boolean
      </p>
    </div>
  )
}

export function CardContainer() {
  return (
    <div className="w-[864px]  grid grid-cols-2 mx-auto mt-12 gap-8 pb-12">
      {Array.from({ length: 5 }).map((_, index) => {
        return <CardPost key={index} />
      })}
    </div>
  )
}
