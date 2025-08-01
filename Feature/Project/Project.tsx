import { GetProject } from '@/app/libs/data'
import ProjectCLient from './ProjectCLient'



const Project = async () => {
    const DataProject = await GetProject()
    return (
        <div id='Project' className=' w-screen pt-10  font-popOne relative '>
            <h1 className=' text-5xl max-md:text-3xl md:p-10 p-2 '>Project!</h1>
            <ProjectCLient DataProject={DataProject} />
        </div>
    )
}

export default Project