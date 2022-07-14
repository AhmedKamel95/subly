import { Button } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import 'styles/card.css';

const Ready = ({ languages }: { languages: string[] }) => (
  <>
    <div className="top_left">
      <Button
        disableRipple
        className="languages_button"
        variant="outlined"
        startIcon={<TranslateIcon />}
      >
        {languages.length} {`language${languages.length > 1 ? 's' : ''}`}
      </Button>
    </div>
    <div className="middle">
      <Button variant="outlined">Edit</Button>
    </div>
  </>
);

export default Ready;
