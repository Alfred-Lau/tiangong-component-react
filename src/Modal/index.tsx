import React from 'react';
import classname from 'classnames';
import './index.less';

export interface ModalProps {
  title: string;
  visible: boolean;
  cancel: () => void;
  children: React.ReactElement;
}

const Modal = function (props: ModalProps) {
  const { title, visible, cancel, children } = props;
  const modalCls = classname('modal', {
    visible: visible,
  });

  return (
    <div className={modalCls}>
      <div className="modal-drop-filter"></div>
      <div className="modal-wrapper" onClick={cancel}>
        <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
          <div className="modal-body">
            <div className="modal-header">{title}</div>
            <div className="modal-content">{children}</div>
            <div className="modal-footer">我是底部</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
