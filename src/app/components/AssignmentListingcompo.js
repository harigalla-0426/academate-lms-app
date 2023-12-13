'use client'

// import React, { useState } from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableRow from '@mui/material/TableRow';
// import TableHead from '@mui/material/TableHead';
// import Box from '@mui/material/Box';

// const AssignmentDetails = ({ assignments }) => (
//   <AccordionDetails>
//     <Table>
//       <TableHead>
//         <TableRow>
//           <TableCell>No.</TableCell>
//           <TableCell>Assignment Name</TableCell>
//           <TableCell>Due Date</TableCell>
//           <TableCell>Marks Assigned</TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {assignments.map((assignment, index) => (
//           <TableRow key={index}>
//             <TableCell>{index + 1}</TableCell>
//             <TableCell>{assignment.name}</TableCell>
//             <TableCell>{assignment.dueDate}</TableCell>
//             <TableCell>{assignment.points}</TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   </AccordionDetails>
// );

// const Assignment = () => {
//   const [expanded, setExpanded] = useState(false);

//   const handleChange = (panel) => (_, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   const assignments = [
//     { name: 'Introduction to Quantum Physics', dueDate: '2023-12-15', points: 100 },
//     { name: 'Advanced Calculus Problem Set', dueDate: '2023-12-20', points: 100 },
//     { name: 'English Literature Essay', dueDate: '2023-12-25', points: 100 },
//     { name: 'Computer Science Project', dueDate: '2023-12-30', points: 100 },
//     { name: 'History Research Paper', dueDate: '2024-01-05', points: 100 }
//   ];

//   const readingAssignments = [
//     { name: 'Quantum Physics Textbook', dueDate: '2023-12-15', points: Math.floor(Math.random() * 6) },
//     { name: 'Calculus Textbook', dueDate: '2023-12-20', points: Math.floor(Math.random() * 6) },
//     { name: 'English Literature Book', dueDate: '2023-12-25', points: Math.floor(Math.random() * 6) },
//     { name: 'Computer Science Textbook', dueDate: '2023-12-30', points: Math.floor(Math.random() * 6) },
//     { name: 'History Textbook', dueDate: '2024-01-05', points: Math.floor(Math.random() * 6) }
//   ];

//   const quizAssignments = [
//     { name: 'Quantum Physics Textbook', dueDate: '2023-12-15', points: [0, 5, 10][Math.floor(Math.random() * 3)] },
//     { name: 'Calculus Textbook', dueDate: '2023-12-20', points: [0, 5, 10][Math.floor(Math.random() * 3)] },
//     { name: 'English Literature Book', dueDate: '2023-12-25', points: [0, 5, 10][Math.floor(Math.random() * 3)] },
//     { name: 'Computer Science Textbook', dueDate: '2023-12-30', points: [0, 5, 10][Math.floor(Math.random() * 3)] },
//     { name: 'History Textbook', dueDate: '2024-01-05', points: [0, 5, 10][Math.floor(Math.random() * 3)] }
// ];


//   return (
//     <Box
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       minHeight={{ xs: '100vh', sm: '75vh', md: '50vh', lg: '33vh' }}
//       minWidth={{ xs: '100vw', sm: '75vw', md: '50vw', lg: '33vw' }}
//       p={2}
//     >
//       <Box width="100%" height="100%">
//         <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel1bh-content"
//             id="panel1bh-header"
//           >
//             <Typography sx={{ width: '33%', flexShrink: 0 }}>
//               Upcoming Assignments
//             </Typography>
//           </AccordionSummary>
//           <AssignmentDetails assignments={assignments} />
//         </Accordion>
//         <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel2bh-content"
//             id="panel2bh-header"
//           >
//             <Typography sx={{ width: '33%', flexShrink: 0 }}>
//               Reading Assignments
//             </Typography>
//           </AccordionSummary>
//           <AssignmentDetails assignments={readingAssignments} />
//         </Accordion>
//         <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel2bh-content"
//             id="panel2bh-header"
//           >
//             <Typography sx={{ width: '33%', flexShrink: 0 }}>
//               Quiz Assignments
//             </Typography>
//           </AccordionSummary>
//           <AssignmentDetails assignments={quizAssignments} />
//         </Accordion>
//       </Box>
//     </Box>
//   );
// };

// export default Assignment;





// import React, { useState } from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableRow from '@mui/material/TableRow';
// import TableHead from '@mui/material/TableHead';
// import Box from '@mui/material/Box';

// const AssignmentDetails = ({ assignments }) => (
//   <AccordionDetails>
//     <Table>
//       <TableHead>
//         <TableRow>
//           <TableCell>No.</TableCell>
//           <TableCell>Assignment Name</TableCell>
//           <TableCell>Due Date</TableCell>
//           <TableCell>Marks Assigned</TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {assignments.map((assignment, index) => (
//           <TableRow key={index}>
//             <TableCell>{index + 1}</TableCell>
//             <TableCell>{assignment.name}</TableCell>
//             <TableCell>{assignment.dueDate}</TableCell>
//             <TableCell>{assignment.points}</TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   </AccordionDetails>
// );

// const Assignment = () => {
//   const [expanded, setExpanded] = useState(false);

//   const handleChange = (panel) => (_, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   const assignments = [
//     { name: 'Introduction to Quantum Physics', dueDate: '2023-12-15', points: 100 },
//     { name: 'Advanced Calculus Problem Set', dueDate: '2023-12-20', points: 100 },
//     { name: 'English Literature Essay', dueDate: '2023-12-25', points: 100 },
//     { name: 'Computer Science Project', dueDate: '2023-12-30', points: 100 },
//     { name: 'History Research Paper', dueDate: '2024-01-05', points: 100 }
//   ];

//   const readingAssignments = [
//     { name: 'Quantum Physics Textbook', dueDate: '2023-12-15', points: Math.floor(Math.random() * 6) },
//     { name: 'Calculus Textbook', dueDate: '2023-12-20', points: Math.floor(Math.random() * 6) },
//     { name: 'English Literature Book', dueDate: '2023-12-25', points: Math.floor(Math.random() * 6) },
//     { name: 'Computer Science Textbook', dueDate: '2023-12-30', points: Math.floor(Math.random() * 6) },
//     { name: 'History Textbook', dueDate: '2024-01-05', points: Math.floor(Math.random() * 6) }
//   ];

//   const quizAssignments = [
//     { name: 'Quantum Physics Textbook', dueDate: '2023-12-15', points: [0, 5, 10][Math.floor(Math.random() * 3)] },
//     { name: 'Calculus Textbook', dueDate: '2023-12-20', points: [0, 5, 10][Math.floor(Math.random() * 3)] },
//     { name: 'English Literature Book', dueDate: '2023-12-25', points: [0, 5, 10][Math.floor(Math.random() * 3)] },
//     { name: 'Computer Science Textbook', dueDate: '2023-12-30', points: [0, 5, 10][Math.floor(Math.random() * 3)] },
//     { name: 'History Textbook', dueDate: '2024-01-05', points: [0, 5, 10][Math.floor(Math.random() * 3)] }
// ];


//   return (
//     <Box
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       minHeight={{ xs: '100vh', sm: '75vh', md: '50vh', lg: '33vh' }}
//       minWidth={{ xs: '100vw', sm: '75vw', md: '50vw', lg: '33vw' }}
//       p={2}
//     >
//       <Box width="100%" height="100%">
//         <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel1bh-content"
//             id="panel1bh-header"
//           >
//             <Typography sx={{ width: '33%', flexShrink: 0 }}>
//               Upcoming Assignments
//             </Typography>
//           </AccordionSummary>
//           <AssignmentDetails assignments={assignments} />
//         </Accordion>
//         <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel2bh-content"
//             id="panel2bh-header"
//           >
//             <Typography sx={{ width: '33%', flexShrink: 0 }}>
//               Reading Assignments
//             </Typography>
//           </AccordionSummary>
//           <AssignmentDetails assignments={readingAssignments} />
//         </Accordion>
//         <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel2bh-content"
//             id="panel2bh-header"
//           >
//             <Typography sx={{ width: '33%', flexShrink: 0 }}>
//               Quiz Assignments
//             </Typography>
//           </AccordionSummary>
//           <AssignmentDetails assignments={quizAssignments} />
//         </Accordion>
//       </Box>
//     </Box>
//   );
// };

// export default Assignment;


import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AssignmentDetails = ({ assignments, sortBy }) => {
  const sortedAssignments = [...assignments];

  if (sortBy === 'date') {
    sortedAssignments.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  } else if (sortBy === 'type') {
    sortedAssignments.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <AccordionDetails>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell>Assignment Name</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell>Marks Assigned</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedAssignments.map((assignment, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{assignment.name}</TableCell>
              <TableCell>{assignment.dueDate}</TableCell>
              <TableCell>{assignment.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </AccordionDetails>
  );
};

const Assignment = () => {
  const [expanded, setExpanded] = useState(false);
  const [sortBy, setSortBy] = useState('date'); // Default sort by date

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const assignments = [
    { name: 'Introduction to Quantum Physics', dueDate: '2023-12-15', points: 100 },
    { name: 'Advanced Calculus Problem Set', dueDate: '2023-12-20', points: 100 },
    { name: 'English Literature Essay', dueDate: '2023-12-25', points: 100 },
    { name: 'Computer Science Project', dueDate: '2023-12-30', points: 100 },
    { name: 'History Research Paper', dueDate: '2024-01-05', points: 100 }
  ];

  const readingAssignments = [
    { name: 'Quantum Physics Textbook', dueDate: '2023-12-15', points: Math.floor(Math.random() * 6) },
    { name: 'Calculus Textbook', dueDate: '2023-12-20', points: Math.floor(Math.random() * 6) },
    { name: 'English Literature Book', dueDate: '2023-12-25', points: Math.floor(Math.random() * 6) },
    { name: 'Computer Science Textbook', dueDate: '2023-12-30', points: Math.floor(Math.random() * 6) },
    { name: 'History Textbook', dueDate: '2024-01-05', points: Math.floor(Math.random() * 6) }
  ];

  const quizAssignments = [
    { name: 'Quantum Physics Textbook', dueDate: '2023-12-15', points: [0, 5, 10][Math.floor(Math.random() * 3)] },
    { name: 'Calculus Textbook', dueDate: '2023-12-20', points: [0, 5, 10][Math.floor(Math.random() * 3)] },
    { name: 'English Literature Book', dueDate: '2023-12-25', points: [0, 5, 10][Math.floor(Math.random() * 3)] },
    { name: 'Computer Science Textbook', dueDate: '2023-12-30', points: [0, 5, 10][Math.floor(Math.random() * 3)] },
    { name: 'History Textbook', dueDate: '2024-01-05', points: [0, 5, 10][Math.floor(Math.random() * 3)] }
];


  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight={{ xs: '100vh', sm: '75vh', md: '50vh', lg: '33vh' }}
      minWidth={{ xs: '100vw', sm: '75vw', md: '50vw', lg: '33vw' }}
      p={2}
    >
      <Box width="100%" height="100%">
        <FormControl fullWidth>
          <InputLabel id="sort-by-label">Sort By</InputLabel>
          <Select
            labelId="sort-by-label"
            id="sort-by"
            value={sortBy}
            onChange={handleSortChange}
          >
            <MenuItem value="date">By Date</MenuItem>
            <MenuItem value="type">By Type</MenuItem>
          </Select>
        </FormControl>

        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Upcoming Assignments
            </Typography>
          </AccordionSummary>
          <AssignmentDetails assignments={assignments} sortBy={sortBy} />
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Reading Assignments
            </Typography>
          </AccordionSummary>
          <AssignmentDetails assignments={readingAssignments} sortBy={sortBy} />
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Quiz Assignments
            </Typography>
          </AccordionSummary>
          <AssignmentDetails assignments={quizAssignments} sortBy={sortBy} />
        </Accordion>
      </Box>
    </Box>
  );
};

export default Assignment;
