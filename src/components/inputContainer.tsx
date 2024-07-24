export function InputContainer() {
  return (
    <form className="flex flex-col w-[864px] m-auto space-y-3">
      <div className="flex justify-between">
        <h1 className="text-lg font-bold text-base-subtitle">Publicações</h1>
        <span className="text-sm text-base-spam">6 publicações</span>
      </div>
      <input
        className="h-12 px-4 py-3 rounded-md border bg-base-input border-[#1C2F41] text-base-text placeholder:text-base-label outline-none focus:ring-1 focus:ring-[#3294F8]"
        type="text"
        placeholder="Buscar conteúdo"
      />
    </form>
  )
}
