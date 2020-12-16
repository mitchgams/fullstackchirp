
export const parse = (content: string) => {
    let toReturn = content.replace(/@(\S+)/gi,`<a href="/mentioned/$1">@$1</a>`);
    return toReturn;
}