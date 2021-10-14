import React from 'react';
import classname from 'classnames';
import './index.less';
import { isValidReactElement } from '@/utils/validater';

export interface ModalProps {
  title: string;
  visible: boolean;
  cancel: () => void;
  children: React.ReactElement;
  footer: React.ReactElement;
}

const Modal = function (props: ModalProps) {
  const { title, visible, cancel, children, footer } = props;
  const modalCls = classname('modal', {
    visible: visible,
  });

  return (
    <div
      className={modalCls}
      style={visible ? { display: 'block' } : { display: 'none' }}
    >
      <div className="modal-drop-filter"></div>
      <div className="modal-wrapper" onClick={cancel}>
        <div className="modal-inner">
          <div className="modal-body" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">{title}</div>
            <div className="modal-content">{children}</div>
            {isValidReactElement(footer) && (
              <div className="modal-footer">{footer}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
