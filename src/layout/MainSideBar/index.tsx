import { Dropdown } from 'antd';
import { ReactComponent as HomeImg } from 'assets/home.svg';
import LogoImg from 'assets/logo.png';
import { ReactComponent as MenuImg } from 'assets/menu.svg';
import { ReactComponent as MenuAIImg } from 'assets/menu-ai.svg';
import { ReactComponent as MenuAPIImg } from 'assets/menu-api.svg';
import { ReactComponent as MenuAssetImg } from 'assets/menu-asset.svg';
import { ReactComponent as MenuAssetActiveImg } from 'assets/menu-asset-active.svg';
import { ReactComponent as MenuCanvasImg } from 'assets/menu-canvas.svg';
import { ReactComponent as MenuCanvasActiveImg } from 'assets/menu-canvas-active.svg';
import { ReactComponent as MenuChangeLogImg } from 'assets/menu-change-log.svg';
import { ReactComponent as MenuGenerateImg } from 'assets/menu-generate.svg';
import { ReactComponent as MenuGenerateActiveImg } from 'assets/menu-generate-active.svg';
import { ReactComponent as MenuModeImg } from 'assets/menu-mode.svg';
import { ReactComponent as MenuPhoneImg } from 'assets/menu-phone.svg';
import { ReactComponent as MenuPlatformAggrement } from 'assets/menu-platform-agreement.svg';

import styles from './styles.module.scss';

const MainSideBar = () => {
  return (
    <div className={styles['main-side-bar']}>
      <div>
        <img src={LogoImg} className={styles['logo']} />
      </div>
      <div>
        <div className={styles['menu-item']}>
          <HomeImg />
          <span>灵感</span>
        </div>
        <div className={styles['menu-item']}>
          <MenuGenerateImg className={styles['deactive']} />
          <MenuGenerateActiveImg className={styles['active']} />
          <span>生成</span>
        </div>
        <div className={styles['menu-item']}>
          <MenuAssetImg className={styles['deactive']} />
          <MenuAssetActiveImg className={styles['active']} />
          <span>资产</span>
        </div>
        <div className={styles['menu-item']}>
          <MenuCanvasImg className={styles['deactive']} />
          <MenuCanvasActiveImg className={styles['active']} />
          <span>画布</span>
        </div>
      </div>
      <div>
        <div className={styles['icon-menu-item']}>
          <MenuPhoneImg />
        </div>
        <div className={styles['icon-menu-item']}>
          <MenuAPIImg />
        </div>
        <Dropdown
          placement='topRight'
          menu={{
            items: [
              {
                label: '平台协议',
                key: '1',
                icon: <MenuPlatformAggrement className={styles['menu-item-icon']} />,
                children: [
                  {
                    label: '用户服务协议',
                    key: '1-1',
                  },
                  {
                    label: '隐私政策',
                    key: '1-2',
                  },
                  {
                    label: '社区自律公约',
                    key: '1-3',
                  },
                  {
                    label: 'AI功能使用须知',
                    key: '1-4',
                  },
                ],
              },
              { label: '更新日志', key: '2', icon: <MenuChangeLogImg className={styles['menu-item-icon']} /> },
              {
                label: '深色模式',
                key: '3',
                icon: <MenuModeImg className={styles['menu-item-icon']} />,
                children: [
                  {
                    label: '浅色模式',
                    key: '3-1',
                  },
                  {
                    label: '深色模式',
                    key: '3-2',
                  },
                  {
                    label: '跟随系统',
                    key: '3-3',
                  },
                ],
              },
              { label: 'AI生成水印设置', key: '4', icon: <MenuAIImg className={styles['menu-item-icon']} /> },
            ],
          }}
        >
          <div className={styles['icon-menu-item']}>
            <MenuImg />
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default MainSideBar;
