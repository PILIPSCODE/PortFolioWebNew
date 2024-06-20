export interface Technology{
    projectId: string,
    technology: string | null,
    ld:string
}

export interface Services  {
    name: string,
    description: string,
    img: string,
    technology: string[],
    link: string,
    github: string,
  }
  export interface ServicesWithRelation {
    technology: {
        technology: string | null;
    }[];
    id: string;
    name: string | null;
    img: string | null;
    link: string;
    github: string;
    description: string | null;
    createdAt: Date;
}[]