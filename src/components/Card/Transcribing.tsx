import { Typography, LinearProgress } from '@mui/material';
import 'styles/card.css';

const Transcribing = () => (
  <div className="middle">
    <Typography paragraph sx={{ color: 'white' }}>
      Transcribing subtitles
    </Typography>
    <LinearProgress />
  </div>
);

export default Transcribing;
