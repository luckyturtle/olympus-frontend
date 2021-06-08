import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    .app, #dapp {
        background: ${({theme}) => theme.background};
        background-color: ${({theme}) => theme.backgroundColor};
        color: ${({theme}) => theme.color};
        height: 100%;
        transition: all 0.27s linear;
        position: fixed;
        
    }
    .dapp-sidebar {
        background-color: ${({theme}) => theme.cardBg};
    }
    .branding-header-icon, 
    .olympus-sushi img,
    .social-icon-small,
    .dapp-menu-external-links svg {
        filter: ${({theme}) => theme.logoColor};
    }
    .button-dapp-menu,
    .dapp-menu-top a h3,
    .ohm-card .card-header h5,
    .stake-table tbody,
    .olympus-sushi h3,
    .olympus-sushi a, 
    #dapp p {
        color: ${({theme}) => theme.color};
    }
    .ohm-dashboard-card,
    .ohm-card .card-content {
        background-color: ${({theme}) => theme.cardBg};
        h2 { 
            color: ${({theme}) => theme.color};
        }
    }
    .btn {
        color: ${({theme}) => theme.color} !important;
        background: ${({theme}) => theme.defaultButtonBg};
    }
    .btn a {
        color: ${({theme}) => theme.color} !important;
    }
    .stake-button {
        background: ${({theme}) => theme.CTAButtonBg};
        color: ${({theme}) => theme.CTAButtonColor} !important;
        border: 2px solid ${({theme}) => theme.CTAButtonBg};
            &:hover {
                background: ${({theme}) => theme.CTAButtonBgHover};
                color: ${({theme}) => theme.CTAButtonColorHover} !important;
                border: 2px solid ${({theme}) => theme.CTAButtonBgHover};
            }
    }
`;