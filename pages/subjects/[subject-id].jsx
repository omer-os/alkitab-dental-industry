import { Avatar, Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import { HomeLayout } from "../../components/Files";

export default function SubjectId() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="py-4 px-5">
      <div className="text-2xl font-bold mb-3 ">Dental Material</div>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="before midyear" />
          <Tab label="after midyear" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="flex flex-col">
          <div className="flex">
            <div className="mr-2">
              <Avatar sx={{ bgcolor: "blue", color: "white" }}>1</Avatar>
            </div>
            <div className="flex flex-col">
              <div className="font-bold">file 1</div>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </div>
  );
}
SubjectId.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className="mt-10">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


