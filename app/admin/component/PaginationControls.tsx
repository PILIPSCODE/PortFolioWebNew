"use client";

import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type o = {
  hi: string;
};
interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  length: number;
  Route:string;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
  length,
  Route,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = "9";

  //  {page} / {Math.ceil( length/ Number(per_page))}
  const pagecurr = Math.ceil(length / Number(per_page));

  let arr: number[] = [];
  for (let i = Number(page) -1  ; i <= Number(page) +1; i++) {
    if(i < 1) continue;
    if(i > pagecurr) break;
    debugger
    arr.push(i );
  }

  return (
    <div className="flex gap-2">
      <button
        className="join-item btn btn-outline bg-base-300"
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`${Route}/?page=${Number(page) - 1}`);
        }}
      >
        prev page
      </button>

      {arr.map((arr) => (
        <button
          key={arr}
          onClick={() => {
            router.push(`${Route}/?page=${arr}`);
          }}
          className="join-item btn"
        >
          {arr}
        </button>
      ))}

      <button
        className="join-item btn btn-outline bg-base-300"
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`${Route}/?page=${Number(page) + 1}`);
        }}
      >
        next page
      </button>
    </div>
  );
};

export default PaginationControls;
