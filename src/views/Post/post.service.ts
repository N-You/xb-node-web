/* 处理文件内容 */
export const postFileProcess = (post:any)=>{
    let {file} = post
    if(file){
        const {id:fileId} = file
        const fileBaseUrl = `http://localhost:3000/files/${fileId}/serve`

        file = {
            ...file,
            size:{
                thumbnail:`${fileBaseUrl}?size=thumbnail`,
                medium:`${fileBaseUrl}?size=medium`,
                large:`${fileBaseUrl}?size=large`
            }
        }

        post={
            ...post,
            file
        }
    }

    return post
}

export const filterProcess = (filterObject:{[name:string]:string})=>{
    const allowedFilterNames = ['tag','user','action']
    Object.keys(filterObject).forEach(filterName=>{
        const allowed = allowedFilterNames.some(
            allowedFilterName => allowedFilterName === filterName
        )

        if(!allowed){
            delete filterObject[filterName]
        }
    })

    return filterObject
}