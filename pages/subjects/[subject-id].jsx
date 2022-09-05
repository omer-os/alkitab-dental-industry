import {
  Avatar,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { HomeLayout } from "../../components/Files";
import { DataGrid } from "@mui/x-data-grid";

export default function SubjectId() {
  const [value, setValue] = useState(0);

  const [SelectedType, setSelectedType] = useState(0);
  const [SelectedDate, setSelectedDate] = useState(0);

  return (
    <div className="py-4 px-5 flex flex-col gap-5">
      <div className="text-2xl font-bold mb-3 ">Dental Material</div>

      <Select
        labelId="selected-date"
        id="demo-selectcted-date"
        value={SelectedDate}
        onChange={(event) => setSelectedDate(event.target.value)}
      >
        <MenuItem value={0}>Before Mid</MenuItem>
        <MenuItem value={1}>After Mid</MenuItem>
      </Select>
      <Select
        labelId="selceted-type"
        id="demo-selceted-type"
        value={SelectedType}
        onChange={(event) => setSelectedType(event.target.value)}
      >
        <MenuItem value={0}>Practical</MenuItem>
        <MenuItem value={1}>Theroretical</MenuItem>
      </Select>
    </div>
  );
}
SubjectId.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
