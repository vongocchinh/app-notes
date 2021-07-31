type noteModel={
    id:string,
    title:string,
    des:string,
    time:string
}

type addNote=(note:noteModel)=>void
type deleteNote=(id:string)=> void
type update=(note:noteModel)=>void

type showItemBar=(note:Array<noteModel>)=>void