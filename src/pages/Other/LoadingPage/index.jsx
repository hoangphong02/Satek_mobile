import LogoURL from '~/assets/logos/staticLogoText.png';
import './LoadingPage.scss';

const LoadingPage = () => (
  <div id="loading">
    <div className="loading-inner">
      <img src={LogoURL} alt="Satek Logo" />
      <div className="loading-progress" />
    </div>
  </div>
);

export default LoadingPage;
