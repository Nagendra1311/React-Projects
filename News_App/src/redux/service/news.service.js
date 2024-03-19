export const getNewsFromApi = async (q = "all") => {
    let response = await fetch(`https://newsapi.org/v2/everything?q=${q}&apiKey=7c66ad0c3a8d443dbe00c421a3211c5e`)
    let data = await response.json();
    return (data.articles)
}