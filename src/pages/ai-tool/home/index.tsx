import { ArrowUpOutlined, DownOutlined } from '@ant-design/icons';
import type { SelectInfo } from '@rc-component/menu/es/interface';
import { Button, ConfigProvider, Dropdown, Input, Segmented, theme } from 'antd';
import { useEffect, useState } from 'react';
import { getGenerateTypeIconNode, OBJECT_GENERATE_TYPE, OBJECT_GENERATE_TYPE_VALUE } from 'utils/enums';

import Discovery from './components/Discovery';
import Event from './components/Event';
import HomeHeaderBanner from './components/HeaderBanner';
import ShortFilm from './components/ShortFilm';
import styles from './styles.module.scss';

const { useToken } = theme;

const AIToolHome = () => {
  const { token } = useToken();
  const [generateType, setGenerateType] = useState<OBJECT_GENERATE_TYPE>(OBJECT_GENERATE_TYPE.IMAGE_GENERATION);
  const [imagePrompt, setImagePrompt] = useState<string>('');
  const [videoPrompt, setVideoPrompt] = useState<string>('');

  const contentStyle: React.CSSProperties = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };

  useEffect(() => {}, []);

  const handleChangeGenerateType = (event: SelectInfo) => {
    setGenerateType(event.key as OBJECT_GENERATE_TYPE);
  };

  const renderInputContent = () => {
    switch (generateType) {
      case OBJECT_GENERATE_TYPE.IMAGE_GENERATION:
        return <textarea placeholder='请描述你想生成的图片' value={imagePrompt} onChange={e => setImagePrompt(e.target.value)} />;
      case OBJECT_GENERATE_TYPE.VIDEO_GENERATION:
        return (
          <textarea
            placeholder='输入文字，描述你想创作的画面内容、运动方式等。例如：一个3D形象的小男孩，在公园滑滑板。'
            value={videoPrompt}
            onChange={e => setVideoPrompt(e.target.value)}
          />
        );
      default:
        return null;
    }
  };

  const isBtnActionDisabled = () => {
    switch (generateType) {
      case OBJECT_GENERATE_TYPE.IMAGE_GENERATION:
        return !imagePrompt;
      case OBJECT_GENERATE_TYPE.VIDEO_GENERATION:
        return !videoPrompt;
      default:
        return true;
    }
  };

  return (
    <div>
      <div className={styles['home-header']}>
        <div className={styles['title-content']}>
          <div>开启你的</div>
          <Dropdown
            trigger={['click']}
            menu={{
              items: [
                // { label: 'Agent 模式', key: '1' },
                { label: '图片生成', key: OBJECT_GENERATE_TYPE.IMAGE_GENERATION },
                { label: '视频生成', key: OBJECT_GENERATE_TYPE.VIDEO_GENERATION },
                // { label: '数字人', key: '4' },
                // { label: '动作模仿', key: '5' },
              ],
              selectable: true,
              selectedKeys: [generateType],
              onSelect: handleChangeGenerateType,
            }}
          >
            <div className={styles['selected-option']}>
              {OBJECT_GENERATE_TYPE_VALUE[generateType].label}
              <DownOutlined />
            </div>
          </Dropdown>
          <div>即刻造梦！</div>
        </div>
        <div className={styles['ai-search-content']}>
          <div className={styles['search-content']}>
            <div className={styles['reference-group']}>
              <img src='https://p26-dreamina-sign.byteimg.com/tos-cn-i-tb4s082cfz/a91b110ffecb4700aac1fd4bb054bbed~tplv-tb4s082cfz-aigc_resize_loss:720:720.webp?lk3s=4fa96020&x-expires=1772928000&x-signature=If%2B8LQ6B0W6NmB26OhiEjbc73wM%3D' />
            </div>
            <div className={styles['input-content']}>{renderInputContent()}</div>
          </div>
          <div className={styles['toolbar-setting']}>
            <Dropdown
              trigger={['click']}
              menu={{
                selectable: true,
                items: [
                  // { label: 'Agent 模式', key: '1' },
                  {
                    label: '图片生成',
                    key: OBJECT_GENERATE_TYPE.IMAGE_GENERATION,
                    icon: getGenerateTypeIconNode(OBJECT_GENERATE_TYPE.IMAGE_GENERATION),
                  },
                  {
                    label: '视频生成',
                    key: OBJECT_GENERATE_TYPE.VIDEO_GENERATION,
                    icon: getGenerateTypeIconNode(OBJECT_GENERATE_TYPE.VIDEO_GENERATION),
                  },
                  // { label: '数字人', key: '4' },
                  // { label: '动作模仿', key: '5' },
                ],
                selectedKeys: [generateType],
                onSelect: handleChangeGenerateType,
              }}
            >
              <Button className={styles['btn-generate-type']} icon={getGenerateTypeIconNode(generateType)}>
                {OBJECT_GENERATE_TYPE_VALUE[generateType].label}
                <DownOutlined />
              </Button>
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

            <Button shape='circle' icon={<ArrowUpOutlined />} className={styles['btn-action']} disabled={isBtnActionDisabled()} />
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
