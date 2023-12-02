import { Heart, X, Check } from "lucide-react"

export function Widget(){
  return (
    <div className="w-[448px] rounded overflow-hidden">
      {/* Header */}
      <div className="flex justify-between bg-zinc-200 dark:bg-zinc-800 py-4 px-6 ">
        <span className="font-bold">Notificações</span>
        <button className="text-violet-500 text-xs font-bold hover:text-violet-400">MARCAR TODAS COMO VISTAS</button>
      </div>

      {/* Recent Section */}
      <div>
        <div className="dark:text-zinc-400 px-5 py-2 bg-zinc-300 text-zinc-500 dark:bg-zinc-950 text-sm">
          Recentes
        </div>

        <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">

          <div className="flex gap-6 py-4 px-8 bg-zinc-200 dark:bg-zinc-900 items-start">
            <Heart className="w-6 h-6 text-violet-500 mt-3" />
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-100"> 
                <span className="font-bold">Daniel Benfica e mais 6 pessoas</span> curtiram a sua publicação
              </p>
              <div className="text-xxs flex text-zinc-400 items-center gap-1">
                <span>Recebido</span>
                <span>Há 3 min</span>
              </div>
            </div>
          </div>

          <div className="flex gap-6 py-4 px-8 bg-zinc-200 dark:bg-zinc-900 items-start">
            <Heart className="w-6 h-6 text-violet-500 mt-3" />
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-100"> 
                <span className="font-bold">Daniel Benfica e mais 6 pessoas</span> curtiram a sua publicação
              </p>
              <div className="text-xxs flex text-zinc-400 items-center gap-1">
                <span>Recebido</span>
                <span>Há 3 min</span>
              </div>
            </div>
            <div className="flex gap-2 self-center">
              <button className="dark:text-zinc-50 text-zinc-900 w-8 h-8 rounded flex items-center justify-center bg-zinc-100 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700">
                <X className="w-3 h-3 "/>
              </button>
              <button className="text-zinc-50 w-8 h-8 rounded flex items-center justify-center bg-violet-500 hover:bg-violet-800">
                <Check className="w-3 h-3"/>
              </button>
            </div>
          </div>
        </div>

      {/* Old Section */}
        <div className="dark:text-zinc-400 px-5 py-2 bg-zinc-300 text-zinc-500 dark:bg-zinc-950 text-sm">
          Antigos
        </div>
        <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">

          <div className="flex gap-6 py-4 px-8 bg-zinc-200 dark:bg-zinc-900 items-start">
            <Heart className="w-6 h-6 text-violet-500 mt-3" />
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-sm leading-relaxed text-zinc-400"> 
                <span className="font-bold">Daniel Benfica e mais 6 pessoas</span> curtiram a sua publicação
              </p>
              <div className="text-xxs flex text-zinc-400 items-center gap-1">
                <span>Recebido</span>
                <span>Há 3 min</span>
              </div>
            </div>
          </div>

          <div className="flex gap-6 py-4 px-8 bg-zinc-200 dark:bg-zinc-900 items-start">
            <Heart className="w-6 h-6 text-violet-500 mt-3" />
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-sm leading-relaxed text-zinc-400"> 
                <span className="font-bold">Daniel Benfica e mais 6 pessoas</span> curtiram a sua publicação
              </p>
              <div className="text-xxs flex text-zinc-400 items-center gap-1">
                <span>Recebido</span>
                <span>Há 3 min</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-6 py-4 px-8 bg-zinc-200 dark:bg-zinc-900 items-start">
            <Heart className="w-6 h-6 text-violet-500 mt-3" />
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-sm leading-relaxed text-zinc-400"> 
                <span className="font-bold">Daniel Benfica e mais 6 pessoas</span> curtiram a sua publicação
              </p>
              <div className="text-xxs flex text-zinc-400 items-center gap-1">
                <span>Recebido</span>
                <span>Há 3 min</span>
              </div>
            </div>
          </div>

        </div>
       

        

      </div>

    </div>
  )
}