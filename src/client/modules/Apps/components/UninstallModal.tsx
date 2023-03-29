import { IconAlertTriangle } from '@tabler/icons-react';
import React from 'react';
import { Button } from '../../../components/ui/Button';
import { Modal, ModalBody, ModalFooter, ModalHeader } from '../../../components/ui/Modal';
import { AppInfo } from '../../../core/types';

interface IProps {
  info: AppInfo;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const UninstallModal: React.FC<IProps> = ({ info, isOpen, onClose, onConfirm }) => (
  <Modal size="sm" type="danger" onClose={onClose} isOpen={isOpen}>
    <ModalHeader>
      <h5 className="modal-title">Uninstall {info.name} ?</h5>
    </ModalHeader>
    <ModalBody className="text-center py-4">
      <IconAlertTriangle className="icon mb-2 text-danger icon-lg" />
      <h3>Are you sure?</h3>
      <div className="text-muted">All data for this app will be lost.</div>
    </ModalBody>
    <ModalFooter>
      <Button onClick={onConfirm} className="btn-danger">
        Uninstall
      </Button>
    </ModalFooter>
  </Modal>
);