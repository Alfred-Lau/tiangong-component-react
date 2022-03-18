import React from 'react';
import type { FC } from 'react';
import './index.less';

const prefixCls = 'tiangong';

export type ImagePreviewProps = {
  src: string;
  previewText?: string;
};

const ImagePreview: FC<ImagePreviewProps> = (props) => {
  const { src, previewText = '预览' } = props;
  return (
    <div className={`${prefixCls}-image-preview`}>
      <div className={`${prefixCls}-image-preview-content`}>
        <img src={src} alt="" />
        <div className={`${prefixCls}-image-preview-content-mask`}>
          <span className={`${prefixCls}-image-preview-content-mask-title`}>
            {' '}
            {previewText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
