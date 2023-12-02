'use client';

import { checkIfEnglish } from '@functions/checkIfEnglish';
import { DictionariesType } from '@i18n/dictionariesType';
import { cva } from '@styled-system/css';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

export const LoginPicker = ({ dict }: { dict: DictionariesType }) => {
  const snsIcons = ['Google', 'GitHub'] as const;

  const getLocalizedLoginButtonText = (snsName: 'Google' | 'GitHub') => {
    const buttonText = dict.login.buttonText;
    const isTextInEnglish = checkIfEnglish(buttonText);

    return isTextInEnglish
      ? `${buttonText}${snsName}`
      : `${snsName}${buttonText}`;
  };

  return (
    <div className={wrapper()}>
      <h1 className={title()}>{dict.login.title}</h1>
      <div className={buttonContainer()}>
        {snsIcons.map((snsName) => (
          <button
            onClick={() =>
              signIn(`${snsName.toLowerCase()}`, { callbackUrl: '/' })
            }
            key={snsName}
            className={loginButton()}
          >
            <Image
              src={`/Icon/${snsName}.png`}
              alt={`${snsName}-icon`}
              width={23}
              height={23}
            />
            <p className={loginButtonText()}>
              {getLocalizedLoginButtonText(snsName)}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

const wrapper = cva({
  base: {
    padding: '30px 38px',
    width: '520px',
    height: '244px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow:
      '0px 1px 3px 0px rgba(0, 0, 0, 0.05), 0px 10px 15px -5px rgba(0, 0, 0, 0.10), 0px 7px 7px -5px rgba(0, 0, 0, 0.04)',
  },
});

const title = cva({
  base: {
    textAlign: 'center',
    fontSize: '20.8px',
    fontWeight: 'bold',
  },
});

const buttonContainer = cva({
  base: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '36px',
    gap: '24px',
    alignItems: 'center',
  },
});

const loginButton = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '12px 0',
    width: '100%',
    border: '1px solid #F7F9FA',
    borderRadius: '10px',
    boxSizing: 'border-box',
    boxShadow:
      '0px 1px 3px 0px rgba(0, 0, 0, 0.05), 1px 1px 2px 0px rgba(0, 0, 0, 0.10)',
    cursor: 'pointer',
  },
});

const loginButtonText = cva({
  base: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
});
