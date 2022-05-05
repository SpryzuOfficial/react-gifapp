export const getGifs = async(category) =>
{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}s&limit=10&api_key=SbDJ5JiUDqdeuAEh3ic1mUxDdxJONS08`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img =>
    {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}