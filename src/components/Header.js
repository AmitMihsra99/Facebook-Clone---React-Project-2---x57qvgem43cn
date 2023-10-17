import React from 'react'
import "../styles/Header.css";
import flogo from "../img/flogo.jpg"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector } from 'react-redux';

function Header() {
  const user=useSelector(store=>store.user.userDetails);
  //console.log(user);
  return (
    <div className='header'>
        <div className='header_left'>
          <img
             src={flogo}
           alt="logo"/>

           <div className='header_input'>
            <SearchIcon />
            <input  placeholder='Search Facebook' type="text"/>
           </div>

        </div>
        
        <div className='header_center'>
           <div className='header_option 
            header_option--active'>
            <HomeIcon fontSize="large"/>
           </div>

           <div className='header_option'>
            <FlagIcon fontSize="large"/>
           </div>
           <div className='header_option'>
            <SubscriptionsIcon fontSize="large"/>
           </div>

           <div className='header_option'>
            <StorefrontIcon  fontSize="large"/>
           </div>

           <div className='header_option'>
            <SupervisedUserCircleIcon fontSize="large"/>
           </div>
        </div>
        
        <div className='header_right'>
          <div className="header_info">
           <Avatar className='header_logicon'  />
            <h4>{user?.data?.name}</h4>
          </div>
          <IconButton>
           <AddIcon/>
          </IconButton>

          <IconButton>
           <ForumIcon/>
          </IconButton>


          <IconButton>
           <CircleNotificationsIcon/>
          </IconButton>

          <IconButton>
           <ExpandMoreIcon/>
          </IconButton>


        </div>
    </div>
  )
}

export default Header