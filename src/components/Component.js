import {
  useCallback,
  useEffect,
  useState,
  useTransition
} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Comments from './Comments';

const Component = () => {
  const [input, setInput] = useState('');
  const [inputChange, setInputChange] = useState();

  const [comments, setComments] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    console.log('render');
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(result => result.json())
      .then(data => setComments(data));
  },[inputChange, setComments]);

  const handleChange = useCallback((event) => {
    const value = event.target.value;
    setInput(value);

    startTransition(() => {
      setInputChange(value)
    });
       // fetch('https://jsonplaceholder.typicode.com/comments')
       //   .then(result => result.json())
       //   .then(data => setComments(data));
    }, [startTransition, setInputChange, setInput])

  return (
    <Box display="flex" flexDirection="column" m={3}>
      <TextField
        value={input}
        variant="outlined"
        label="Search"
        onChange={handleChange}
        sx={{
          width: 200,
        }}
      />
      { isPending ? (
        <CircularProgress sx={{
          mt: 2,
        }}/>
      ) : (
        comments.length !== 0 && <Comments comments={comments} />
      )}
      {/*{comments.length !== 0 && <Comments comments={comments}/>}*/}
    </Box>
  )
};

export default Component;