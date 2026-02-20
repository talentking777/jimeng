import { Button } from 'antd';

import styles from './styles.module.scss';
interface DetailModalProps {
  onClose: () => void;
}

const DetailModal = ({ onClose }: DetailModalProps) => {
  return (
    <div className={styles['detail-modal']}>
      <div className={styles['preview-area']}>
        <video src='https://g-k-shuvo.github.io/react-video-corner/sample.mp4' loop autoPlay controls />
      </div>
      <div className={styles['operation-area']}></div>
      <div className={styles['detail-area']}>
        <Button onClick={onClose}></Button>
      </div>
    </div>
  );
};

export default DetailModal;
