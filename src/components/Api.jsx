export async function getMemberInfo (loginInfo) 
{
    const res = await fetch('http:url/'+loginInfo);
    const json = await res.json();
    return json;
}
export default {getMemberInfo}