// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    const theme = useTheme();

    return (
        /**
         * if you want to use image instead of svg uncomment following, and comment out <svg> element.
         *
         * <img src={logo} alt="Berry" width="100" />
         *
         */
        <svg width="50" height="32" viewBox="0 0 166 125" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M61.5747 87.6681H125.167L90.7945 124.458H27.5435L61.5747 87.6681ZM165.731 44.0518H35.0877L0.730957 80.8643H131.374L165.731 44.0518ZM75.561 0.458008H138.918L104.7 37.2479H41.2945L75.561 0.458008Z"
                fill="url(#paint0_linear_92_111)"
            />
            <defs>
                <linearGradient id="paint0_linear_92_111" x1="83.231" y1="16.6038" x2="83.231" y2="124.458" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#022465" />
                    <stop offset="0.523958" stop-color="#FCD116" />
                    <stop offset="1" stop-color="#CE1126" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default Logo;
