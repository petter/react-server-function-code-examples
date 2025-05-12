"use client";

import { useActionState, useTransition, useOptimistic } from "react";
import { moveCard } from "./action";

export function Board() {
  const [cardPos, action] = useActionState(moveCard, 0);
  const [isPending, startTransition] = useTransition();
  const [optimisticPos, setOptimisticPos] = useOptimistic(
    cardPos,
    (state, newPos: number) => newPos
  );

  return (
    <div className="flex flex-col gap-2">
      <p>{isPending ? "Moving card..." : "-"}</p>
      <div className="flex gap-2">
        {[0, 1, 2].map((_, i) => (
          <div key={i} className="h-full">
            <div className="flex flex-col gap-2 h-full bg-slate-200 rounded-lg p-4">
              {optimisticPos === i && (
                <div
                  className={`px-4 py-2 ${
                    isPending ? "bg-blue-300" : "bg-blue-500"
                  } rounded-lg text-white`}
                >
                  My task
                </div>
              )}
            </div>
            <button
              key={i}
              onClick={() => {
                startTransition(() => {
                  setOptimisticPos(i);
                  action(i);
                });
              }}
            >
              Move card here
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
