"use client";

import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/Button";

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
  const per_page = "4";

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
    <div className="flex gap-2 my-7">
      <Button
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`${Route}/?page=${Number(page) - 1}`);
        }}
      >
        prev page
      </Button>

      {arr.map((arr) => (
        <Button
          key={arr}
          onClick={() => {
            router.push(`${Route}/?page=${arr}`);
          }}
          className={`${arr === Number(page)?"bg-white text-black":""}`}
        >
          {arr}
        </Button>
      ))}

      <Button
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`${Route}/?page=${Number(page) + 1}`);
        }}
      >
        next page
      </Button>
    </div>
  );
};

export default PaginationControls;
