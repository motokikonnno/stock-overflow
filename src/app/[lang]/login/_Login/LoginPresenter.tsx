import { LoginPicker } from '@components/Login/LoginPicker';
import { DictionariesType } from '@i18n/dictionariesType';
import { cva } from '@styled-system/css';

export const LoginPresenter = ({ dict }: { dict: DictionariesType }) => {
  return (
    <div className={layout()}>
      <LoginPicker dict={dict} />
    </div>
  );
};

const layout = cva({
  base: {
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
  },
});
