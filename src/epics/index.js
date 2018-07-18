import { of } from "rxjs";
import { switchMap, delay } from "rxjs/operators";
import { combineEpics } from "redux-observable";

import { LOADSTORIES, clearStories } from "../actions";

const loadStoriesEpic = actions$ => {
  return actions$
    .ofType(LOADSTORIES)
    .pipe(switchMap(() => of(clearStories()).pipe(delay(2000))));
};

export const rootEpic = combineEpics(loadStoriesEpic);
