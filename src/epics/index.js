import { map, mergeMap, switchMap } from "rxjs/operators";
import { forkJoin } from "rxjs";
import { ajax } from "rxjs/ajax";
import { combineEpics } from "redux-observable";

import { LOADSTORIES, loadStoriesDone } from "../actions";
const topStories = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`;
const url = id =>
  `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;

const loadStoriesEpic = actions$ => {
  return actions$.ofType(LOADSTORIES).pipe(
    switchMap(({ payload }) =>
      ajax.getJSON(topStories).pipe(
        map(ids => ids.slice(0, 5)),
        map(ids => ids.map(url)),
        map(urls => urls.map(url => ajax.getJSON(url))),
        mergeMap(reqs => forkJoin(reqs)),
        map(stories => loadStoriesDone(stories))
      )
    )
  );
};

export const rootEpic = combineEpics(loadStoriesEpic);
