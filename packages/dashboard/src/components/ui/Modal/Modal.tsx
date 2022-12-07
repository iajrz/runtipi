import clsx from 'clsx';
import React, { useCallback, useEffect, useState } from 'react';
import styles from './Modal.module.scss';

interface IProps {
  children: React.ReactNode;
  isOpen?: boolean;
  onClose: () => void;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  type?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
}

export const Modal: React.FC<IProps> = ({ children, isOpen, onClose, size = 'lg', type }) => {
  const style = { display: 'none' };

  if (isOpen) {
    style.display = 'block';
  }

  const [modal, setModal] = useState<HTMLDivElement | null>(null);

  // On click outside
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (modal && !modal.contains(event.target as Node)) {
        onClose();
      }
    },
    [modal, onClose],
  );

  // On click outside
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => document.removeEventListener('click', handleClickOutside, true);
  }, [handleClickOutside]);

  return (
    <div className={clsx('modal modal-sm', styles.dimmedBackground)} tabIndex={-1} style={style}>
      <div ref={setModal} className={clsx(`modal-dialog modal-dialog-centered modal-${size}`, styles.zoomIn)} role="document">
        <div className="shadow modal-content">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose} />
          <div className={clsx('modal-status', { [`bg-${type}`]: Boolean(type), 'd-none': !type })} />
          {children}
        </div>
      </div>
    </div>
  );
};