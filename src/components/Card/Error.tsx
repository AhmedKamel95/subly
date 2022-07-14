import { Alert, Typography, Stack, Button } from '@mui/material';

const ErrorSection = () => (
  <Alert severity="error">
    <Typography className="error_msg">
      An error occured while processing your file. Delete file to try again, and
      report issue if the problem persists
    </Typography>
    <Stack direction="row" spacing={2} sx={{ justifyContent: 'flex-end' }}>
      <Button variant="outlined" className="delete_btn">
        Delete file
      </Button>
      <Button variant="contained" color="secondary">
        Report issue
      </Button>
    </Stack>
  </Alert>
);

export default ErrorSection;
