import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import TextsmsIcon from '@mui/icons-material/Textsms';

const Comments = ({ comments }) => (
  <List
    key={comments.id}
    sx={{
      mt: 2,
    }}
  >
    {
      comments.map(comment => (
        <Box
          key={comment.id}
          display="flex"
          flexDirection="column"
          alignItems="center"
          p={2}
          mb={3}
          border="1px solid #000"
        >
          <ListItem
            disablePadding
            sx={{
              m: 1,
              p: 1,
              border: '1px solid black',
            }}
          >
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={comment.name} />
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              m: 1,
              p: 1,
              border: '1px solid black',
            }}
          >
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={comment.email} />
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              m: 1,
              p: 1,
              border: '1px solid black',
            }}
          >
            <ListItemIcon>
              <TextsmsIcon />
            </ListItemIcon>
            <ListItemText primary={comment.body} />
          </ListItem>
        </Box>
      ))
    }

  </List>
);

export default Comments;