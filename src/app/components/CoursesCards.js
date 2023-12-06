'use client'

// import React from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import { styled } from '@mui/system';

// export const Courses = () => {
//   return (
//     <div style={{width: '100%', height: '100%', position: 'relative'}}>
//         <div style={{width: 320, height: 200, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 4px 8px 1px rgba(39.21, 66.53, 98.92, 0.16)', borderRadius: 8, border: '1px #355070 solid', backdropFilter: 'blur(14px)'}} />
//         <div style={{width: 44, height: 12, left: 264, top: 12, position: 'absolute', background: 'linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0) 100%)', borderRadius: 8, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
//             <div style={{color: '#0F4C5C', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Fall 2023</div>
//         </div>
//         <div style={{width: 74, height: 15, left: 12, top: 12, position: 'absolute', background: 'white', borderRadius: 8, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
//             <div style={{color: '#0F4C5C', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>78.28% - A +</div>
//         </div>
//         <div style={{width: 258.71, height: 42, left: 11.29, top: 72, position: 'absolute'}}>
//             <div style={{width: 30.37, height: 15, left: 0, top: 0, position: 'absolute', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>B551</div>
//             <div style={{width: 258.71, height: 19, left: 0, top: 23, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Elements of Artificial Intelligence</div>
//         </div>
//         <div style={{width: 306, height: 20, paddingLeft: 32, paddingRight: 32, left: 11.29, top: 154, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 54, display: 'inline-flex'}}>
//             <div style={{width: 20, height: 20, background: '#545454'}}></div>
//             <div style={{width: 20, height: 20, background: '#545454'}}></div>
//             <div style={{width: 20, height: 20, background: '#545454'}}></div>
//             <div style={{width: 20, height: 20, background: '#545454'}}></div>
//         </div>
//     </div>
//   )
// }

// import React from 'react';
// import { Box, Typography, LinearProgress, Paper } from '@mui/material';

// const Courses = () => {
//   return (
//     <Box
//       style={{
//         width: '100%',
//         height: '100%',
//         position: 'relative',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//       }}
//     >
//       <Paper
//         style={{
//           width: 320,
//           height: 200,
//           position: 'absolute',
//           background: 'white',
//           boxShadow: '0px 4px 8px 1px rgba(39, 66, 98, 0.16)',
//           borderRadius: 8,
//           border: '1px #355070 solid',
//           backdropFilter: 'blur(14px)',
//         }}
//       />
//       <Box
//         style={{
//           width: 44,
//           height: 12,
//           left: 264,
//           top: 12,
//           position: 'absolute',
//           background: 'linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0) 100%)',
//           borderRadius: 8,
//           overflow: 'hidden',
//           justifyContent: 'center',
//           alignItems: 'center',
//           gap: 10,
//           display: 'inline-flex',
//         }}
//       >
//         <Typography style={{ color: '#0F4C5C', fontSize: 10, fontWeight: '400' }}>
//           Fall 2023
//         </Typography>
//       </Box>
//       <Box
//         style={{
//           width: 74,
//           height: 15,
//           left: 12,
//           top: 12,
//           position: 'absolute',
//           background: 'white',
//           borderRadius: 8,
//           overflow: 'hidden',
//           justifyContent: 'center',
//           alignItems: 'center',
//           gap: 10,
//           display: 'inline-flex',
//         }}
//       >
//         <Typography style={{ color: '#0F4C5C', fontSize: 12, fontWeight: '400' }}>
//           78.28% - A +
//         </Typography>
//       </Box>
//       <Box
//         style={{
//           width: 258.71,
//           height: 42,
//           left: 11.29,
//           top: 72,
//           position: 'absolute',
//         }}
//       >
//         <Typography style={{ color: 'black', fontSize: 12, fontWeight: '600' }}>B551</Typography>
//         <Typography style={{ color: 'black', fontSize: 16, fontWeight: '400' }}>
//           Elements of Artificial Intelligence
//         </Typography>
//       </Box>
//       <Box
//         style={{
//           width: 306,
//           height: 20,
//           paddingLeft: 32,
//           paddingRight: 32,
//           left: 11.29,
//           top: 154,
//           position: 'absolute',
//           justifyContent: 'flex-start',
//           alignItems: 'flex-start',
//           gap: 54,
//           display: 'inline-flex',
//         }}
//       >
//         {[1, 2, 3, 4].map((item) => (
//           <LinearProgress
//             key={item}
//             style={{ width: 20, height: 20, backgroundColor: '#545454' }}
//           />
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default Courses;

//------v1--------
// import React from 'react';

// const Courses = () => {
//   return (
//     <div style={{ width: '100%', height: '100%', position: 'relative' }}>
//       <div
//         style={{
//           width: 320,
//           height: 200,
//           left: 0,
//           top: 0,
//           position: 'absolute',
//           background: 'white',
//           boxShadow: '0px 4px 8px 1px rgba(39.21, 66.53, 98.92, 0.16)',
//           borderRadius: 8,
//           border: '1px #355070 solid',
//           backdropFilter: 'blur(14px)',
//         }}
//       />
//       <div
//         style={{
//           width: 44,
//           height: 12,
//           left: 264,
//           top: 12,
//           position: 'absolute',
//           background: 'linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0) 100%)',
//           borderRadius: 8,
//           overflow: 'hidden',
//           justifyContent: 'center',
//           alignItems: 'center',
//           gap: 10,
//           display: 'inline-flex',
//           color: '#0F4C5C',
//           fontSize: 10,
//           fontFamily: 'Inter',
//           fontWeight: '400',
//         }}
//       >
//         <div>Fall 2023</div>
//       </div>
//       <div
//         style={{
//           width: 74,
//           height: 15,
//           left: 12,
//           top: 12,
//           position: 'absolute',
//           background: 'white',
//           borderRadius: 8,
//           overflow: 'hidden',
//           justifyContent: 'center',
//           alignItems: 'center',
//           gap: 10,
//           display: 'inline-flex',
//           color: '#0F4C5C',
//           fontSize: 12,
//           fontFamily: 'Inter',
//           fontWeight: '400',
//         }}
//       >
//         <div>78.28% - A +</div>
//       </div>
//       <div style={{ width: 258.71, height: 42, left: 11.29, top: 72, position: 'absolute' }}>
//         <div
//           style={{
//             width: 30.37,
//             height: 15,
//             left: 0,
//             top: 0,
//             position: 'absolute',
//             color: 'black',
//             fontSize: 12,
//             fontFamily: 'Inter',
//             fontWeight: '600',
//           }}
//         >
//           B551
//         </div>
//         <div
//           style={{
//             width: 258.71,
//             height: 19,
//             left: 0,
//             top: 23,
//             position: 'absolute',
//             color: 'black',
//             fontSize: 16,
//             fontFamily: 'Inter',
//             fontWeight: '400',
//           }}
//         >
//           Elements of Artificial Intelligence
//         </div>
//       </div>
//       <div
//         style={{
//           width: 306,
//           height: 20,
//           paddingLeft: 32,
//           paddingRight: 32,
//           left: 11.29,
//           top: 154,
//           position: 'absolute',
//           justifyContent: 'flex-start',
//           alignItems: 'flex-start',
//           gap: 54,
//           display: 'inline-flex',
//         }}
//       >
//         {[1, 2, 3, 4].map((item) => (
//           <div key={item} style={{ width: 20, height: 20, background: '#545454' }} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Courses;
// -------v1-------

//--------v2-------------------
// import React from 'react';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import AnnouncementIcon from '@mui/icons-material/Announcement';
// import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
// import ChatIcon from '@mui/icons-material/Chat';
// const Courses = () => {

//   const getMuiIcon = (icon) => {
//     switch (icon) {
//       case 'assignments':
//         return <AssignmentIcon />;
//       case 'announcement':
//         return <AnnouncementIcon />;
//       case 'files':
//         return <InsertDriveFileIcon />;
//       case 'chat':
//         return <ChatIcon />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div style={{ width: '100%', height: '100%', position: 'relative' }}>
//       <div
//         style={{
//           width: 320,
//           height: 200,
//           left: 0,
//           top: 0,
//           position: 'absolute',
//           background: 'white',
//           boxShadow: '0px 4px 8px 1px rgba(39.21, 66.53, 98.92, 0.16)',
//           borderRadius: 8,
//           border: '1px #355070 solid',
//           backdropFilter: 'blur(14px)',
//         }}
//       />
//       <div
//         style={{
//           width: 44,
//           height: 12,
//           left: 264,
//           top: 12,
//           position: 'absolute',
//           background: 'linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0) 100%)',
//           borderRadius: 8,
//           overflow: 'hidden',
//           justifyContent: 'center',
//           alignItems: 'center',
//           gap: 10,
//           display: 'inline-flex',
//           color: '#0F4C5C',
//           fontSize: 10,
//           fontFamily: 'Inter',
//           fontWeight: '400',
//         }}
//       >
//         <div>Fall 2023</div>
//       </div>
//       <div
//         style={{
//           width: 74,
//           height: 15,
//           left: 12,
//           top: 12,
//           position: 'absolute',
//           background: 'white',
//           borderRadius: 8,
//           overflow: 'hidden',
//           justifyContent: 'center',
//           alignItems: 'center',
//           gap: 10,
//           display: 'inline-flex',
//           color: '#0F4C5C',
//           fontSize: 12,
//           fontFamily: 'Inter',
//           fontWeight: '400',
//         }}
//       >
//         <div>78.28% - A +</div>
//       </div>
//       <div style={{ width: 258.71, height: 42, left: 11.29, top: 72, position: 'absolute' }}>
//         <div
//           style={{
//             width: 30.37,
//             height: 15,
//             left: 0,
//             top: 0,
//             position: 'absolute',
//             color: 'black',
//             fontSize: 12,
//             fontFamily: 'Inter',
//             fontWeight: '600',
//           }}
//         >
//           B551
//         </div>
//         <div
//           style={{
//             width: 258.71,
//             height: 19,
//             left: 0,
//             top: 23,
//             position: 'absolute',
//             color: 'black',
//             fontSize: 16,
//             fontFamily: 'Inter',
//             fontWeight: '400',
//           }}
//         >
//           Elements of Artificial Intelligence
//         </div>
//       </div>
//       <div
//         style={{
//           width: 306,
//           height: 20,
//           paddingLeft: 32,
//           paddingRight: 32,
//           left: 11.29,
//           top: 154,
//           position: 'absolute',
//           justifyContent: 'flex-start',
//           alignItems: 'flex-start',
//           gap: 54,
//           display: 'inline-flex',
//         }}
//       >
//         {[
//           { icon: 'assignments', link: '/assignments' },
//           { icon: 'announcement', link: '/announcement' },
//           { icon: 'files', link: '/files' },
//           { icon: 'chat', link: '/chat' },
//         ].map((item) => (
//           <a key={item.icon} href={item.link}>
//             <div
//               style={{
//                 width: 20,
//                 height: 20,
//                 cursor: 'pointer',
//               }}
//             >
//               {getMuiIcon(item.icon)}
//             </div>
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Courses;

//---------v2----------------

//----------v3----------------
// import React from 'react';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import AnnouncementIcon from '@mui/icons-material/Announcement';
// import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
// import ChatIcon from '@mui/icons-material/Chat';

// const Courses = () => {
//   const getMuiIcon = (icon) => {
//     switch (icon) {
//       case 'assignments':
//         return <AssignmentIcon />;
//       case 'announcement':
//         return <AnnouncementIcon />;
//       case 'files':
//         return <InsertDriveFileIcon />;
//       case 'chat':
//         return <ChatIcon />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: '100vh',
//       }}
//     >
//       {[...Array(3).keys()].map((index) => (
//         <div
//           key={index}
//           style={{
//             width: '320px',
//             height: '200px',
//             position: 'relative',
//             marginBottom: '20px',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <div
//             style={{
//               width: '100%',
//               height: '100%',
//               position: 'absolute',
//               background: 'white',
//               boxShadow: '0px 4px 8px 1px rgba(39.21, 66.53, 98.92, 0.16)',
//               borderRadius: 8,
//               border: '1px #355070 solid',
//               backdropFilter: 'blur(14px)',
//             }}
//           />
//           <div
//             style={{
//               width: '44px',
//               height: '12px',
//               left: '264px',
//               top: '12px',
//               position: 'absolute',
//               background: 'linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0) 100%)',
//               borderRadius: 8,
//               overflow: 'hidden',
//               justifyContent: 'center',
//               alignItems: 'center',
//               gap: '10px',
//               display: 'inline-flex',
//               color: '#0F4C5C',
//               fontSize: '10px',
//               fontFamily: 'Inter',
//               fontWeight: '400',
//             }}
//           >
//             <div>Fall 2023</div>
//           </div>
//           <div
//             style={{
//               width: '74px',
//               height: '15px',
//               left: '12px',
//               top: '12px',
//               position: 'absolute',
//               background: 'white',
//               borderRadius: 8,
//               overflow: 'hidden',
//               justifyContent: 'center',
//               alignItems: 'center',
//               gap: '10px',
//               display: 'inline-flex',
//               color: '#0F4C5C',
//               fontSize: '12px',
//               fontFamily: 'Inter',
//               fontWeight: '400',
//             }}
//           >
//             <div>78.28% - A +</div>
//           </div>
//           <div
//             style={{
//               width: '258.71px',
//               height: '42px',
//               left: '11.29px',
//               top: '72px',
//               position: 'absolute',
//             }}
//           >
//             <div
//               style={{
//                 width: '30.37px',
//                 height: '15px',
//                 left: '0',
//                 top: '0',
//                 position: 'absolute',
//                 color: 'black',
//                 fontSize: '12px',
//                 fontFamily: 'Inter',
//                 fontWeight: '600',
//               }}
//             >
//               B551
//             </div>
//             <div
//               style={{
//                 width: '258.71px',
//                 height: '19px',
//                 left: '0',
//                 top: '23px',
//                 position: 'absolute',
//                 color: 'black',
//                 fontSize: '16px',
//                 fontFamily: 'Inter',
//                 fontWeight: '400',
//               }}
//             >
//               Elements of Artificial Intelligence
//             </div>
//           </div>
//           <div
//             style={{
//               width: '306px',
//               height: '20px',
//               paddingLeft: '32px',
//               paddingRight: '32px',
//               left: '11.29px',
//               top: '154px',
//               position: 'absolute',
//               justifyContent: 'flex-start',
//               alignItems: 'flex-start',
//               gap: '54px',
//               display: 'inline-flex',
//             }}
//           >
//             {[
//               { icon: 'assignments', link: '/assignments' },
//               { icon: 'announcement', link: '/announcement' },
//               { icon: 'files', link: '/files' },
//               { icon: 'chat', link: '/chat' },
//             ].map((item) => (
//               <a key={item.icon} href={item.link}>
//                 <div
//                   style={{
//                     width: '20px',
//                     height: '20px',
//                     cursor: 'pointer',
//                   }}
//                 >
//                   {getMuiIcon(item.icon)}
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Courses;

//--------v3----------------

//-------v4------------------
// import React from 'react';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import AnnouncementIcon from '@mui/icons-material/Announcement';
// import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
// import ChatIcon from '@mui/icons-material/Chat';

// const Courses = () => {
//   const getMuiIcon = (icon) => {
//     switch (icon) {
//       case 'assignments':
//         return <AssignmentIcon />;
//       case 'announcement':
//         return <AnnouncementIcon />;
//       case 'files':
//         return <InsertDriveFileIcon />;
//       case 'chat':
//         return <ChatIcon />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         alignItems: 'flex-start',
//         gap: '20px',
//       }}
//     >
//       {[...Array(3).keys()].map((index) => (
//         <div key={index} style={{ width: '320px', height: '200px', position: 'relative' }}>
//           <div
//             style={{
//               width: '100%',
//               height: '100%',
//               position: 'absolute',
//               background: 'white',
//               boxShadow: '0px 4px 8px 1px rgba(39.21, 66.53, 98.92, 0.16)',
//               borderRadius: 8,
//               border: '1px #355070 solid',
//               backdropFilter: 'blur(14px)',
//             }}
//           />
//           <div
//             style={{
//               width: '44px',
//               height: '12px',
//               left: '264px',
//               top: '12px',
//               position: 'absolute',
//               background: 'linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0) 100%)',
//               borderRadius: 8,
//               overflow: 'hidden',
//               justifyContent: 'center',
//               alignItems: 'center',
//               gap: '10px',
//               display: 'inline-flex',
//               color: '#0F4C5C',
//               fontSize: '10px',
//               fontFamily: 'Inter',
//               fontWeight: '400',
//             }}
//           >
//             <div>Fall 2023</div>
//           </div>
//           <div
//             style={{
//               width: '74px',
//               height: '15px',
//               left: '12px',
//               top: '12px',
//               position: 'absolute',
//               background: 'white',
//               borderRadius: 8,
//               overflow: 'hidden',
//               justifyContent: 'center',
//               alignItems: 'center',
//               gap: '10px',
//               display: 'inline-flex',
//               color: '#0F4C5C',
//               fontSize: '12px',
//               fontFamily: 'Inter',
//               fontWeight: '400',
//             }}
//           >
//             <div>78.28% - A +</div>
//           </div>
//           <div style={{ width: '258.71px', height: '42px', left: '11.29px', top: '72px', position: 'absolute' }}>
//             <div
//               style={{
//                 width: '30.37px',
//                 height: '15px',
//                 left: '0',
//                 top: '0',
//                 position: 'absolute',
//                 color: 'black',
//                 fontSize: '12px',
//                 fontFamily: 'Inter',
//                 fontWeight: '600',
//               }}
//             >
//               B551
//             </div>
//             <div
//               style={{
//                 width: '258.71px',
//                 height: '19px',
//                 left: '0',
//                 top: '23px',
//                 position: 'absolute',
//                 color: 'black',
//                 fontSize: '16px',
//                 fontFamily: 'Inter',
//                 fontWeight: '400',
//               }}
//             >
//               Elements of Artificial Intelligence
//             </div>
//           </div>
//           <div
//             style={{
//               width: '306px',
//               height: '20px',
//               paddingLeft: '32px',
//               paddingRight: '32px',
//               left: '11.29px',
//               top: '154px',
//               position: 'absolute',
//               justifyContent: 'flex-start',
//               alignItems: 'flex-start',
//               gap: '54px',
//               display: 'inline-flex',
//             }}
//           >
//             {[
//               { icon: 'assignments', link: '/assignments' },
//               { icon: 'announcement', link: '/announcement' },
//               { icon: 'files', link: '/files' },
//               { icon: 'chat', link: '/chat' },
//             ].map((item) => (
//               <a key={item.icon} href={item.link}>
//                 <div
//                   style={{
//                     width: '20px',
//                     height: '20px',
//                     cursor: 'pointer',
//                   }}
//                 >
//                   {getMuiIcon(item.icon)}
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Courses;

//--------v4-----------------

//-------v5------using inline css---------------
// import React from 'react';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import AnnouncementIcon from '@mui/icons-material/Announcement';
// import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
// import ChatIcon from '@mui/icons-material/Chat';

// const Courses = () => {
//   const getMuiIcon = (icon) => {
//     switch (icon) {
//       case 'assignments':
//         return <AssignmentIcon />;
//       case 'announcement':
//         return <AnnouncementIcon />;
//       case 'files':
//         return <InsertDriveFileIcon />;
//       case 'chat':
//         return <ChatIcon />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'center',
//       }}
//     >
//       {[...Array(6).keys()].map((index) => (
//         <div key={index} style={{ width: '320px', height: '200px', position: 'relative', margin: '12px' }}>
//           <div
//             style={{
//               width: '100%',
//               height: '100%',
//               position: 'absolute',
//               background: 'white',
//               boxShadow: '0px 4px 8px 1px rgba(39.21, 66.53, 98.92, 0.16)',
//               borderRadius: 8,
//               border: '1px #355070 solid',
//               backdropFilter: 'blur(14px)',
//             }}
//           />
//           <div
//             style={{
//               width: '44px',
//               height: '12px',
//               left: '264px',
//               top: '12px',
//               position: 'absolute',
//               background: 'linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0) 100%)',
//               borderRadius: 8,
//               overflow: 'hidden',
//               justifyContent: 'center',
//               alignItems: 'center',
//               gap: '10px',
//               display: 'inline-flex',
//               color: '#0F4C5C',
//               fontSize: '10px',
//               fontFamily: 'Inter',
//               fontWeight: '400',
//             }}
//           >
//             <div>Fall 2023</div>
//           </div>
//           <div
//             style={{
//               width: '74px',
//               height: '15px',
//               left: '12px',
//               top: '12px',
//               position: 'absolute',
//               background: 'white',
//               borderRadius: 8,
//               overflow: 'hidden',
//               justifyContent: 'center',
//               alignItems: 'center',
//               gap: '10px',
//               display: 'inline-flex',
//               color: '#0F4C5C',
//               fontSize: '12px',
//               fontFamily: 'Inter',
//               fontWeight: '400',
//             }}
//           >
//             <div>78.28% - A +</div>
//           </div>
//           <div style={{ width: '258.71px', height: '42px', left: '11.29px', top: '72px', position: 'absolute' }}>
//             <div
//               style={{
//                 width: '30.37px',
//                 height: '15px',
//                 left: '0',
//                 top: '0',
//                 position: 'absolute',
//                 color: 'black',
//                 fontSize: '12px',
//                 fontFamily: 'Inter',
//                 fontWeight: '600',
//               }}
//             >
//               B551
//             </div>
//             <div
//               style={{
//                 width: '258.71px',
//                 height: '19px',
//                 left: '0',
//                 top: '23px',
//                 position: 'absolute',
//                 color: 'black',
//                 fontSize: '16px',
//                 fontFamily: 'Inter',
//                 fontWeight: '400',
//               }}
//             >
//               Elements of Artificial Intelligence
//             </div>
//           </div>
//           <div
//             style={{
//               width: '306px',
//               height: '20px',
//               paddingLeft: '32px',
//               paddingRight: '32px',
//               left: '11.29px',
//               top: '154px',
//               position: 'absolute',
//               justifyContent: 'flex-start',
//               alignItems: 'flex-start',
//               gap: '54px',
//               display: 'inline-flex',
//             }}
//           >
//             {[
//               { icon: 'assignments', link: '/assignments' },
//               { icon: 'announcement', link: '/announcement' },
//               { icon: 'files', link: '/files' },
//               { icon: 'chat', link: '/chat' },
//             ].map((item) => (
//               <a key={item.icon} href={item.link}>
//                 <div
//                   style={{
//                     width: '20px',
//                     height: '20px',
//                     cursor: 'pointer',
//                   }}
//                 >
//                   {getMuiIcon(item.icon)}
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Courses;
//-------v5------using inline css---------------

//-------v6-------using mui components-----------
// import React from 'react';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import AnnouncementIcon from '@mui/icons-material/Announcement';
// import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
// import ChatIcon from '@mui/icons-material/Chat';

// const Courses = () => {
//   const getMuiIcon = (icon) => {
//     switch (icon) {
//       case 'assignments':
//         return <AssignmentIcon />;
//       case 'announcement':
//         return <AnnouncementIcon />;
//       case 'files':
//         return <InsertDriveFileIcon />;
//       case 'chat':
//         return <ChatIcon />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'center',
//       }}
//     >
//       {[...Array(6).keys()].map((index) => (
//         <div key={index} style={{ width: '320px', height: '200px', position: 'relative', margin: '12px' }}>
//           <div
//             style={{
//               width: '100%',
//               height: '100%',
//               position: 'absolute',
//               background: 'white',
//               boxShadow: '0px 4px 8px 1px rgba(39.21, 66.53, 98.92, 0.16)',
//               borderRadius: 8,
//               border: '1px #355070 solid',
//               backdropFilter: 'blur(14px)',
//             }}
//           />
//           <div
//             style={{
//               width: '44px',
//               height: '12px',
//               left: '264px',
//               top: '12px',
//               position: 'absolute',
//               background: 'linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0) 100%)',
//               borderRadius: 8,
//               overflow: 'hidden',
//               justifyContent: 'center',
//               alignItems: 'center',
//               gap: '10px',
//               display: 'inline-flex',
//               color: '#0F4C5C',
//               fontSize: '10px',
//               fontFamily: 'Inter',
//               fontWeight: '400',
//             }}
//           >
//             <div>Fall 2023</div>
//           </div>
//           <div
//             style={{
//               width: '74px',
//               height: '15px',
//               left: '12px',
//               top: '12px',
//               position: 'absolute',
//               background: 'white',
//               borderRadius: 8,
//               overflow: 'hidden',
//               justifyContent: 'center',
//               alignItems: 'center',
//               gap: '10px',
//               display: 'inline-flex',
//               color: '#0F4C5C',
//               fontSize: '12px',
//               fontFamily: 'Inter',
//               fontWeight: '400',
//             }}
//           >
//             <div>78.28% - A +</div>
//           </div>
//           <div style={{ width: '258.71px', height: '42px', left: '11.29px', top: '72px', position: 'absolute' }}>
//             <div
//               style={{
//                 width: '30.37px',
//                 height: '15px',
//                 left: '0',
//                 top: '0',
//                 position: 'absolute',
//                 color: 'black',
//                 fontSize: '12px',
//                 fontFamily: 'Inter',
//                 fontWeight: '600',
//               }}
//             >
//               B551
//             </div>
//             <div
//               style={{
//                 width: '258.71px',
//                 height: '19px',
//                 left: '0',
//                 top: '23px',
//                 position: 'absolute',
//                 color: 'black',
//                 fontSize: '16px',
//                 fontFamily: 'Inter',
//                 fontWeight: '400',
//               }}
//             >
//               Elements of Artificial Intelligence
//             </div>
//           </div>
//           <div
//             style={{
//               width: '306px',
//               height: '20px',
//               paddingLeft: '32px',
//               paddingRight: '32px',
//               left: '11.29px',
//               top: '154px',
//               position: 'absolute',
//               justifyContent: 'flex-start',
//               alignItems: 'flex-start',
//               gap: '54px',
//               display: 'inline-flex',
//             }}
//           >
//             {[
//               { icon: 'assignments', link: '/assignments' },
//               { icon: 'announcement', link: '/announcement' },
//               { icon: 'files', link: '/files' },
//               { icon: 'chat', link: '/chat' },
//             ].map((item) => (
//               <a key={item.icon} href={item.link}>
//                 <div
//                   style={{
//                     width: '20px',
//                     height: '20px',
//                     cursor: 'pointer',
//                   }}
//                 >
//                   {getMuiIcon(item.icon)}
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Courses;
//-------v6-------using mui components-----------

import React from 'react'
import AssignmentIcon from '@mui/icons-material/Assignment'
import AnnouncementIcon from '@mui/icons-material/Announcement'
import { NotificationsSharp } from '@mui/icons-material'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import ChatIcon from '@mui/icons-material/Chat'

const Courses = () => {
  const getMuiIcon = (icon) => {
    switch (icon) {
      case 'assignments':
        return <AssignmentIcon />
      case 'announcement':
        return <NotificationsSharp />
      case 'files':
        return <InsertDriveFileIcon />
      case 'chat':
        return <ChatIcon />
      default:
        return null
    }
  }

  return (
    <div>
      <div
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: 4,
          display: 'inline-flex',
          marginTop: '2rem',
        }}
      >
        <div style={{ width: 13.93, height: 13, background: 'black' }}></div>
        <div className="text-xl">Courses</div>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {[...Array(4).keys()].map((index) => (
          <div
            key={index}
            style={{
              width: '320px',
              height: '200px',
              position: 'relative',
              margin: '12px',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                background: 'white',
                boxShadow: '0px 4px 8px 1px rgba(39.21, 66.53, 98.92, 0.16)',
                borderRadius: 8,
                border: '1px #355070 solid',
                backdropFilter: 'blur(14px)',
              }}
            />
            <div
              style={{
                width: '44px',
                height: '12px',
                left: '264px',
                top: '12px',
                position: 'absolute',
                background:
                  'linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0) 100%)',
                borderRadius: 8,
                overflow: 'hidden',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                display: 'inline-flex',
                color: '#0F4C5C',
                fontSize: '10px',
                fontFamily: 'Inter',
                fontWeight: '400',
              }}
            >
              <div>Fall 2023</div>
            </div>
            <div
              style={{
                width: '74px',
                height: '15px',
                left: '12px',
                top: '12px',
                position: 'absolute',
                background: 'white',
                borderRadius: 8,
                overflow: 'hidden',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                display: 'inline-flex',
                color: '#0F4C5C',
                fontSize: '12px',
                fontFamily: 'Inter',
                fontWeight: '400',
              }}
            >
              <div>78.28% - A +</div>
            </div>
            <div
              style={{
                width: '258.71px',
                height: '42px',
                left: '11.29px',
                top: '72px',
                position: 'absolute',
              }}
            >
              <div
                style={{
                  width: '30.37px',
                  height: '15px',
                  left: '0',
                  top: '0',
                  position: 'absolute',
                  color: 'black',
                  fontSize: '12px',
                  fontFamily: 'Inter',
                  fontWeight: '600',
                }}
              >
                B551
              </div>
              <div
                style={{
                  width: '258.71px',
                  height: '19px',
                  left: '0',
                  top: '23px',
                  position: 'absolute',
                  color: 'black',
                  fontSize: '16px',
                  fontFamily: 'Inter',
                  fontWeight: '400',
                }}
              >
                Elements of Artificial Intelligence
              </div>
            </div>
            <div
              style={{
                width: '306px',
                height: '20px',
                paddingLeft: '32px',
                paddingRight: '32px',
                left: '11.29px',
                top: '154px',
                position: 'absolute',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '54px',
                display: 'inline-flex',
              }}
            >
              {[
                { icon: 'assignments', link: '/assignments' },
                { icon: 'announcement', link: '/announcement' },
                { icon: 'files', link: '/files' },
                { icon: 'chat', link: '/chat' },
              ].map((item) => (
                <a key={item.icon} href={item.link}>
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      cursor: 'pointer',
                    }}
                  >
                    {getMuiIcon(item.icon)}
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses

//-------v6-------using mui components-----------
