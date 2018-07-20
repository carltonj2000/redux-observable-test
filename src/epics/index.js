import { of } from "rxjs";
import { switchMap, delay } from "rxjs/operators";
import { combineEpics } from "redux-observable";

import { LOADSTORIES, loadStoriesDone } from "../actions";
const stories = [
  {
    by: "bleakgadfly",
    id: 14967192,
    title: "To Protect Voting, Use Open-Source Software",
    url:
      "https://mobile.nytimes.com/2017/08/03/opinion/open-source-software-hacker-voting.html"
  },
  {
    by: "mtyurt",
    id: 14966545,
    title: "Git: Using Advanced Rebase Features for a Clean Repository",
    url:
      "https://mtyurt.net/2017/08/08/git-using-advanced-rebase-features-for-a-clean-repository/"
  },
  {
    by: "callumlocke",
    id: 14967335,
    title: "Inside an AI brain: What does machine learning look like?",
    url: "https://www.graphcore.ai/posts/what-does-machine-learning-look-like"
  }
];
/*
const topStories = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`;
const url = id =>
  `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;
*/
const loadStoriesEpic = actions$ => {
  return actions$
    .ofType(LOADSTORIES)
    .pipe(
      switchMap(({ payload }) => of(loadStoriesDone(stories)).pipe(delay(2000)))
    );
};

export const rootEpic = combineEpics(loadStoriesEpic);
