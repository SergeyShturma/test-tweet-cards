import { ConicTextGradient } from 'react-text-gradients-and-animations';

import s from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer_section}>
        <p className={s.footer_text}> 2023 | All Rights Reserved |&nbsp;</p>
        <p className={s.footer_margin}>
          Developed by&nbsp;
          <span className={s.footer_name}>
            <ConicTextGradient
              angle={45}
              animate
              animateDuration={6}
              position={'center'}
              colors={['#5DADE2 50%', '#D35400 50%']}
            >
              Shturma
            </ConicTextGradient>
          </span>
        </p>
      </div>
    </footer>
  );
};
