import { Button } from 'antd';
import VideoWithControls from 'components/VideoWithControls';

import styles from './styles.module.scss';

interface DetailModalProps {
  onClose: () => void;
}

const VIDEO_SRC = 'https://g-k-shuvo.github.io/react-video-corner/sample.mp4';

const DetailModal = ({ onClose }: DetailModalProps) => {
  return (
    <div className={styles['detail-modal']}>
      <div className={styles['preview-area']}>
        <VideoWithControls src={VIDEO_SRC} autoPlay muted loop qualityLabel='1080P' />
      </div>
      <div className={styles['operation-area']} />
      <div className={styles['detail-area']}>
        <Button onClick={onClose} />
      </div>
    </div>
  );
};

export default DetailModal;
