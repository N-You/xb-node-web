export function setStorage(name:string,data:any){
  return localStorage.setItem(name,JSON.stringify(data))
}

export function getStorage(name:string){
  return JSON.parse(localStorage.getItem(name) as string)
}