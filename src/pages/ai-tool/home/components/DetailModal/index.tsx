import { Button } from 'antd';

import styles from './styles.module.scss';

interface DetailModalProps {
  onClose: () => void;
}

const DetailModal = ({ onClose }: DetailModalProps) => {
  return (
    <div className={styles['detail-modal']}>
      <div className={styles['preview-area']}>
        <video
          src='https://v9-artist.vlabvod.com/6ae083abd40916cf2d254181fe5060f1/69a095a6/video/tos/cn/tos-cn-v-148450/ooPQCyzHyQvwlZCiAY5gSsIGBQEagiyTuhKEI/?a=4066&ch=0&cr=0&dr=0&er=0&cd=0%7C0%7C0%7C0&br=4121&bt=4121&cs=0&ds=4&ft=5QYTUxhhe6BMyqXMg2VJD12Nzj&mime_type=video_mp4&qs=0&rc=NjxpN2g5Z2U3ZGc0OmU0Z0BpM2Y7OW05cjg0OTczNDM7M0BeX2BeMTIuXjMxMC1gLzNfYSNkYzM2MmRrNDVhLS1kNC9zcw%3D%3D&btag=80000e00018000&dy_q=1771526919&feature_id=f0150a16a324336cda5d6dd0b69ed299&l=202602200248391D3B51ABC775EF463211'
          loop
        />
      </div>
      <div className={styles['detail-area']}>
        <Button onClick={onClose}></Button>
      </div>
    </div>
  );
};

export default DetailModal;
