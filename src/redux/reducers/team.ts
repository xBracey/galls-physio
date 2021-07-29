import { config } from "config";
import { IAction, IReducers } from "../types";

interface ITeamMember {
  imgUrl: string;
  name: string;
  jobTitle: string;
  description: string;
}

export interface ITeam {
  loading: boolean;
  members: ITeamMember[];
}

const initialState: ITeam = {
  loading: false,
  members: [],
};

export const teamTypes = {
  TEAM_FETCHED_TEAM: "fetchedTeam",
  TEAM_LOADING_TEAM: "loadingTeam",
};

/**
 * TEAM REDUCERS - START
 */

const loadingTeam = state => ({ ...state, loading: true });

const fetchedTeam = (state, { data }) => {
  const members = data.map(teamMember => ({
    imgUrl: config.api + teamMember.image?.url,
    name: teamMember.name,
    jobTitle: teamMember.jobTitle,
    description: teamMember.description,
  }));

  return { ...state, loading: false, members };
};

/**
 * TEAM REDUCERS - END
 * */

const reducers: IReducers<ITeam> = {
  fetchedTeam,
  loadingTeam,
};

export default (state = initialState, action: IAction) => {
  return reducers[action.type]
    ? reducers[action.type](state, action.data)
    : state;
};
