import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loadSearchResults } from "./searchSlice";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import './search.css';



const Searchapp = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '25px',
  backgroundColor: alpha(theme.palette.common.white, 0.10),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.20),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: "450px"
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      console.log('Dispatching loadSearchResults action...');
      dispatch(loadSearchResults(searchTerm))
        .then(() => {
          console.log('Navigation after loadSearchResults...')
          navigate(`/search/${searchTerm}`)
        })

        .then(() => {
          console.log('Resetting searchTerm...')
          setSearchTerm('')
        });
    }
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form className='search-form' >
      <Searchapp
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        type="search"
      >
        <SearchIconWrapper>
          <SearchIcon
            sx={{
              color: 'white'
            }}
          />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search Reddit"
          inputProps={{ 'aria-label': 'search reddit' }}
          sx={{
            color: 'white'
          }}
        />
      </Searchapp>
    </form>
  );
}

