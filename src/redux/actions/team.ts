import { types } from '../reducers';
import { fetchTeam } from '../requests/team';
import { ThunkResult } from '../types';

export const getTeam = (): ThunkResult<any>  => {
  return (dispatch, getState) => {
    dispatch({ type: types.team.TEAM_LOADING_TEAM });

    return fetchTeam(getState()).then((response) =>
      !response.error
        ? dispatch({
            type: types.team.TEAM_FETCHED_TEAM,
            data: response,
          })
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          }),
    );
  };
};
