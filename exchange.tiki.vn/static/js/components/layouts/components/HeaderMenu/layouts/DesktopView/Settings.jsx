import React from 'react';
import { ReactComponent as SettingIcon } from '@assets/images/settings.svg';
import { Dropdown, Menu } from 'antd';
import { useDispatch } from 'react-redux';
import { useLayoutCustomization } from '@hooks';

const Settings = () => {
  const dispatch = useDispatch();
  const handleClickResetLayout = React.useCallback(() => {
    dispatch({ type: 'layout/resetDefaultLayout' });
  }, [dispatch]);
  const { canCustomize } = useLayoutCustomization();
  if (!canCustomize) {
    return null;
  }

  return (
    <Dropdown
      overlayClassName="header-menu-dropdown"
      overlay={
        <Menu>
          <Menu.Item key="reset-layout">
            <div onClick={handleClickResetLayout}>
              Khôi phục giao diện mặc định
            </div>
          </Menu.Item>
        </Menu>
      }
    >
      <SettingIcon />
    </Dropdown>
  );
};

export default Settings;
