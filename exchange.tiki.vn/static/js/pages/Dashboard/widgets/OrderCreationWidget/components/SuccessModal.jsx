import React from 'react';
import styled from 'styled-components';
import { Modal } from 'antd';
import Lottie from 'react-lottie';
import SuccessLottie from '@assets/lotties/success.json';
import { formatNumber } from '@utils';
import { ASTRA_LABEL, TRANSACTION_TYPE } from '@constants';

const StyledModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 8px;
    background: white;
  }
  .ant-modal-body {
    text-align: center;
  }

  .title {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: var(--gray-90);
    margin: 24px 0 8px 0;
  }

  .description {
    font-size: 14px;
    line-height: 20px;
    color: var(--gray-80);
  }
`;

const CloseButton = styled.div`
  width: 170px;
  margin: 24px auto auto auto;
  padding: 8px 0;
  text-align: center;
  cursor: pointer;
  border: 1px solid #0b74e5;
  border-radius: 4px;
  color: #0b74e5;
`;

const useSuccessModalProps = () => {
  const [orderDetail, setOrderDetail] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);
  const handleOpenModal = React.useCallback((newOrderDetail) => {
    setOrderDetail(newOrderDetail);
    setModalVisible(true);
  }, []);
  const handleCloseModal = React.useCallback(() => {
    setModalVisible(false);
  }, []);

  const transactionVolume = formatNumber(orderDetail?.origin_volume, {
    unit: ASTRA_LABEL,
  });
  const modalTitle =
    orderDetail?.side === TRANSACTION_TYPE.BUY
      ? 'Đặt lệnh mua Astra'
      : 'Đặt lệnh bán Astra';
  const modalDescription =
    orderDetail?.side === TRANSACTION_TYPE.BUY
      ? `Đặt lệnh mua thành công ${transactionVolume}`
      : `Đặt lệnh bán thành công ${transactionVolume}`;

  return {
    width: 480,
    centered: true,
    visible: modalVisible,
    closable: false,
    footer: null,
    onClose: handleCloseModal,
    modalTitle,
    modalDescription,
    handleCloseModal,
    handleOpenModal,
  };
};

const SuccessModal = ({
  modalTitle,
  modalDescription,
  handleCloseModal,
  ...successModalProps
}) => {
  return (
    <StyledModal {...successModalProps}>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: SuccessLottie,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
        height={120}
        width={120}
      />
      <div className="title">{modalTitle}</div>
      <div className="description">{modalDescription}</div>
      <CloseButton onClick={handleCloseModal}>Đóng</CloseButton>
    </StyledModal>
  );
};

export { useSuccessModalProps };
export default SuccessModal;
