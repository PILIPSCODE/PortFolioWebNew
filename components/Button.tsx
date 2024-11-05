import { ButtonHTMLAttributes, ReactNode } from "react"

import { VariantProps, cva } from 'class-variance-authority'
import cn from "@/utils/cn"
import { useFormStatus } from "react-dom";
import clsx from "clsx";
import { BsTrash } from "react-icons/bs";
import { DeleteBlog, DeletePortfolio } from "@/app/libs/action";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariant> {
  children: ReactNode,
}


export default function Button({ children, className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(buttonVariant({ variant, size, className }))}>
      {children}
    </button>
  )
}


export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();

  const className = clsx(
    "text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center",
    {
      "opacity-50 cursor-progress": pending,
    }
  );

  return (
    <button type="submit" className={className} disabled={pending}>
      {label === "save" ? (
        <span>{pending ? "Saving..." : "Save"}</span>
      ) : (
        <span>{pending ? "Updating..." : "Update"}</span>
      )}
    </button>
  );
};

export const DeleteButton = ({ id }: { id: string }) => {
  const DeletePortfolioWithId = DeletePortfolio.bind(null, id);

  return (
    <form action={DeletePortfolioWithId}>
      <Button
        className="text-red-600 "
      >
        <BsTrash size={25} />
      </Button>
    </form>
  );
};
export const DeleteButtoni = ({ id }: { id: string }) => {
  const DeleteBlogwithid = DeleteBlog.bind(null, id);

  return (
    <form action={DeleteBlogwithid}>
      <Button
        className="text-red-600 "
      >
        <BsTrash size={25} />
      </Button>
    </form>
  );
};

const buttonVariant = cva("rounded-md border-2", {
  variants: {
    variant: {
      info: "btn btn-info ",
      danger: "btn-danger",
      succes: "btn-succes",
      default: "bg-base-300 btn"
    },
    size: {
      sm: "text-sm py-0 px-1",
      md: "text-base py-1 px-2",
      lg: "text-xl py-2 px-4",
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md"
  }
})

