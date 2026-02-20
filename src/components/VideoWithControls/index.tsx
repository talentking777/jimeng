import { CaretRightOutlined, ExpandOutlined, PauseOutlined, SoundOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useCallback, useEffect, useRef, useState } from 'react';

import styles from './styles.module.scss';

export interface VideoWithControlsProps {
  src: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  qualityLabel?: string;
  className?: string;
}

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return '00:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

const VideoWithControls = ({
  src,
  autoPlay = false,
  muted = true,
  loop = true,
  qualityLabel = '1080P',
  className,
}: VideoWithControlsProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(autoPlay);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    const video = videoRef.current;
    if (!video) return;
    const p = video.play();
    // @ts-expect-error: TypeScript can't infer the return type correctly for `video.play()` in some browsers.
    if (p?.then) {
      p.catch(() => setPlaying(false));
    }
  }, [autoPlay]);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }, []);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (video) setCurrentTime(video.currentTime);
  }, []);

  const handleLoadedMetadata = useCallback(() => {
    const video = videoRef.current;
    if (video) setDuration(video.duration);
  }, []);

  const handleEnded = useCallback(() => {
    setPlaying(false);
    setCurrentTime(0);
  }, []);

  const handleProgressClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const video = videoRef.current;
      if (!video || !duration) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const p = Math.max(0, Math.min(1, x / rect.width));
      video.currentTime = p * duration;
      setCurrentTime(video.currentTime);
    },
    [duration],
  );

  const toggleFullscreen = useCallback(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    if (!document.fullscreenElement) {
      wrap.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }, []);

  const progress = duration > 0 ? currentTime / duration : 0;

  return (
    <div ref={wrapRef} className={`${styles.wrap} ${className ?? ''}`.trim()}>
      <video
        ref={videoRef}
        className={styles.player}
        src={src}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />
      <div className={styles.controls}>
        <div
          className={styles.progress}
          role='progressbar'
          aria-valuenow={currentTime}
          aria-valuemin={0}
          aria-valuemax={duration}
          onClick={handleProgressClick}
        >
          <div className={styles.progressTrack} />
          <div className={styles.progressFill} style={{ width: `${progress * 100}%` }} />
          <div className={styles.progressThumb} style={{ left: `${progress * 100}%` }} />
        </div>
        <div className={styles.controlsBar}>
          <Button type='text' className={styles.ctrlBtn} onClick={togglePlay} aria-label={playing ? '暂停' : '播放'}>
            {playing ? <PauseOutlined className={styles.icon} /> : <CaretRightOutlined className={styles.icon} />}
          </Button>
          <span className={styles.time}>
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
          <span className={styles.spacer} />
          <span className={styles.quality}>{qualityLabel}</span>
          <Button type='text' className={styles.ctrlBtn} aria-label='音量'>
            <SoundOutlined className={styles.icon} />
          </Button>
          <Button type='text' className={styles.ctrlBtn} onClick={toggleFullscreen} aria-label='全屏'>
            <ExpandOutlined className={styles.icon} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VideoWithControls;
