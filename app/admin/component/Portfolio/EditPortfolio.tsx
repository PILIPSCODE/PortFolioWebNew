"use client"
import React, { useState } from 'react'
import Input from "@/components/Input";
import { UpdatePortfolio } from "@/app/libs/action";
import { useRouter, useSearchParams } from "next/navigation";

import InputVariant from "@/components/InputVariant";
import { useFormState } from 'react-dom';
import { SubmitButton } from '@/components/Button';
import { EditTechnology } from '@/interface';
type props = {
  isEdit: string,
  e: any,
  page: string | string[];
  setEdit: React.Dispatch<React.SetStateAction<string>>
}


export default function EditPortfolio(props: props) {
  const [technology, SetTechnology] = useState<EditTechnology[]>(props.e.technology);

  const technologywithId = {
    technology: technology,
    id: props.e.id
  }

  const UpdateProjecttWithId = UpdatePortfolio.bind(null, technologywithId);
  const [state, formAction] = useFormState(UpdateProjecttWithId, null);
  const searchParams = useSearchParams();
  const router = useRouter()


  const idPortfolio = searchParams.get("id")
  return (
    <div>
      <form action={formAction} className={` ${idPortfolio !== props.e.id ? "pointer-events-none" : ""}  mt-4 w-full text-white`}>
        <Input
          defaultValue={props.e.name}
          name='name'
          id='name'
          className={`${idPortfolio !== props.e.id ? "bg-transparent  border-none" : "input-info rounded-md"} pl-4  font-bold text-xl`}

          type="text" />
        <textarea
          name='description'
          id='description'

          defaultValue={props.e.description}
          className={`textarea w-full ${idPortfolio !== props.e.id ? "bg-transparent" : " textarea-primary bg-transparent"} mt-3   resize-none`}
        />
        <InputVariant Data={technology} SetData={SetTechnology} isEdit={idPortfolio !== props.e.id ? false : true} variant={props.e.technology} />
        {idPortfolio === props.e.id ?
          <div>
            <Input className="input-info" name='github' id="github" defaultValue={props.e.github} placeholder="Link Github Here" />
            <Input className="input-info" name='link' id='link' defaultValue={props.e.link} placeholder="Link Live Here" />
          </div>
          :
          <></>
        }
        <div className={`${idPortfolio === props.e.id ? "" : "hidden"} absolute flex left-5 top-5 z-30 backdrop-blur-md m-2 gap-1  rounded-lg`}>
          <SubmitButton label='update' />
          <div
            className="text-white px-2 flex items-center bg-red-600"
            onClick={() => router.push(`/admin/Portfolio/?page=${props.page}`)}
          >
            Cancel
          </div>
        </div>
      </form>
    </div>
  )
}
