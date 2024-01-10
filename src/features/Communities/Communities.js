import React, { useEffect } from "react";
import { chooseCommunities, fillCommunities } from "./communitiesSlice";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from "react-router-dom";
import { List } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import './communities.css';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 150,
      backgroundColor: 'gray',
      padding: 0,
      margin: 0,
    }
  },
};


export function Communities() {
  const dispatch = useDispatch();
  const allCommunities = useSelector(chooseCommunities);
  const theme = useTheme();

  useEffect(() => {
    dispatch(fillCommunities())
  }, [dispatch])

  const [value, setValue] = React.useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <div className="communities-container">
      <FormControl sx={{ m: 0, width: 200, }} >
        <InputLabel
          id="demo-multiple-name-label"
          sx={{
            color: 'white',
          }}
        >Communities</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={[]}
          input={<OutlinedInput label="Communities" />}
          MenuProps={MenuProps}
          onChange={handleChange}
        >
          <List
            component="div"
            role="menu"
            sx={{
              paddingTop: "0",
            }}
          >
            {allCommunities.length > 0 &&
              allCommunities.map((sub) => (
                <ListItem
                  key={sub.name}
                  style={{
                    whiteSpace: "normal",
                    lineHeight: "normal",
                    minHeight: "auto",
                  }}
                  className="communities-list-item"
                >
                  <Link to={`r/${sub.display_name}`} className="communities-list">
                    {`r/${sub.display_name}`}
                  </Link>
                </ListItem>
              ))}
          </List>
        </Select>
      </FormControl>
    </div>
  );

}
