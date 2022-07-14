import { useEffect, useState } from 'react';
import {
  Grid,
  Stack,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { Card } from 'components';
import {
  ALL_STATUSES,
  ERROR_STATUS,
  READY_STATUS,
  TRANSCRIBING_STATUS,
  URL,
} from 'utilities/constants';
import { IMedia } from 'interfaces';
import 'styles/home.css';

const App = () => {
  const [data, setData] = useState<IMedia[]>([]);
  const [media, setMedia] = useState<IMedia[]>([]);

  const handleChangeStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    let cloned =
      event.target.value === ALL_STATUSES
        ? [...data]
        : [...data].filter((t) => t.status === event.target.value);
    setMedia(cloned);
  };

  useEffect(() => {
    try {
      fetch(URL)
        .then((response) => response.json())
        .then((data) => {
          setData(data.media);
          setMedia(data.media);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="app_container">
      <Stack
        alignItems="center"
        direction="row"
        spacing={2}
        sx={{ marginBottom: '30px' }}
      >
        <FormLabel>Status: </FormLabel>
        <RadioGroup
          row
          defaultValue={ALL_STATUSES}
          onChange={handleChangeStatus}
        >
          <FormControlLabel
            value={ALL_STATUSES}
            control={<Radio />}
            label="All"
          />
          <FormControlLabel
            value={READY_STATUS}
            control={<Radio />}
            label="Ready"
          />
          <FormControlLabel
            value={ERROR_STATUS}
            control={<Radio />}
            label="Error"
          />
          <FormControlLabel
            value={TRANSCRIBING_STATUS}
            control={<Radio />}
            label="Transcribing"
          />
        </RadioGroup>
      </Stack>

      <Grid container spacing={2}>
        {media.map((card: IMedia) => (
          <Grid item key={card.id}>
            <Card cardData={card} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default App;
