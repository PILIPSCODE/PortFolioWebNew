import React from 'react'
import Content from './Content'


type getProject = ({
    technology: {
        id: string;
        technology: string | null;
        projectId: string;
    }[];
} & {
    id: string;
    name: string | null;
    img: string | null;
    link: string;
    github: string;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
})[] | null

type props = {
    DataProject:getProject
}
const Project = (props:props) => {
    return (
        <div id='Project' className=' w-screen pt-10  font-popOne relative '>
            <h1 className=' text-5xl max-md:text-3xl md:p-10 p-2 '>Project!</h1>
            <div className='lg:w-8/12  mx-auto  max-lg:w-11/12    text-justify'>
              <Content DataProject={props.DataProject}/>
            </div>
        </div>
    )
}

export default Project