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
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { MainLayout } from "../../components/Files";

export default function SubjectId() {
  const [SelectedType, setSelectedType] = useState(0);
  const [SelectedDate, setSelectedDate] = useState(0);

  return (
    <div className="py-4 px-5 flex flex-col gap-5">
      <div className="text-2xl font-bold mb-1 ">Dental Material</div>

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

      <div className="flex justify-between border rounded border-zinc-700 p-2">
        <div className="flex flex-col">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-800  rounded-full flex items-center justify-center w-10 h-10">
            1
          </div>
          <div className="text-xl font-bold mt-1">Practical first foljs a</div>

          <div className="buttons mt-2 flex gap-2">
            <Button variant="outlined" size="small">View Pdf</Button>
          </div>
        </div>
        <div className="text-sm font-light text-zinc-400">2022/2/3</div>
      </div>
    </div>
  );
}
SubjectId.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
