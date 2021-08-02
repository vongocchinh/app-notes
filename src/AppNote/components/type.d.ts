type noteModel={
    id:string,
    title:string,
    des:string,
    time:string,
    userId:string |  null | undefined ,
}


type addNote=(note:noteModel)=>void
type deleteNote=(id:string)=> void
type update=(note:noteModel)=>void

type showItemBar=(note:Array<noteModel>)=>void