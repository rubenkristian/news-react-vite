export class Source {
  constructor(
    public id: string,
    public name: string,
  ) {}
}

export class Article {
  constructor(
    public author: string,
    public content: string,
    public description: string,
    public published_at: string,
    public source: Source,
    public title: string,
    public url: string,
    public urlToImage: string,
  ) {}
}

export interface NewsState {
  news: Array<Article>;
}

const initialState = {
  news: new Array<Article>(),
}

export type Action = { type: "LOAD_NEWS", payload: string}

export const newsReducer = (
  state: NewsState = initialState,
  action: Action,
) => {
  switch(action.type) {
    case "LOAD_NEWS": {
      return { ...state, news: [...state.news, action.payload] }
    }
    default:
      return false;
  }
}