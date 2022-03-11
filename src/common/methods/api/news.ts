export async function getEverything(search: string = '', lang: string = 'en') {
  const res = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=5a2a6675515c48239c80326c203f656b');
}

export async function getEverythingFromTo(search: string = '', from: string, to: string, sortBy: string) {

}

export async function getTopHeadlines(country?: string) {

}