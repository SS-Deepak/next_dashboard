export interface DetailListProps{
    data:{
      EID?: string,
      Sid ?: string,
      
      id?: string,
      email?: string,
      firstName?: string,
      lastName?: string,
      DOJ?: string,

      loginBtn?: boolean,
      editBtn?:boolean,
      deleteBtn?: boolean,
      welcomeMailBtn?: boolean,
      mailEPloginBtn?:boolean,
      detailBtn?:boolean,
      acceptBtn?: boolean,
      rejectBtn?:boolean,

      ERemark?:string,
      EName?:string,

      page?: string,

      holdayTitle?: string,
      holiDay?: string,
      holiDate?: string,

      designTitle?: string,
      departTitle?: string,

      clientDateAdded?: string,
      clientName?: string,
      clientEmail?: string,
      clientPhone?: string

      projectDateAdded?: string,
      projectEstimmateDD?: string,
      projectName?: string,
      projectClient?: string,
      projectStatus?: string,
      projectDesc?: string,
      projectCreatedBy?: string,
      projectAssignTo?: string[],

      AEName?: string,
      payday?: string,
      ctc?: string,

      subject?: string,
      Lfrom?: string,
      Lto?: string,
      status?: string,
      Lcomment?: string
    }
  }
  
  export interface ListHeaderProps{
    data:{
      page?: string,
      email?:boolean,
      fn?: boolean,
      ls?:boolean,
      doj?:boolean,
      holiDate?:boolean,
      weakDay?:boolean,
      title?:boolean,
      
    }
  }

  export interface monthProps{
    January: number,
    February:number,
    March:number,
    April:number,
    May:number,
    June:number,
    July:number,
    August:number,
    September:number,
    October:number,
    November:number,
    December:number
  }

  export interface CalculateAttendence{
    data: number[],
    days: number,
    month: number,
    YearCode:number,
    year: number
}
export interface Attendence{
  name?: string,
  attendence?:any,
  days?: number[],
  id?: string,
  tag?: any
}

export interface holidy{
  date: string,
  title: string
}