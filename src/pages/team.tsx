import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeam } from "redux/actions/team";
import { IRootState } from "redux/reducers/index";
import { AppDispatch } from "redux/store";
import { TeamPage } from "templates/TeamPage";

const Team = () => {
  const dispatch: AppDispatch = useDispatch();

  const team = useSelector((state: IRootState) => state.team);

  useEffect(() => {
    dispatch(getTeam());
  }, []);

  return <TeamPage teamMembers={team.members} />;
};

export default Team;
