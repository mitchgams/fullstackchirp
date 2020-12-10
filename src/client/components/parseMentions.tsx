
export const mentions = (content: string) => {
    let toReturn = content.replace(/@(\S+)/gi,`<a href="/user/$1">@$1</a>`);
    return toReturn;
}