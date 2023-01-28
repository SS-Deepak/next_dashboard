export interface DetailListProps{
    data:{
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
      projectAssignTo?: string[]
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