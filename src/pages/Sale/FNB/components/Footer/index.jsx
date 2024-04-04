import { memo } from 'react';

export const Footer = memo(() => (
  <footer className="sale-fnb--footer">
    <ul className="footer-menus">
      <li><i className="simple-icon-phone" />Hỗ trợ&nbsp;<a href="tel:0988434937">0988 434 937</a></li>
      <li><i className="simple-icon-envelope-letter" />info@satek.vn</li>
      <li>
        <i className="simple-icon-globe" />
        <a href="https://www.satek.vn">www.satek.vn</a>
      </li>
    </ul>
  </footer>
));
