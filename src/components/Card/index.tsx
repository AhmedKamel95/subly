import { useCallback } from 'react';
import moment from 'moment';
import {
  Card as MuiCard,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import ErrorView from './Error';
import ReadyView from './Ready';
import TranscribingView from './Transcribing';
import {
  ERROR_STATUS,
  READY_STATUS,
  TRANSCRIBING_STATUS,
} from 'utilities/constants';
import { IMedia } from 'interfaces';
import 'styles/card.css';

const Card = ({ cardData }: { cardData: IMedia }) => {
  const renderSwitch = useCallback((media: IMedia) => {
    switch (media.status) {
      case READY_STATUS:
        return <ReadyView languages={media.languages} />;

      case TRANSCRIBING_STATUS:
        return <TranscribingView />;

      default:
        return null;
    }
  }, []);

  return (
    <MuiCard>
      {cardData.status === ERROR_STATUS ? (
        <ErrorView />
      ) : (
        <div className="media_container">
          <CardMedia
            component="img"
            image={cardData.cover}
            alt={cardData.name}
            className="image"
          />
          {renderSwitch(cardData)}
        </div>
      )}

      <CardContent>
        <Typography gutterBottom className="card_title">
          {cardData.name}
        </Typography>
        <Typography className="card_info">Status: {cardData.status}</Typography>
        <Typography className="card_info">
          Edited on: {moment.utc(cardData.updatedAt).format('MM/DD/YYYY')}
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
