export const getApi=(url,data)=>{
	return uni.$get(url,data,'GET')
}
export const postApi=(url,data)=>{
	return uni.$post(url,data,'POST')
}