import { Button, ConfigProvider, Dropdown, Input, Segmented, theme } from 'antd';

import Discovery from './components/Discovery';
import Event from './components/Event';
import HomeHeaderBanner from './components/HeaderBanner';
import ShortFilm from './components/ShortFilm';
import styles from './styles.module.scss';

const { useToken } = theme;

const AIToolHome = () => {
  const { token } = useToken();
  const contentStyle: React.CSSProperties = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };

  return (
    <div>
      <div className={styles['home-header']}>
        <div className={styles['title-content']}>
          <div>开启你的</div>
          <Dropdown
            menu={{
              items: [
                { label: 'Agent 模式', key: '1' },
                { label: '图片生成', key: '2' },
                { label: '视频生成', key: '3' },
                { label: '数字人', key: '4' },
                { label: '动作模仿', key: '5' },
              ],
            }}
          >
            <div className={styles['selected-option']}>图片生成</div>
          </Dropdown>
          <div>即刻造梦！</div>
        </div>
        <div className={styles['ai-search-content']}>
          <div className={styles['search-content']}>
            <div className={styles['reference-group']}>
              <img src='https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/a91b110ffecb4700aac1fd4bb054bbed~tplv-tb4s082cfz-aigc_resize_loss:720:720.webp?lk3s=4fa96020&x-expires=1772928000&x-signature=If%2B8LQ6B0W6NmB26OhiEjbc73wM%3D' />
            </div>
            <div className={styles['input-content']}>
              <textarea placeholder='Seedance 2.0 全能参考，视频创意无限可能'></textarea>
            </div>
          </div>
          <div className={styles['toolbar-setting']}>
            <Dropdown
              trigger={['click']}
              menu={{
                selectable: true,
                items: [
                  { label: 'Agent 模式', key: '1' },
                  { label: '图片生成', key: '2' },
                  { label: '视频生成', key: '3' },
                  { label: '数字人', key: '4' },
                  { label: '动作模仿', key: '5' },
                ],
              }}
            >
              <Button>图片生成</Button>
            </Dropdown>
            <Dropdown
              trigger={['click']}
              menu={{
                selectable: true,
                items: [
                  {
                    label: '图片 4.5',
                    key: '1',
                  },
                  {
                    label: '图片 4.1',
                    key: '2',
                  },
                  {
                    label: '图片 4.0',
                    key: '3',
                  },
                  {
                    label: '图片 3.1',
                    key: '4',
                  },
                  {
                    label: '图片 3.0',
                    key: '5',
                  },
                ],
              }}
            >
              <Button>图片 4.0</Button>
            </Dropdown>
            <Dropdown trigger={['click']} menu={{ items: [] }} popupRender={() => <div style={contentStyle}>123</div>}>
              <Button>21:9 高清 2K</Button>
            </Dropdown>
          </div>
        </div>
        <HomeHeaderBanner />
      </div>
      <div className={styles['filter-bar']}>
        <ConfigProvider
          theme={{
            components: {
              Segmented: {
                trackBg: 'transparent', // remove the big background track
                itemColor: 'rgba(255,255,255,.65)',
                itemHoverColor: 'rgba(255,255,255,.85)',
                itemSelectedColor: 'rgba(255,255,255,.95)',
                itemSelectedBg: 'rgba(255,255,255,.08)', // active pill bg
                itemHoverBg: 'rgba(255,255,255,.06)',
              },
            },
          }}
        >
          <Segmented className='tabs' options={['发现', '短片', '活动']} defaultValue='发现' />
        </ConfigProvider>
        <Input placeholder='版画' className={styles['search-input']} />
      </div>
      <Discovery />
      <ShortFilm />
      <Event />
    </div>
  );
};

export default AIToolHome;
