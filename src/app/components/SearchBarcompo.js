'use client'

// import React from 'react';
// import { Box, InputBase, Paper, IconButton } from '@mui/material';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

// const SearchBar = () => {
//   return (
//     <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start" gap={2} width={416} height={60} flexShrink={0}>
//       <Paper sx={{ width: '100%', height: '100%', borderRadius: 16, overflow: 'hidden' }}>
//         <Box p={2} display="flex" alignItems="center">
//           <IconButton style={{ marginRight: '10px' }}><SearchOutlinedIcon /></IconButton>
//           <InputBase fullWidth placeholder="Search" />
//         </Box>
//       </Paper>
//     </Box>
//   );
// };

// export default SearchBar;
// import React from 'react';
// import { InputBase } from '@mui/material';

// const SearchBar = () => {
//   const outerBoxStyle = {
//     width: '100%',
//     height: '100%',
//     background: '#EFEFEF',
//     borderRadius: 16,
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//     gap: 10,
//     padding: 10, // Add padding for inner content spacing
//   };

//   const inputDivStyle = {
//     width: 416,
//     height: 60,
//     background: '#FFFFFF', // Change inner box background to white or desired color
//     borderRadius: 16,
//     position: 'relative', 
//     boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Add shadow for depth effect
//   };

//   const inputStyle = {
//     width: 'calc(100% - 20px)', // Adjust input width as needed
//     position: 'absolute',
//     top: '50%', 
//     left: 25,
//     transform: 'translateY(-50%)',
//     fontSize: 20,
//     fontFamily: 'Inter',
//     fontWeight: 400,
//     border: 'none',
//     outline: 'none',
//     background: 'transparent',
//     '&::placeholder': {
//       color: 'black',
//       opacity: 0.6,
//     },
//   };

//   return (
//     <div style={outerBoxStyle}>
//       <div style={inputDivStyle}>
//         <InputBase
//           placeholder="Search"
//           style={inputStyle}
//         />
//       </div>
//     </div>
//   );
// };

// export default SearchBar;

// import React from 'react';
// import { InputBase } from '@mui/material';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

// const SearchBar = () => {
//   const outerBoxStyle = {
//     width: '100%',
//     height: '100%',
//     background: '#EFEFEF',
//     borderRadius: 16,
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//     gap: 32,
//     padding: '10px 0', // Add padding for inner content spacing
//   };

//   const searchBarStyle = {
//     width: '100%',
//     display: 'inline-flex',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     gap: 32,
//   };

//   const inputDivStyle = {
//     width: 416,
//     height: 60,
//     background: 'white',
//     borderRadius: 16,
//     position: 'relative',
//   };

//   const inputStyle = {
//     width: 'calc(100% - 20px)', // Adjust input width as needed
//     position: 'absolute',
//     top: '50%',
//     left: 25,
//     transform: 'translateY(-50%)',
//     fontSize: 20,
//     fontFamily: 'Inter',
//     fontWeight: 400,
//     border: 'none',
//     outline: 'none',
//     background: 'transparent',
//     '&::placeholder': {
//       color: 'white',
//       opacity: 0.8,
//     },
//   };

//   const iconContainerStyle = {
//     width: 63,
//     height: 52,
//     position: 'relative',
//   };

//   const iconBackgroundStyle = {
//     width: 63,
//     height: 52,
//     left: 0,
//     top: 0,
//     position: 'absolute',
//     background: 'blue',
//     borderRadius: 8,
//   };

//   const iconStyle = {
//     width: 40,
//     height: 40,
//     left: 21,
//     top: 15,
//     position: 'absolute',
//   };

//   return (
//     <div style={outerBoxStyle}>
//       <div style={searchBarStyle}>
//         <div style={inputDivStyle}>
//           <InputBase
//             placeholder="Search"
//             style={inputStyle}
//           />
//         </div>
//         <div style={iconContainerStyle}>
//           <div style={iconBackgroundStyle} />
//           <div style={iconStyle} />
//           {/* Use the MUI SearchOutlinedIcon component here */}
//           <SearchOutlinedIcon style={{ width: '40px', height: '40px', position: 'absolute', top: '15px', left: '21px', color: 'white' }} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;


import React, {useState} from 'react';
import { InputBase } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchBar = () => {

    const [isClicked, setIsClicked] = useState(false);

  const outerBoxStyle = {
    width: '100%',
    height: '100%',
    // background: '#EFEFEF',
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 32,
    padding: '10px 0', // Add padding for inner content spacing
  };

  const searchBarStyle = {
    width: '100%',
    display: 'inline-flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 32,
  };

  const inputDivStyle = {
    width: 416,
    height: 60,
    background: 'white',
    borderRadius: 16,
    position: 'relative',
  };

  const inputStyle = {
    width: 'calc(100% - 20px)', // Adjust input width as needed
    position: 'absolute',
    top: '50%',
    left: 25,
    transform: 'translateY(-50%)',
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: 400,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    '&::placeholder': {
      color: 'white',
      opacity: 0.8,
    },
  };

  const iconContainerStyle = {
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    cursor: 'pointer',
    boxShadow: isClicked ? '0 0 20px 0px #BED4FF' : 'none', // Box shadow color
    borderRadius: 8, // Border radius
    left: 0, // Left position
    top: 0, // Top position
    animation: isClicked ? 'shadow-drop-2-center 0.2s ease-out both' : 'none', // Apply animation based on state
  
};

  const iconBackgroundStyle = {
    width: 50,
    height: 50,
    left: 0,
    top: 0,
    position: 'absolute',
    background: 'blue',
    borderRadius: 8,
  };

  const iconStyle = {
    width: 40,
    height: 40,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  const handleIconClick = () => {
    setIsClicked(true); // Set state to trigger animation
    // Add a timeout to reset animation after it completes
    setTimeout(() => {
      setIsClicked(false);
    }, 200);
    
    // Add functionality for the icon click event here
    console.log('Icon clicked!');
    // Perform searching or any other action here
  };

  return (

    <div style={outerBoxStyle}>
      <div style={searchBarStyle}>
        <div style={inputDivStyle}>
          <InputBase
            placeholder="Search"
            style={inputStyle}
          />
        </div>
        <div style={iconContainerStyle} onClick={handleIconClick}>
          <div style={iconBackgroundStyle} />
          <div style={iconStyle}>
            <SearchOutlinedIcon style={{ width: '40px', height: '40px', color: 'white' }} />
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default SearchBar;
