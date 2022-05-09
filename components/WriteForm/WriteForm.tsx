import dynamic from 'next/dynamic';
import React from 'react';

import styles from './WriteForm.module.scss';

const Editor = dynamic(() => import('../Editor/Editor').then((m) => m.Editor), {
  ssr: false,
});

const WriteForm: React.FC = () => {
  return (
    <div className={styles.writeForm}>
      <input type="text" placeholder="Заголовок" />
      {/* <Editor /> */}
    </div>
  );
};

export { WriteForm };
