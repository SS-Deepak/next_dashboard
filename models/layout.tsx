export interface BodyListProps{
    page?:string,
    button:any,
    personal?:any,
    deletePopUp?: any,
    title?: any,
    dataBody?: any
}

export interface IndexProps{
    title?: string,
    btnTitle?: string,
    page?: string,
    header?: string[],
    body?:any,
    buttons?: any,
    details?: boolean,
    modal?:any,
    deleteModal?: any,
    pagination?: any
}

export interface CompensationIndexProps{
    title: string,
    btnTitle?: string,
    page: string
}

export interface CompensationSingleProps{
    title?: string
}

export interface GeneralBodyProps{
    btnTitle?: string,
    page?: string,
    header?: string[] | any,
    data?:any,
    buttons?: any,
    modal?: any,
    deleteModal?: any,
    title?: any,
    pagination?: any
}

export interface TopHeaderProps{
    title: string,
    page?: string,
    ModalPopUp?: any
  }